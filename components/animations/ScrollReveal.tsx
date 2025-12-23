'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale' | 'slide-up';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  'fade-up': 'opacity-0 translate-y-8',
  'fade-down': 'opacity-0 -translate-y-8',
  'fade-left': 'opacity-0 -translate-x-8',
  'fade-right': 'opacity-0 translate-x-8',
  'fade': 'opacity-0',
  'scale': 'opacity-0 scale-95',
  'slide-up': 'translate-y-12 opacity-0',
};

const visibleClasses = {
  'fade-up': 'opacity-100 translate-y-0',
  'fade-down': 'opacity-100 translate-y-0',
  'fade-left': 'opacity-100 translate-x-0',
  'fade-right': 'opacity-100 translate-x-0',
  'fade': 'opacity-100',
  'scale': 'opacity-100 scale-100',
  'slide-up': 'translate-y-0 opacity-100',
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce });

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
