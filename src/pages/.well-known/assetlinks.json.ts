import type { APIRoute } from "astro";
import { ANDROID_CERT_SHA256, ANDROID_PACKAGE } from "../../config/site";

export const prerender = true;

const hasRequiredConfig = !ANDROID_CERT_SHA256.includes("REPLACE_WITH");

export const GET: APIRoute = () => {
  const payload = hasRequiredConfig
    ? [
      {
        relation: [
          "delegate_permission/common.handle_all_urls",
          "delegate_permission/common.get_login_creds",
        ],
        target: {
          namespace: "android_app",
          package_name: ANDROID_PACKAGE,
          sha256_cert_fingerprints: [ANDROID_CERT_SHA256],
        },
      },
    ]
    : [];

  return new Response(JSON.stringify(payload), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
};
