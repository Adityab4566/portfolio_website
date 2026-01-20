"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<string>("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) { setStatus("Please fill all fields."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("Please enter a valid email."); return; }
    try {
      setStatus("Sending...");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus(data.previewUrl ? "Message sent! Preview available." : "Message sent successfully!");
      } else {
        setStatus(data.error || "Failed to send. Please try again later.");
      }
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Please try again later.");
    }
  };

  return (
    <section className="py-20 border-t border-neutral-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold" data-aos="fade-up">Contact</h2>
        <p className="mt-2 muted" data-aos="fade-up" data-aos-delay="100">Let’s collaborate or chat about opportunities.</p>

        <div className="mt-10 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <form className="space-y-4 card" data-aos="fade-up" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="text-sm muted">Name</label>
                <input id="name" name="name" type="text" required className="input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm muted">Email</label>
                <input id="email" name="email" type="email" required className="input" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm muted">Message</label>
                <textarea id="message" name="message" rows={5} required className="input" placeholder="Tell me about your project or role..."></textarea>
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="btn btn-primary">Send Message</button>
                <span className="text-sm" aria-live="polite">{status}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
