# Kafadar Web Deployment Checklist

Bu listeyi tamamlamadan canlıya çıkmayın.

## 1) Ortam değişkenleri

Üretim ortamında aşağıdaki değişkenleri tanımlayın:

- `PUBLIC_SITE_URL` (örn: `https://kafadar.app`)
- `PUBLIC_APP_STORE_URL` (doğrudan App Store uygulama linki)
- `PUBLIC_GOOGLE_PLAY_URL` (doğrudan Google Play uygulama linki)
- `PUBLIC_APPLE_TEAM_ID` (Apple Developer Team ID)
- `PUBLIC_IOS_BUNDLE_ID` (örn: `com.kafadar.app`)
- `PUBLIC_ANDROID_PACKAGE` (örn: `com.kafadar.app`)
- `PUBLIC_ANDROID_CERT_SHA256` (Play App Signing SHA-256)

## 2) Deep link doğrulama

- `/.well-known/apple-app-site-association` dosyasının dolu geldiğini kontrol edin.
- `/.well-known/assetlinks.json` dosyasının dolu geldiğini kontrol edin.
- `https://kafadar.app/q/test` linkini telefonda test edin.
- Uygulama kurulu değilse `404 -> /deeplink -> store` fallback akışını test edin.

## 3) Hukuki sayfalar

- `/gizlilik-politikasi`
- `/kullanim-kosullari`
- `/hesap-silme`
- `/en/privacy-policy`
- `/en/terms-of-service`
- `/en/delete-account`

## 4) Yayın öncesi komutlar

```bash
npm run check
npm run build
```

Build çıktısında:

- `sitemap-index.xml` üretildiğini,
- `robots.txt` dosyasının çıktıda olduğunu,
- `.well-known` dosyalarının çıktıda olduğunu doğrulayın.
