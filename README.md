# Kafadar Web 🌍

Kafadar mobil uygulaması için resmi web sitesi. Astro, React ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Başlarken

Bu proje **Node.js 18+** gerektirir.

### Kurulum

Repoyu klonlayın ve bağımlılıkları yükleyin:

```bash
git clone https://github.com/mobilteknolojileri/kafadar-web.git
cd kafadar-web
npm install
```

### Scriptler

| Komut             | Açıklama                                                |
| :---------------- | :------------------------------------------------------ |
| `npm run dev`     | Geliştirme sunucusunu başlatır (`localhost:4321`).      |
| `npm run build`   | Projeyi üretim için derler (`dist/` klasörüne).         |
| `npm run preview` | Derlenen projeyi yerel olarak önizler.                  |
| `npm run check`   | Astro ve TypeScript hatalarını kontrol eder.            |
| `npm run fix`     | Kod formatını (Prettier) ve hataları otomatik düzeltir. |

## 🛠️ Teknoloji Yığını

- **Framework:** [Astro](https://astro.build)
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **i18n:** Astro i18n (TR/EN)

## Deployment

Bu proje [Vercel](https://vercel.com) üzerinde barındırılmak üzere optimize edilmiştir. `npm run build` komutu `dist` klasörüne statik bir çıktı üretir.

## 📱 Mobile App Links & SEO

Bu proje aynı zamanda mobil uygulama için gerekli olan `assetlinks.json` (Android) ve `apple-app-site-association` (iOS) dosyalarını da barındırır. Bu dosyalar `src/pages/.well-known/` altında bulunur.

## 📝 Lisans

Bu proje özel mülkiyettir. Tüm hakları saklıdır.
