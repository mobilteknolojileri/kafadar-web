# Kafadar Web Deployment Checklist

## 1) Zorunlu Vercel Environment Variables

`kafadar-web` projesinde bu iki değer **zorunlu**:

- `PUBLIC_APPLE_TEAM_ID`
- `PUBLIC_ANDROID_CERT_SHA256`

## 2) Vercel'de Nasıl Girilir

1. Vercel Dashboard -> `kafadar-web` projesi -> `Settings` -> `Environment Variables`
2. `Add New` ile aşağıdaki değişkenleri ekle:
   - Name: `PUBLIC_APPLE_TEAM_ID`
   - Value: Apple Team ID (ör: `AB12CD34EF`)
   - Environments: en az `Production` (istersen `Preview` de seç)
3. Tekrar `Add New`:
   - Name: `PUBLIC_ANDROID_CERT_SHA256`
   - Value: Play App Signing SHA-256 fingerprint
   - Environments: en az `Production` (istersen `Preview` de seç)
4. Kaydet ve **Redeploy** yap.

## 3) Değerleri Nereden Alacağız

- `PUBLIC_APPLE_TEAM_ID`:
  - Apple Developer hesabı -> Membership/Account sayfasındaki 10 karakter Team ID.
- `PUBLIC_ANDROID_CERT_SHA256`:
  - Google Play Console -> App integrity (veya App signing) -> **App signing certificate** -> SHA-256.
  - Not: Universal/App Link için upload key değil, Play App Signing sertifikası kullanılmalı.

## 4) Doğrulama

Deploy sonrası bu iki endpointi aç:

- `https://kafadar-web.vercel.app/.well-known/apple-app-site-association`
- `https://kafadar-web.vercel.app/.well-known/assetlinks.json`

Beklenen:

- `apple-app-site-association` içindeki `details` boş olmamalı.
- `assetlinks.json` boş olmamalı; `package_name` olarak `com.schwerttr.kafadar` görünmeli.
