import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const sitemapExcludedPaths = new Set([
  "/deeplink",
  "/en/deeplink",
  "/reset-password",
  "/en/reset-password",
  "/gizlilik",
]);

const shouldIncludeInSitemap = (page) => {
  const normalizedPath = (() => {
    const raw =
      typeof page === "string"
        ? page
        : page && typeof page.toString === "function"
          ? page.toString()
          : `${page}`;

    try {
      return new URL(raw, "https://kafadar-web.vercel.app").pathname;
    } catch {
      return raw;
    }
  })();

  const normalized =
    normalizedPath.length > 1 && normalizedPath.endsWith("/")
      ? normalizedPath.slice(0, -1)
      : normalizedPath;

  return !sitemapExcludedPaths.has(normalized);
};

// https://astro.build/config
export default defineConfig({
  site: "https://kafadar-web.vercel.app",
  build: {
    // Tek stil sayfasi 5 KiB; ayri istek olarak cekmek render-blocking
    // oluyordu. Inline etmek o istegi kritik yoldan tamamen kaldiriyor.
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: shouldIncludeInSitemap,
    }),
  ],
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
