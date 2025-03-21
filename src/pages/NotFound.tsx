
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start to-gradient-end">
      <div className="glass text-center p-12 rounded-2xl max-w-md mx-auto animate-scale-in">
        <h1 className="text-6xl font-display font-bold text-white mb-6">404</h1>
        <p className="text-xl text-white/90 mb-8">Oops! This page doesn't exist</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-gradient-start rounded-lg font-medium transition-all hover:shadow-lg"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
