
import { ArrowRight, Monitor, Brush, Goal, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">About</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mb-12"></div>
          <p className="section-subtitle">
            We follow a structured, step-by-step approach that ensures seamless execution. From concept to deployment, we focus on strategy, design, development, rigorous testing, and optimization to achieve excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Our Process</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We follow a structured, step-by-step approach that ensures seamless execution. From concept to deployment, we focus on strategy, design, development, rigorous testing, and optimization to achieve excellence.
            </p>
            <div className="h-12"></div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Brush className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We prioritize user experience, functionality, and performance. Our approach is rooted in leveraging the latest technologies to create intuitive, scalable, and result-driven websites tailored to your goals.
            </p>
            <div className="h-12"></div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Goal className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Our Goal</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our goal is to empower individuals and businesses by providing them with innovative digital solutions that help them establish a strong online presence and achieve sustainable growth.
            </p>
            <div className="h-12"></div>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At WebAstra, our mission is to redefine digital experiences by delivering high-quality, custom web solutions that drive engagement, growth, and long-term success for our clients.
            </p>
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
