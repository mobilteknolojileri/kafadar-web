/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SUPPORT_EMAIL?: string;
  readonly PUBLIC_ANDROID_PACKAGE?: string;
  readonly PUBLIC_GOOGLE_PLAY_URL?: string;
  readonly PUBLIC_APP_STORE_URL?: string;
  readonly PUBLIC_APP_SCHEME?: string;
  readonly PUBLIC_APP_SCHEME_QUIZ_PREFIX?: string;
  readonly PUBLIC_APP_SCHEME_RESET_PASSWORD?: string;
  readonly PUBLIC_DEEP_LINK_PREFIX?: string;
  readonly PUBLIC_LEGACY_DEEP_LINK_PREFIX?: string;
  readonly PUBLIC_IOS_BUNDLE_ID?: string;
  readonly PUBLIC_APPLE_TEAM_ID?: string;
  readonly PUBLIC_ANDROID_CERT_SHA256?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
