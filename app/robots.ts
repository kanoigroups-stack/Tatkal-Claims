import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: "https://claimresolve-pro.vercel.app/sitemap.xml",
    host: "https://claimresolve-pro.vercel.app",
  };
}
