// TODO: Replace with actual icons
const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const featuredReviews = [
  {
    stars: 5,
    quote:
      "Incredibly thorough and explained everything clearly. Gave us true peace of mind.",
    author: "J. Henderson, Homebuyer",
  },
  {
    stars: 5,
    quote:
      "Tim saved my client from a potential money pit. His report was detailed and easy to understand.",
    author: "A. Rodriguez, Real Estate Agent",
  },
  {
    stars: 5,
    quote:
      "As a seller, the pre-listing inspection was invaluable. We addressed issues upfront and had a smooth, fast sale.",
    author: "M. Williams, Home Seller",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-lightGray py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="gradient-text font-serif text-5xl font-bold text-charcoal mb-4">
            Hear From Our Happy Clients
          </h1>
          <p className="font-sans text-lg text-mediumGray">
            We're proud of our 5-star reputation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <div key={index} className="bg-lightGray p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="italic text-mediumGray text-lg mb-4">
                  "{review.quote}"
                </blockquote>
                <p className="font-bold text-charcoal text-right">
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
          {/* TODO: Add live review feeds (Google, etc.) */}
        </div>
      </section>
    </main>
  );
}
