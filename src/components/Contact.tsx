import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission logic with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Mailto trigger as robust client-side action
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Have an opportunity, project, or question? Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct Contact Links Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I am open to internships, freelance projects, and tech collaborations. Reach out via email or phone!
              </p>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100 border border-navy-750 dark:border-navy-750 border-slate-200 hover:border-cyan-400/50 hover:shadow-cyan-glow-sm transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Official Email</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100 border border-navy-750 dark:border-navy-750 border-slate-200 hover:border-cyan-400/50 hover:shadow-cyan-glow-sm transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-navy-750/60 dark:border-navy-750/60 border-slate-200">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Online Profiles
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {/* GitHub */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 flex flex-col items-center gap-1.5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <Github className="w-5 h-5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 flex flex-col items-center gap-1.5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  {/* LeetCode */}
                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 flex flex-col items-center gap-1.5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <Code className="w-5 h-5 text-cyan-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 relative"
            >
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out, {formData.name}. Your email app has been opened to complete sending.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 text-xs font-bold text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-navy-850/80 dark:bg-navy-850/80 bg-slate-100 text-slate-900 dark:text-white border border-navy-700 dark:border-navy-700 border-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-850/80 dark:bg-navy-850/80 bg-slate-100 text-slate-900 dark:text-white border border-navy-700 dark:border-navy-700 border-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Akash, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-850/80 dark:bg-navy-850/80 bg-slate-100 text-slate-900 dark:text-white border border-navy-700 dark:border-navy-700 border-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-glow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span>Preparing Message...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
