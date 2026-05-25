import { useEffect, useState } from 'react';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

/**
 * Home Page - Responsive Router
 * 
 * Detects screen size and renders either desktop or mobile version
 */
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    setIsLoaded(true);

    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isLoaded) {
    return null; // Prevent hydration mismatch
  }

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
