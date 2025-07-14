// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function Contact() {

  // const contactMethods = [
  //   {
  //     icon: <EnvelopeIcon className="h-6 w-6 text-primary-400" />,
  //     title: "Email",
  //     value: "mohitlengure@gmail.com",
  //     link: "mailto:mohitlengure@gmail.com"
  //   },
  //   {
  //     icon: <PhoneIcon className="h-6 w-6 text-primary-400" />,
  //     title: "Phone",
  //     value: "+91 1234567890",
  //     link: "tel:+911234567890"
  //   },
  //   {
  //     icon: <MapPinIcon className="h-6 w-6 text-primary-400" />,
  //     title: "Location",
  //     value: "Pune, India",
  //     link: "https://maps.google.com/?q=Pune,India"
  //   }
  // ];

  return (
    <section id='contact' className="py-20 bg-surface-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Information */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Connect</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Whether you're building something new, need a reliable developer to join your team, 
              or want to collaborate on exciting tech projects — I'd love to hear about it.
            </motion.p>
            
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm open to freelance projects, full-time roles, internships, or even casual brainstorming.
              Let's build something impactful together.
            </motion.p>
            
            {/* <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start bg-surface-800 border border-surface-700 rounded-lg p-4 hover:border-primary-500/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-surface-700 rounded-lg mr-4 group-hover:bg-primary-500/10 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{method.title}</h3>
                    <p className="text-white font-medium">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Contact Form */}
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-surface-800 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-surface-800 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-400">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-surface-800 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-400">Message</label>
              <textarea 
                id="message" 
                rows="5"
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 bg-surface-800 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}