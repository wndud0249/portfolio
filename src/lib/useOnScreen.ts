import { useEffect, useState } from 'react';

// Hook
export default function useOnScreen(ref: any, rootMargin = '-10px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  //test
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer && ref && ref.current && observer.unobserve(ref.current);
    };
  }, [ref]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
