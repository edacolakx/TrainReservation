import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [trains, setTrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [hiddenTrain, setHiddenTrain] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [finalResponse, setFinalResponse] = useState([]);

  const [trainName, setTrainName] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [differentWagons, setDifferentWagons] = useState(false);

  useEffect(() => {
    async function fetchTrains() {
      try {
        const response = await axios.get(
          "https://trainreservationapi.onrender.com"
        );
        const data = response.data;
        setTrains(data.trenler);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
    fetchTrains();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = trains.filter((item) =>
        item.Ad.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      if (!isDismissed && filtered.length > 0) {
        setHiddenTrain(true);
      }
    } else {
      setFilteredData([]);
      setHiddenTrain(false);
      setIsDismissed(false);
    }
  }, [searchTerm, trains, isDismissed]);

  async function checkReservation() {
    try {
      const response = await axios.post(
        "https://trainreservationapi.onrender.com/check-reservation",
        {
          Name: trainName,
          PassengerCount: passengerCount,
          DifferentWagons: differentWagons,
        }
      );
      const data = response.data;
      setFinalResponse(data);
      console.log("Rezervasyon durumu:", data);
      console.log(trainName, passengerCount, differentWagons);
      setDifferentWagons(false);
      setPassengerCount(1);
      setSearchTerm("");
    } catch (error) {
      console.error("Rezervasyon kontrolü sırasında bir hata oluştu:", error);
    }
  }
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold m-2 pb-[4%] justify-center text-center text-red-700">
        Tren Rezervasyon
      </h1>
      <p className="text-lg text-gray-700 mb-2 font-bold">
        Binmek istediğiniz seferi seçin:
      </p>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Tren adı ara..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDismissed(false);
          }}
          className="w-full border-2 border-gray-300 p-3 rounded-lg mb-2 focus:border-blue-500 focus:outline-none"
        />

        {hiddenTrain && filteredData.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-200 rounded-lg z-10 max-h-60 overflow-y-auto">
            {filteredData.map((item, index) => (
              <li
                key={index}
                className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => {
                  setSearchTerm(item.Ad);
                  setTrainName(item.Ad);
                  setHiddenTrain(false);
                  setIsDismissed(true);
                  console.log("Seçilen tren:", item.Ad);
                }}
              >
                <span className="text-gray-800">{item.Ad}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-lg text-gray-700 mb-2 font-bold">
        Rezervasyon yapılması istenilen kişi sayısını seçin:
      </p>
      <div className="border-2 flex flex-row items-center justify-between p-2 rounded-lg mb-4 w-[30%] lg:w-[8%]">
        <button
          className="text-2xl"
          onClick={() =>
            setPassengerCount(passengerCount > 1 ? passengerCount - 1 : 1)
          }
        >
          -
        </button>
        <p className="text-xl">{passengerCount}</p>
        <button
          className="text-2xl"
          onClick={() => setPassengerCount(passengerCount + 1)}
        >
          +
        </button>
      </div>
      <p className="text-lg text-gray-700 mb-2 font-bold">
        Farklı vagonlarda olmalarında sorun var mı?
      </p>
      <div className="flex flex-row items-center justify-between w-[18%] gap-4 mb-8">
        <button
          className={`border-2 border-gray-300 rounded-lg px-4 py-2 ${
            differentWagons == false
              ? "bg-green-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setDifferentWagons(false)}
        >
          Evet
        </button>
        <button
          className={`border-2 border-gray-300 rounded-lg px-4 py-2 ${
            differentWagons == true
              ? "bg-red-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setDifferentWagons(true)}
        >
          Hayır
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg  w-[36%] hover:bg-blue-600 transition-colors mb-4"
        onClick={() => checkReservation()}
      >
        Rezervasyon Kontrol Et
      </button>
      <div>
        <div className="flex flex-row mb-4">
          <p className="font-bold font-xl mr-2">Rezervasyon Durumu:</p>
          {finalResponse && finalResponse.reservationAvailable !== undefined ? (
            <p
              className={`font-bold ${
                finalResponse.reservationAvailable
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {finalResponse.reservationAvailable
                ? "Rezervasyon Yapılabilir"
                : "Rezervasyon Yapılamaz"}
            </p>
          ) : (
            <p className="font-bold text-gray-500">Seçim Yapınız</p>
          )}
        </div>
      </div>
      <div>
        {finalResponse && finalResponse.reservationAvailable === true
          ? Object.entries(finalResponse.availableWagons).map(
              ([wagonKey, wagonData]) => (
                <div key={wagonKey} className="border rounded p-3 bg-gray-50">
                  <p className="font-semibold">Vagon: {wagonData.wagonName}</p>
                  <p>Yerleştirilebilecek Koltuklar: {wagonData.person}</p>
                </div>
              )
            )
          : null}
      </div>
    </div>
  );
}

export default App;
