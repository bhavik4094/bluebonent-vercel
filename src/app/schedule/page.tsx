"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api"; // unchanged

export default function SchedulePage() {
  const [formHtml, setFormHtml] = useState("");

  useEffect(() => {
    async function loadForm() {
      const data = await fetchAPI("/contact-form-7/v1/contact-forms/89");

      if (data && data.form) {
        setFormHtml(data.form);
      } else {
        console.error("Form not found:", data);
      }
    }
    loadForm();
  }, []);

  return (
    <main>
      <section className="bg-lightGray py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-4">
            Schedule Your Inspection
          </h1>
          <p className="font-sans text-lg text-mediumGray">
            Ready to book? Have a question? Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Contact Us Directly
            </h2>
            <p className="mb-4">
              For the fastest response, please give us a call.
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:512-560-5670"
                className="text-primaryBlue hover:underline"
              >
                512-560-5670
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:tim@bluebonnetinspections.com"
                className="text-primaryBlue hover:underline"
              >
                tim@bluebonnetinspections.com
              </a>
            </p>
          </div>

          {/* Contact Form 7 section */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Or, Fill Out This Form
            </h2>
            {formHtml ? (
              <div dangerouslySetInnerHTML={{ __html: formHtml }} />
            ) : (
              <p>Loading form...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
