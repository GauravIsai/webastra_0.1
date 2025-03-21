
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll animation observation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      
      <div 
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="inline-block mb-6">
          <div className="w-16 h-16 mx-auto text-white mb-4 animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.03 6.03L20 7l2-5l-5 2l.97.97l-1.82 1.82C10.87 2.16 3.3 3.94 2.97 4L2 4.26l.5 1.94l.79-.2l6.83 6.82L6.94 16H5l-3 3l2 1l1 2l3-3v-1.94l3.18-3.18L18 20.71l-.19.79l1.93.5l.26-.97c.06-.33 1.84-7.9-2.79-13.18zM4.5 5.78c2.05-.28 6.78-.5 10.23 2.43l-3.91 3.91zM18.22 19.5l-6.34-6.32l3.91-3.91c2.93 3.45 2.71 8.18 2.43 10.23" />
            </svg>
          </div>
          <div className="w-16 h-1 bg-white mx-auto mt-4 mb-8 opacity-80"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-slide-down">
          WebAstra
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Your Brand, Your Story, Our Code.
        </h2>
        
        <a 
          href="#about" 
          className="inline-flex items-center justify-center text-white hover:text-white/80 transition-colors animate-pulse-slow"
        >
          <ArrowDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
