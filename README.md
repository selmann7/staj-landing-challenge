# Mini Landing Page & Bileşen Kütüphanesi

Profesyonel bir staj mülakatı challenge'ı kapsamında geliştirilmiş, React + TypeScript + SCSS Modules tabanlı bir landing page ve yeniden kullanılabilir UI bileşen kütüphanesidir.

## 🚀 Teknolojiler

- **Framework:** React 19 (Vite)
- **Dil:** TypeScript (Tip güvenliği için)
- **Stil:** SCSS Modules (Kapsüllenmiş ve modüler CSS için)
- **Tema:** CSS Variables (Dinamik Light/Dark mode desteği)
- **Erişilebilirlik:** ARIA etiketleri ve semantik HTML5

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18+)
- npm veya yarn

### Adımlar
1. Projeyi klonlayın veya indirin.
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
4. Üretim sürümü için derleme:
   ```bash
   npm run build
   ```

## 🏗️ Proje Yapısı

- `src/components/ui/`: Yeniden kullanılabilir atomik bileşenler (Button, Input, Card, Modal, Accordion).
- `src/sections/`: Landing page ana bölümleri (Hero, Features, Pricing, FAQ, Contact).
- `src/styles/`: Global değişkenler, mixin'ler ve reset stilleri.
- `src/hooks/`: Özel React hook'ları (Örn: `useTheme`).
- `docs/`: Mimari Karar Kayıtları (ADR).

## ✨ Öne Çıkan Özellikler

- **Lighthouse 90+:** Görsel optimizasyonlar, lazy-load ve kod bölümleme ile yüksek performans.
- **Tema Desteği:** Sistem tercihine duyarlı ve kalıcı Dark/Light mode.
- **Responsive:** Tüm ekran boyutları için (Mobile, Tablet, Desktop) tam uyumluluk.
- **Erişilebilirlik:** WCAG standartlarına uyumlu ARIA etiketleri ve klavye navigasyonu.

## 📄 Mimari Kararlar
Teknik tercihlerimizin detayları için [docs/adr-001.md](./docs/adr-001.md) dosyasını inceleyebilirsiniz.
