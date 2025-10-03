export async function fetchAPI(endpoint: string) {
  try {
    const baseUrl =
      process.env.WORDPRESS_API_URL ||
      "https://home-inspections.codersh.com/wp-json/wp/v2/";

    const res = await fetch(`${baseUrl}${endpoint}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch API: ${endpoint}`);
    }

    return res.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}
