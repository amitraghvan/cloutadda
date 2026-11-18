import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { COMPANY_INFO } from "@/data/companyData";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | CLOUT ADDA® — Let's Elevate Your Brand" },
      {
        name: "description",
        content:
          "Connect directly with Clout Adda's leadership team (Rudransh Mishra, Yash Patel). Plan an upcoming campaign, creator activation, meme project, or branded experience.",
      },
      { property: "og:title", content: "Contact CLOUT ADDA®" },
      {
        property: "og:description",
        content:
          "Tell us the idea. We'll bring the energy. Direct contact with our creative and business leadership.",
      },
    ],
  }),
});

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  description?: string;
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Not sure yet",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesOptions = [
    "Not sure yet",
    "Social Media Marketing",
    "PR & Meme Marketing",
    "Influencer Marketing",
    "Social Events Marketing",
    "Branded Podcasting",
    "Integrated Multi-Channel Campaign",
  ];

  const validate = () => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Your name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) errs.company = "Company or brand name is required";
    if (!formData.description.trim()) errs.description = "Please tell us briefly about your goals";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const mailSubject = encodeURIComponent(
        `Project Inquiry from ${formData.name} (${formData.company})`,
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget || "Not specified"}\n\nProject Scope:\n${formData.description}`,
      );
      window.location.href = `mailto:connect@cloutadda.com?subject=${mailSubject}&body=${mailBody}`;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        <PageHeader
          badge="GET IN TOUCH"
          title="Tell us the idea. We'll bring the"
          italicWord="energy."
          description="Planning a campaign, looking for the right creators, improving your social presence or creating an experience worth remembering? Tell us what you're working on."
          backHref="/"
          backLabel="Back to Home"
        />

        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Contacts */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-clout-red block mb-2">
                    Direct Connections
                  </span>
                  <RevealText>
                    <h2 className="font-display font-light text-3xl sm:text-4xl text-[#F4F0E9] tracking-[-0.03em]">
                      Talk directly with our{" "}
                      <span className="font-serif-italic font-normal text-white">team.</span>
                    </h2>
                  </RevealText>
                  <p className="mt-4 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                    We keep communication agile and direct. Reach out to our documented leadership
                    or general desk for immediate response.
                  </p>
                </div>

                {/* Team Contact Cards */}
                <div className="space-y-4">
                  {COMPANY_INFO.contacts.map((c) => (
                    <div
                      key={c.name}
                      className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 space-y-3 transition-colors hover:border-clout-red/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-light text-xl text-white tracking-[-0.02em]">
                          {c.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase text-clout-red">
                          Representative
                        </span>
                      </div>
                      <p className="text-xs text-[#AAA6A2] font-light">{c.role}</p>
                      <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
                        <a
                          href={`mailto:${c.email}`}
                          className="inline-flex items-center gap-2 text-clout-red hover:underline"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>{c.email}</span>
                        </a>
                        <a
                          href={`tel:${c.phone.replace(/\s+/g, "")}`}
                          className="inline-flex items-center gap-2 text-[#AAA6A2] hover:text-white transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>{c.phone}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* General Desk */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#AAA6A2]">
                    General Brand &amp; Press Desk
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.generalEmail}`}
                    className="block font-mono text-xl sm:text-2xl text-white hover:text-clout-red transition-colors"
                  >
                    {COMPANY_INFO.generalEmail}
                  </a>
                  <p className="font-mono text-[11px] text-[#AAA6A2]/70 font-light">
                    Official inquiries, RFPs, institutional partnerships and creator submissions.
                  </p>
                </div>
              </div>

              {/* Right Column: Structured Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative shadow-2xl">
                  {submitted ? (
                    <div className="py-12 text-center space-y-6">
                      <div className="h-16 w-16 rounded-full bg-clout-red/20 border border-clout-red flex items-center justify-center text-clout-red mx-auto shadow-[0_0_30px_rgba(229,9,32,0.35)]">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em]">
                        Message Transmitted
                      </h3>
                      <p className="text-sm text-[#AAA6A2] max-w-md mx-auto leading-relaxed font-light">
                        Thank you,{" "}
                        <strong className="text-white font-medium">{formData.name}</strong>. Your
                        inquiry for{" "}
                        <strong className="text-white font-medium">{formData.company}</strong> has
                        been logged. Your mail client has also been opened to forward directly to{" "}
                        <span className="text-clout-red font-mono">connect@cloutadda.com</span>.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            service: "Not sure yet",
                            budget: "",
                            description: "",
                          });
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 font-mono text-xs text-white hover:border-clout-red transition-colors"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="border-b border-white/[0.08] pb-4 mb-6">
                        <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em]">
                          Start an Engagement
                        </h3>
                        <p className="text-xs sm:text-sm text-[#AAA6A2] mt-1 font-light">
                          Fill out the details below to receive a strategic response within 24
                          hours.
                        </p>
                      </div>

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full rounded-xl border bg-[#050505] px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:border-clout-red focus:outline-none ${
                              errors.name ? "border-red-500" : "border-white/[0.08]"
                            }`}
                          />
                          {errors.name && (
                            <span className="font-mono text-[11px] text-red-400 mt-1 block">
                              {errors.name}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rahul@company.com"
                            className={`w-full rounded-xl border bg-[#050505] px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:border-clout-red focus:outline-none ${
                              errors.email ? "border-red-500" : "border-white/[0.08]"
                            }`}
                          />
                          {errors.email && (
                            <span className="font-mono text-[11px] text-red-400 mt-1 block">
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Company & Service */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                            Company / Brand Name *
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Brands"
                            className={`w-full rounded-xl border bg-[#050505] px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:border-clout-red focus:outline-none ${
                              errors.company ? "border-red-500" : "border-white/[0.08]"
                            }`}
                          />
                          {errors.company && (
                            <span className="font-mono text-[11px] text-red-400 mt-1 block">
                              {errors.company}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                            Service Required
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-white/[0.08] bg-[#050505] px-4 py-3 text-sm text-white focus:border-clout-red focus:outline-none"
                          >
                            {servicesOptions.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#0A0A0A]">
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Budget (Optional) */}
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                          Project Budget (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="e.g. ₹2L - ₹10L / Flexible"
                          className="w-full rounded-xl border border-white/[0.08] bg-[#050505] px-4 py-3 text-sm text-white placeholder-[#555] focus:border-clout-red focus:outline-none"
                        />
                      </div>

                      {/* Project Description */}
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-[#AAA6A2] block mb-2">
                          Project Scope &amp; Goals *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          placeholder="Tell us about your brand, campaign milestones, target demographic, or event idea..."
                          className={`w-full rounded-xl border bg-[#050505] px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:border-clout-red focus:outline-none resize-none ${
                            errors.description ? "border-red-500" : "border-white/[0.08]"
                          }`}
                        />
                        {errors.description && (
                          <span className="font-mono text-[11px] text-red-400 mt-1 block">
                            {errors.description}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div>
                        <MagneticButton className="w-full">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-clout-red py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-50 flex items-center justify-center gap-2"
                          >
                            {loading ? (
                              <span>Transmitting Inquiry...</span>
                            ) : (
                              <>
                                <span>Send Inquiry</span>
                                <Send className="h-3.5 w-3.5" />
                              </>
                            )}
                          </button>
                        </MagneticButton>
                      </div>

                      <p className="font-mono text-[11px] text-[#AAA6A2]/70 text-center">
                        Inquiries are directly routed to Rudransh Mishra &amp; Yash Patel at{" "}
                        <span className="text-white">connect@cloutadda.com</span>.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
