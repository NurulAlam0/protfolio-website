import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Copy, Send } from "lucide-react";
import { personalData } from "../data/personal";

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError("Message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4"
        >
          05 · CONTACT
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-[#141312] dark:text-[#EDE9E0] leading-tight mb-16 tracking-tight transition-colors"
        >
          Let's build something remarkable.
        </motion.h2>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Email, Phone & Location as Muted Text */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <p className="text-base sm:text-lg text-[#646059] dark:text-[#8d8a82] leading-relaxed font-light mb-10 max-w-md transition-colors">
              Have an upcoming product, an engineering challenge, or a contract in mind? Reach out directly via email or the form.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase block mb-1.5">
                  EMAIL
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="font-mono text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] transition-colors"
                  >
                    {personalData.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalData.email, "email")}
                    className="text-[#646059] dark:text-[#8d8a82] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] p-1 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-3.5 h-3.5 text-[#7A9E00] dark:text-[#D6FF4D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase block mb-1.5">
                  PHONE
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${personalData.phone}`}
                    className="font-mono text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] transition-colors"
                  >
                    {personalData.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalData.phone, "phone")}
                    className="text-[#646059] dark:text-[#8d8a82] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] p-1 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-[#7A9E00] dark:text-[#D6FF4D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase block mb-1.5">
                  LOCATION
                </span>
                <span className="font-mono text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0]">
                  {personalData.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bordered card with form */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#1a1917] border border-black/[0.06] dark:border-white/[0.06] rounded-2xl p-8 sm:p-10 shadow-xl dark:shadow-2xl relative transition-colors">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#84B800]/10 dark:bg-[#D6FF4D]/10 border border-[#84B800]/30 dark:border-[#D6FF4D]/30 flex items-center justify-center text-[#7A9E00] dark:text-[#D6FF4D] mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#141312] dark:text-[#EDE9E0] mb-2">Message received</h3>
                  <p className="text-[#646059] dark:text-[#8d8a82] text-sm max-w-sm mb-6 font-light">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A9E00] dark:text-[#D6FF4D] hover:underline cursor-pointer"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-[10px] tracking-[0.2em] text-[#646059] dark:text-[#8d8a82] uppercase"
                    >
                      NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-black/15 dark:border-white/15 focus:border-[#7A9E00] dark:focus:border-[#D6FF4D] pb-3 text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0] placeholder:text-[#646059]/40 dark:placeholder:text-[#8d8a82]/40 outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] tracking-[0.2em] text-[#646059] dark:text-[#8d8a82] uppercase"
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-black/15 dark:border-white/15 focus:border-[#7A9E00] dark:focus:border-[#D6FF4D] pb-3 text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0] placeholder:text-[#646059]/40 dark:placeholder:text-[#8d8a82]/40 outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] tracking-[0.2em] text-[#646059] dark:text-[#8d8a82] uppercase"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-black/15 dark:border-white/15 focus:border-[#7A9E00] dark:focus:border-[#D6FF4D] pb-3 text-sm sm:text-base text-[#141312] dark:text-[#EDE9E0] placeholder:text-[#646059]/40 dark:placeholder:text-[#8d8a82]/40 outline-none resize-none transition-colors font-sans"
                    />
                  </div>

                  {/* Lime Pill Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#D6FF4D] text-[#121110] px-8 py-3.5 rounded-full hover:bg-[#c4eb38] hover:shadow-[0_0_20px_rgba(214,255,77,0.35)] transition-all duration-300 disabled:opacity-50 cursor-pointer border border-black/5"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    {submitError && (
                      <p role="alert" className="text-sm text-red-500">
                        {submitError}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
