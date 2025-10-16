// lib/api.ts
export async function fetchAPI(endpoint: string) {
  try {
    let baseUrl =
      process.env.WORDPRESS_API_URL ||
      "https://home-inspections.codersh.com/wp-json/";

    // ✅ Smart handling for different endpoint types
    if (endpoint.startsWith("http")) {
      baseUrl = ""; // full URL passed
    } else if (endpoint.startsWith("custom/")) {
      // custom endpoints (like menus)
      baseUrl += "";
    } else if (!endpoint.startsWith("wp/v2/")) {
      // default WordPress REST endpoints
      baseUrl += "wp/v2/";
    }

    const url = `${baseUrl}${endpoint}`;
    console.log("Fetching:", url);

    const res = await fetch(url, {
      next: { revalidate: 60 }, // revalidate every 60s (ISR)
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch API: ${endpoint}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}
