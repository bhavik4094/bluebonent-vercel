// app/schedule/page.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

type ScheduleACF = {
  schedule_hero_title?: string;
  schedule_hero_subtitle?: string;
  schedule_contactus_title?: string;
  schedule_contactus_subtitle?: string;
  schedule_phone?: string;
  schedule_number?: string;
  schedule_email?: string;
  schedule_emailtxt?: string;
};

export default function SchedulePage() {
  const [formHtml, setFormHtml] = useState("");
  const [schedule, setSchedule] = useState<ScheduleACF>({});

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    msg?: string;
  } | null>(null);

  useEffect(() => {
    async function loadPage() {
      try {
        const data = await fetchAPI("pages?slug=Schedule");
        const page = data?.[0];
        setSchedule(page?.acf || {});
      } catch (err) {
        console.error("Failed to load schedule content:", err);
      }
    }
    loadPage();
  }, []);

  useEffect(() => {
    async function loadForm() {
      try {
        const data = await fetchAPI("/contact-form-7/v1/contact-forms/89");
        if (data && data.form) setFormHtml(data.form);
      } catch (err) {
        console.error("Form not found:", err);
      }
    }
    loadForm();
  }, []);

  function validate() {
    if (name.trim().length < 2) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email.";
    if (message.trim().length < 5) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    const v = validate();
    if (v) {
      setResult({ success: false, msg: v });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address, message }),
      });

      const body = await res.json();
      if (res.ok && body.success) {
        setResult({
          success: true,
          msg: "Message sent — we will be in touch shortly.",
        });
        // reset
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
        setHoney("");
      } else {
        setResult({
          success: false,
          msg: body.error || "Failed to send message.",
        });
      }
    } catch (err) {
      console.error(err);
      setResult({
        success: false,
        msg: "Network error while sending message.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="bg-lightGray py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-4">
            {schedule?.schedule_hero_title || "Schedule Your Inspection"}
          </h1>
          <p className="font-sans text-lg text-mediumGray">
            {schedule?.schedule_hero_subtitle ||
              "Ready to book? Have a question? Reach out to us."}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              {schedule?.schedule_contactus_title || "Contact Us Directly"}
            </h2>
            <p className="mb-4">
              {schedule?.schedule_contactus_subtitle ||
                "For the fastest response, please give us a call."}
            </p>

            <p className="mb-2">
              <strong>{schedule?.schedule_phone || "Phone"}:</strong>{" "}
              <a
                href={`tel:${schedule?.schedule_number || "512-560-5670"}`}
                className="text-primaryBlue hover:underline"
              >
                {schedule?.schedule_number || "512-560-5670"}
              </a>
            </p>

            <p>
              <strong>{schedule?.schedule_email || "Email"}:</strong>{" "}
              <a
                href={`mailto:${schedule?.schedule_emailtxt || "tim@bluebonnetinspections.com"}`}
                className="text-primaryBlue hover:underline"
              >
                {schedule?.schedule_emailtxt || "tim@bluebonnetinspections.com"}
              </a>
            </p>
          </div>

          {/* Live contact form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Or, Fill Out This Form
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot field (visually hidden) */}
              <div style={{ display: "none" }}>
                <label htmlFor="honey">Leave this field empty</label>
                <input
                  id="honey"
                  name="honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-charcoal font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-mediumGray rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-charcoal font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-mediumGray rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-charcoal font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-mediumGray rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-charcoal font-bold mb-2"
                >
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-mediumGray rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-charcoal font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-2 border border-mediumGray rounded"
                  required
                ></textarea>
              </div>

              {result && (
                <div
                  className={`mb-4 p-3 rounded ${result.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {result.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold py-3 px-6 rounded-full w-full hover:from-accentBlue hover:to-primaryBlue transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
