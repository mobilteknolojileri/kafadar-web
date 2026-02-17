import type { APIRoute } from "astro";
import { APPLE_TEAM_ID, IOS_BUNDLE_ID } from "../../config/site";

export const prerender = true;

const hasRequiredConfig = !APPLE_TEAM_ID.includes("REQUIRED");
const appId = `${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`;

export const GET: APIRoute = () => {
  const payload = {
    applinks: {
      apps: [],
      details: hasRequiredConfig
        ? [
            {
              appIDs: [appId],
              components: [{ "/": "/q/*" }, { "/": "/kafadar/q/*" }],
            },
          ]
        : [],
    },
  };

  return new Response(JSON.stringify(payload), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
};
