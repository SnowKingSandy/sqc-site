import React, { useRef, useEffect, useState } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInOnScroll({ children, className = '' }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}