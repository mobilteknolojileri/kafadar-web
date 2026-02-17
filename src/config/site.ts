const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const SITE_URL = trimTrailingSlash(
  import.meta.env.PUBLIC_SITE_URL ?? "https://kafadar.app",
);

export const SUPPORT_EMAIL =
  import.meta.env.PUBLIC_SUPPORT_EMAIL ?? "kafadar.app@gmail.com";

export const ANDROID_PACKAGE =
  import.meta.env.PUBLIC_ANDROID_PACKAGE ?? "com.kafadar.app";

export const GOOGLE_PLAY_URL =
  import.meta.env.PUBLIC_GOOGLE_PLAY_URL ??
  "https://example.com/mock-google-play-link";

export const APP_STORE_URL =
  import.meta.env.PUBLIC_APP_STORE_URL ??
  "https://example.com/mock-app-store-link";

export const APP_SCHEME = import.meta.env.PUBLIC_APP_SCHEME ?? "kafadar://";

export const APP_SCHEME_QUIZ_PREFIX =
  import.meta.env.PUBLIC_APP_SCHEME_QUIZ_PREFIX ?? "kafadar://q/";

export const APP_SCHEME_RESET_PASSWORD =
  import.meta.env.PUBLIC_APP_SCHEME_RESET_PASSWORD ??
  "kafadar://reset-password";

export const DEEP_LINK_PREFIX =
  import.meta.env.PUBLIC_DEEP_LINK_PREFIX ?? `${SITE_URL}/q/`;

export const LEGACY_DEEP_LINK_PREFIX =
  import.meta.env.PUBLIC_LEGACY_DEEP_LINK_PREFIX ??
  "https://goldsword.dev/kafadar/q/";

export const IOS_BUNDLE_ID =
  import.meta.env.PUBLIC_IOS_BUNDLE_ID ?? "com.kafadar.app";

export const APPLE_TEAM_ID =
  import.meta.env.PUBLIC_APPLE_TEAM_ID ?? "TEAM_ID_REQUIRED";

export const ANDROID_CERT_SHA256 =
  import.meta.env.PUBLIC_ANDROID_CERT_SHA256 ??
  "REPLACE_WITH_PLAY_SIGNING_SHA256_FINGERPRINT";
