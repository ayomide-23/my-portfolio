import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'SUCCESS' | 'ERROR' | null

  // Use Formsubmit AJAX endpoint. Replace email if you want to use a different address.
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/aderintoayomide204@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    // include _captcha false to disable Formsubmit's captcha (optional)
    formData.append("_captcha", "false");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json().catch(() => null);
      if (res.ok) {
        setStatus("SUCCESS");
        setSubmitted(true);
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Contact Info */}
          <motion.div
            variants={item}
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-black/10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Let's talk</h3>
            <p className="text-black/70 mb-6">
              I'd love to hear about your project or idea. Reach out and let's build something great together.
            </p>
            <div className="space-y-4 text-black/80">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a href="mailto:ayomide@example.com" className="hover:underline">
                    aderintoayomide204@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <a href="tel:+2347013841793" className="hover:underline">
                    +234 701 384 1793
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <p className="font-semibold text-black">Location</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item} className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-black/10 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-black/40 bg-white/70 text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-black/40 bg-white/70 text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-black font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-black/40 bg-white/70 text-black"
              />
            </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-black/80 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            ) : (
              <div className="py-10 text-center">
                {status === "SUCCESS" ? (
                  <>
                    <h3 className="text-2xl font-bold text-black mb-2">Thank you!</h3>
                    <p className="text-black/70">Your message has been sent. I’ll reply shortly.</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Submission failed</h3>
                    <p className="text-black/70">An error occurred. Please try again later.</p>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
