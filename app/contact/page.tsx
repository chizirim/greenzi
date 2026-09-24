// app/contact/page.tsx
"use client";

import { useState } from "react";
import { TbMail, TbMapPin, TbPhone, TbSend, TbCheck } from "react-icons/tb";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800">
      {/* FULL PAGE CLEAR BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/background.png')` }}
      />

      <main className="relative z-10 py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto space-y-3 pt-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] bg-emerald-50/90 px-4 py-1.5 rounded-full border border-emerald-100">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#034B8E] tracking-tight">
            We’re Here to Help Your Plants Thrive
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Have a question about a plant species, care guide, or need diagnostic advice? Drop us a message below!
          </p>
        </section>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-5 bg-white/95 rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900">Contact Information</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reach out to our botanical support team. We reply within 24–48 hours on business days.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D9488] flex items-center justify-center shrink-0 border border-emerald-100">
                    <TbMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-bold text-slate-800">support@greenzi.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#034B8E] flex items-center justify-center shrink-0 border border-blue-100">
                    <TbPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call Us</p>
                    <p className="text-sm font-bold text-slate-800">+1 (800) 555-GREEN</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <TbMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office</p>
                    <p className="text-sm font-bold text-slate-800">Botanical Garden Way, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-xs text-[#0D9488] font-medium leading-relaxed">
              🌱 Plant Emergency? Send us a clear photo of your plant's roots and leaves for diagnostic feedback!
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-white/95 rounded-3xl p-8 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0D9488] flex items-center justify-center mx-auto text-3xl">
                  <TbCheck />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for contacting Greenzi. Our team will review your message and reach back out shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Send Us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    placeholder="Plant Diagnosis / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help your houseplants?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <TbSend className="text-lg" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}