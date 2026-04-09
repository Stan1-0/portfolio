'use client';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

const socialLinks = [
  { id: 1, label: "LinkedIn", href: "https://linkedin.com/in/stanley-boateng-" },
  { id: 2, label: "GitHub", href: "https://github.com/Stan1-0/" },
  { id: 3, label: "Twitter", href: "https://x.com/Stan_ley45" },
];

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s build something great together
              </h2>
              <p className="text-sm mt-2 md:text-base text-gray-800">
                Have a project in mind or looking for a backend developer? I&apos;d love to hear from you.
              </p>
              <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 underline underline-offset-4 decoration-gray-700/30 hover:decoration-gray-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 btn-press hover:bg-gray-800"
                onClick={() =>
                  window.open("mailto:stankofb@gmail.com", "_blank", "noopener,noreferrer")
                }
              >
                <span className="font-semibold">stankofb@gmail.com</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <h3 className="font-serif text-2xl md:text-3xl">Send me a message</h3>
          <p className="mt-2 text-white/50 text-sm">
            Fill in the form below and I&apos;ll get back to you within 24 hours.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};
