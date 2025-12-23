# Daily Progress Log - Mini Landing Page & Component Library

Bu döküman, projenin 4 iş günü içerisindeki geliştirme sürecini ve teknik detaylarını içermektedir.

## 📅 Gün 1: Mimari Kurulum ve Temel Altyapı
**Yapılanlar:**
- Proje boilerplate (Vite + React + TS) kurulumu gerçekleştirildi.
- Klasör yapısı (Atomic-lite) PDF gereksinimlerine göre yapılandırıldı.
- Global SCSS yapısı (`_variables`, `_mixins`, `_base`) ve Light/Dark tema CSS değişkenleri tanımlandı.
- `useTheme` hook'u ve `localStorage` entegrasyonu tamamlandı.

**Teknik Zorluklar & Çözümler:**
- **Zorluk:** Farklı tarayıcıların varsayılan stil farklılıkları.
- **Çözüm:** Modern bir CSS Reset yapısı oluşturularak tüm bileşenlerin tutarlı görünmesi sağlandı.

## 📅 Gün 2: Core UI Bileşenleri ve Form Mantığı
**Yapılanlar:**
- `Button`, `Input` ve `Card` bileşenleri SCSS Modules kullanılarak geliştirildi.
- `Input` bileşeni için ARIA etiketleri ve hata durumları (validation states) kurgulandı.
- İletişim formu için yalın TypeScript tabanlı e-posta validasyon algoritması yazıldı.

**Teknik Zorluklar & Çözümler:**
- **Zorluk:** Input bileşeninde label-id eşleşmesinin dinamik ve benzersiz olması.
- **Çözüm:** `useId` benzeri bir yaklaşımla prop üzerinden veya otomatik üretilen benzersiz ID sistemi kuruldu.

## 📅 Gün 3: Karmaşık Bileşenler ve Erişilebilirlik
**Yapılanlar:**
- `Modal` ve `Accordion` bileşenleri tamamlandı.
- Modal için React Portal mimarisi uygulandı.
- `Accordion` için aynı anda tek item açık kalma (exclusive toggle) mantığı kuruldu.

**Teknik Zorluklar & Çözümler:**
- **Zorluk:** Modal açıkken arka planın kaydırılabilmesi ve klavye odağının (focus) modal dışına çıkması.
- **Çözüm:** `useEffect` ile `body { overflow: hidden }` kontrolü eklendi ve `Esc` tuşu ile kapatma fonksiyonu entegre edilerek temel bir accessibility katmanı oluşturuldu.

## 📅 Gün 4: Landing Page Entegrasyonu ve Optimizasyon
**Yapılanlar:**
- Tüm bölümler (`Hero`, `Features`, `Pricing`, `FAQ`, `Contact`) responsive olarak birleştirildi.
- `React.lazy` ve `Suspense` ile kod bölümleme (code splitting) uygulandı.
- Görsel optimizasyonları (lazy load, aspect ratio) ile Lighthouse skorları iyileştirildi.
- ADR ve README dökümantasyonu tamamlandı.

**Teknik Zorluklar & Çözümler:**
- **Zorluk:** Hero bölümündeki LCP görselinin lazy-load nedeniyle düşük performans vermesi.
- **Çözüm:** Hero görseli için `fetchPriority="high"` tanımlandı ve lazy-load bu özel alan için devre dışı bırakılarak açılış hızı optimize edildi.

