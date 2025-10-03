// Test WordPress API connectivity
// Add this to your schedule page temporarily to test

export async function testWordPressAPI() {
  const baseUrl = "http://localhost/bluebonnet/wp-json/";

  console.log("Testing WordPress API endpoints...");

  // Test basic WordPress API
  try {
    const wpTest = await fetch(`${baseUrl}wp/v2/posts?per_page=1`);
    console.log("WordPress API test:", wpTest.status);
  } catch (err) {
    console.error("WordPress API test failed:", err);
  }

  // Test Contact Form 7 endpoints
  const cf7Endpoints = [
    "contact-form-7/v1/contact-forms/89",
    "contact-form-7/v1/contact-forms",
    "wp/v2/contact-form-7/89",
  ];

  for (const endpoint of cf7Endpoints) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      console.log(`${endpoint}:`, response.status, response.statusText);

      if (response.ok) {
        const data = await response.json();
        console.log(`${endpoint} data:`, data);
      } else {
        const errorText = await response.text();
        console.log(`${endpoint} error:`, errorText);
      }
    } catch (err) {
      console.error(`${endpoint} failed:`, err);
    }
  }
}
