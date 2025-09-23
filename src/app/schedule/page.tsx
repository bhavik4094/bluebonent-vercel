export default function SchedulePage() {
  return (
    <main>
      <section className="bg-lightGray py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-4">Schedule Your Inspection</h1>
          <p className="font-sans text-lg text-mediumGray">
            Ready to book? Have a question? Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Contact Us Directly</h2>
            <p className="mb-4">
              For the fastest response, please give us a call.
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> <a href="tel:512-560-5670" className="text-primaryBlue hover:underline">512-560-5670</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:tim@bluebonnetinspections.com" className="text-primaryBlue hover:underline">tim@bluebonnetinspections.com</a>
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Or, Fill Out This Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-charcoal font-bold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-mediumGray rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-charcoal font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-mediumGray rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-charcoal font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full p-2 border border-mediumGray rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-charcoal font-bold mb-2">Property Address</label>
                <input type="text" id="address" name="address" className="w-full p-2 border border-mediumGray rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-charcoal font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border border-mediumGray rounded"></textarea>
              </div>
              <button type="submit" className="bg-accentOrange text-white font-bold py-3 px-6 rounded-full w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
