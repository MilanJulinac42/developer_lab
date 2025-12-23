'use client';

interface AnimatedGradientProps {
  className?: string;
}

export default function AnimatedGradient({ className = '' }: AnimatedGradientProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-gradient-shift"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-gradient-shift-reverse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-gradient-pulse"></div>
    </div>
  );
}
