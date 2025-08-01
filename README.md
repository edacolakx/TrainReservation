# 🚂 Tren Rezervasyon Sistemi

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir tren rezervasyon sistemi frontend uygulamasıdır. React ve Vite kullanılarak oluşturulmuş olup, kullanıcı dostu arayüz ile tren seferlerini arama ve rezervasyon kontrolü yapma imkanı sunar.

## 🎯 Proje Özellikleri

- **Tren Arama**: Gerçek zamanlı tren seferi arama fonksiyonu
- **Rezervasyon Kontrolü**: Seçilen tren için müsaitlik kontrolü
- **Yolcu Sayısı Seçimi**: Dinamik yolcu sayısı belirleme
- **Vagon Tercihi**: Farklı vagonlarda oturma tercihi
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz
- **Modern UI/UX**: Tailwind CSS ile modern ve kullanıcı dostu tasarım

## 🛠️ Teknolojiler

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **HTTP Client**: Axios 1.11.0
- **Package Manager**: npm
- **Linting**: ESLint

## 📋 Gereksinimler

- npm veya yarn

## 🚀 Kurulum ve Çalıştırma

### 1. Projeyi Klonlayın

```bash
git clone [repository-url]
cd trenrezervasyon
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

### 4. API Sunucusunu Başlatın

Bu proje, ayrı bir repository'de bulunan backend API'sine bağlıdır. https://github.com/edacolakx/TrainReservationAPI adresinde bulabilirsiniz.

## 🔧 Kullanılabilir Komutlar

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview

# Linting çalıştır
npm run lint
```

## 📱 Uygulama Özellikleri

### Tren Arama

- Gerçek zamanlı arama fonksiyonu
- Otomatik tamamlama özelliği
- Filtrelenmiş sonuçlar

### Rezervasyon Sistemi

- Tren seçimi
- Yolcu sayısı belirleme (1-∞)
- Vagon tercihi (aynı/farklı vagonlar)
- Müsaitlik kontrolü

### Kullanıcı Arayüzü

- Modern ve temiz tasarım
- Responsive layout
- Kullanıcı dostu navigasyon
- Gerçek zamanlı geri bildirim

## 🏗️ Proje Yapısı

```
src/
├── App.jsx          # Ana uygulama bileşeni
├── App.css          # Uygulama stilleri
├── main.jsx         # Uygulama giriş noktası
├── index.css        # Global stiller
└── assets/          # Statik dosyalar
```

### API Request Örneği:

```javascript
// Rezervasyon kontrolü
{
  "Name": "Tren Adı",
  "PassengerCount": 2,
  "DifferentWagons": false
}
```

## 📊 Performans

- Vite ile hızlı geliştirme deneyimi
- Hot Module Replacement (HMR)
- Optimized build process
- Minimal bundle size

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje iş görüşmesi amaçlı geliştirilmiştir.

## 👨‍💻 Geliştirici

Bu proje modern web teknolojileri kullanılarak geliştirilmiştir. React, Vite ve Tailwind CSS gibi güncel teknolojiler tercih edilmiştir.

**Not**: Bu proje backend API'si ile birlikte çalışmaktadır. API sunucusunun çalışır durumda olduğundan emin olun.
