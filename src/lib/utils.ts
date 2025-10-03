// src/lib/utils.ts
type ImageField = string | number | { url?: string } | null | undefined;

const baseUrl =
  process.env.WORDPRESS_API_URL ||
  "https://home-inspections.codersh.com/wp-json/wp/v2/";

export async function normalizeImage(imageField: ImageField): Promise<string> {
  if (!imageField) {
    return "/placeholder.jpg"; // fallback image
  }

  // Already a URL
  if (typeof imageField === "string" && imageField.startsWith("http")) {
    return imageField;
  }

  // WP returns object with "url"
  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }

  // WP returns just an ID → fetch media
  if (typeof imageField === "number") {
    try {
      const res = await fetch(`${baseUrl}media/${imageField}`, {
        next: { revalidate: 300 }, // cache 5min
      });
      if (!res.ok) throw new Error("Media fetch failed");
      const media = await res.json();
      return media.source_url || "/placeholder.jpg";
    } catch (e) {
      console.error("Image fetch error:", e);
      return "/placeholder.jpg";
    }
  }

  return "/placeholder.jpg";
}
