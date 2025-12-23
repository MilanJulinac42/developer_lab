'use client';

import { useEffect } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { count, startCounting, hasStarted } = useCounter({ end, duration });

  useEffect(() => {
    if (isVisible && !hasStarted) {
      startCounting();
    }
  }, [isVisible, hasStarted, startCounting]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
