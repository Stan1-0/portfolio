'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:bg-white/8 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="mt-8 space-y-4"
      noValidate
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`${inputBase} ${errors.name ? 'border-red-400/60' : 'border-white/10'}`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`${inputBase} ${errors.email ? 'border-red-400/60' : 'border-white/10'}`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello..."
          rows={5}
          className={`${inputBase} resize-none ${errors.message ? 'border-red-400/60' : 'border-white/10'}`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-950 font-semibold px-6 h-12 rounded-xl btn-press disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_24px_-4px] hover:shadow-emerald-400/50"
        >
          {status === 'loading' ? (
            <>
              <span className="size-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowUpRightIcon className="size-4" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-emerald-400 font-medium"
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              key="error"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-400 font-medium"
            >
              Something went wrong. Try emailing me directly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
};
