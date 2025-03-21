
import { useState } from 'react';
import { Send, Globe, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Just simulating form submission for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <form action="https://formspree.io/f/xaneykoo" method="POST" className="glass-card p-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-gradient-start to-gradient-end hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Submit <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                <Globe className="mr-3 text-gradient-start" /> Our Presence
              </h3>
              <p className="text-gray-700 mb-8">
                We are a remote-first company with a global presence.
              </p>

              <div className="space-y-8">
                <div className="bg-white/50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Canada</h4>
                  <p className="text-gray-600 mb-3">Toronto, Ontario</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-brand-600" />
                    <a 
                      href="tel:+16478971831" 
                      className="text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      +1 647-897-1831
                    </a>
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">India</h4>
                  <p className="text-gray-600 mb-3">Pune, Maharashtra</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-brand-600" />
                    <a 
                      href="tel:+918238167210" 
                      className="text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      +91 8238167210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
