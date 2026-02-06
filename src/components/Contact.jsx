// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MessageSquare, User, AlertCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('sending');

    try {
      const res = await fetch('https://quickbillapi.quickbill.site/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="col-span-1 md:col-span-12 bento-card p-8 lg:p-12 relative overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-surface-900 mb-6">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">extraordinary</span>.
          </h2>
          <p className="text-surface-600 text-lg mb-8 leading-relaxed max-w-lg">
            Have a project in mind or just want to chat about tech? I'm always open to discussing new opportunities and innovative ideas.
          </p>

          <div className="space-y-4">
            <a href="mailto:contact@mohit.dev" className="flex items-center gap-4 p-4 bg-surface-50/50 border border-surface-200 rounded-2xl hover:bg-surface-50 transition-colors group">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-100 text-primary-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-surface-500 font-medium">Email Me</p>
                <span className="text-surface-900 font-bold group-hover:text-primary-600 transition-colors">mohitlengure2002@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-surface-50/50 border border-surface-200 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-100 text-secondary-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-surface-500 font-medium">Status</p>
                <p className="text-surface-900 font-bold text-green-600 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available for freelance
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface-50/50 border border-surface-200 p-6 md:p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="relative space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-surface-500 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-surface-200 rounded-xl py-3 px-4 text-surface-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-surface-400"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-surface-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white border border-surface-200 rounded-xl py-3 px-4 text-surface-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-surface-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold text-surface-500 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry..."
                className="w-full bg-white border border-surface-200 rounded-xl py-3 px-4 text-surface-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-surface-400"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold text-surface-500 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-white border border-surface-200 rounded-xl py-3 px-4 text-surface-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-surface-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] ${status === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-surface-900 hover:bg-primary-600 shadow-lg shadow-surface-900/20 hover:shadow-primary-600/30'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Sent Successfully!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Failed to Send
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}