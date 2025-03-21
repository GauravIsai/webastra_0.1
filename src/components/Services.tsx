
import { useEffect, useState } from 'react';
import { Paintbrush, Code, BarChart3 } from 'lucide-react';

const Services = () => {
  const [activeProgress, setActiveProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveProgress(true);
        }
      },
      { threshold: 0.3 }
    );

    const progressSection = document.getElementById('progress-section');
    if (progressSection) {
      observer.observe(progressSection);
    }

    return () => {
      if (progressSection) {
        observer.unobserve(progressSection);
      }
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Services</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-center mb-6">
              <Paintbrush className="w-10 h-10 text-gradient-start" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">Design</h3>
            <p className="text-gray-700 text-center">
              We craft visually stunning, user-friendly designs that elevate brand identity and engage audiences. Our designs ensure seamless navigation and a modern aesthetic.
            </p>
          </div>

          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center mb-6">
              <Code className="w-10 h-10 text-gradient-start" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">Development</h3>
            <p className="text-gray-700 text-center">
              Our development team builds responsive, high-performance websites tailored to your business needs. We focus on functionality, security, and scalability to create websites that deliver results.
            </p>
          </div>

          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="w-10 h-10 text-gradient-start" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">Marketing</h3>
            <p className="text-gray-700 text-center">
              We implement strategic digital marketing solutions, including SEO, content marketing, and social media optimization, to increase visibility, attract customers, and grow your brand.
            </p>
          </div>
        </div>

        <div id="progress-section" className="max-w-3xl mx-auto mt-20">
          <div className="mb-8 animate-on-scroll">
            <h4 className="text-xl font-medium mb-3">Portfolio Websites</h4>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-value" 
                style={{ width: activeProgress ? '90%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="mb-8 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-xl font-medium mb-3">E-commerce Websites</h4>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-value" 
                style={{ width: activeProgress ? '80%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-medium mb-3">Business Websites</h4>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-value" 
                style={{ width: activeProgress ? '30%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="mb-8 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-xl font-medium mb-3">Branding & Logo Design</h4>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-value" 
                style={{ width: activeProgress ? '70%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
