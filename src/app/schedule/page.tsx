"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

const data = await fetchAPI("pages?slug=Schedule");
const page = data?.[0];
const schedule = page?.acf || {};
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
            {/* Schedule Your Inspection */}
            {schedule?.schedule_hero_title}
          </h1>
          <p className="font-sans text-lg text-mediumGray">
            {/* Ready to book? Have a question? Reach out to us. */}
            {schedule?.schedule_hero_subtitle}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              {/* Contact Us Directly */}
              {schedule?.schedule_contactus_title}
            </h2>
            <p className="mb-4">
              {/* For the fastest response, please give us a call. */}
              {schedule?.schedule_contactus_subtitle}
            </p>
            <p className="mb-2">
              <strong>{schedule?.schedule_phone}:</strong>{" "}
              <a
                href="tel:512-560-5670"
                className="text-primaryBlue hover:underline"
              >
                {/* 512-560-5670 */}
                {schedule?.schedule_number}
              </a>
            </p>
            <p>
              <strong>{schedule?.schedule_email}:</strong>{" "}
              <a
                href="mailto:tim@bluebonnetinspections.com"
                className="text-primaryBlue hover:underline"
              >
                {schedule?.schedule_emailtxt}
                {/* tim@bluebonnetinspections.com */}
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
