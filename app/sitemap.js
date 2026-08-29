const BASE_URL = "https://propertieswithkaur.vercel.app";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/journey", priority: 0.9 },
  { path: "/opportunities", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/insights", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    priority: route.priority,
  }));
}
