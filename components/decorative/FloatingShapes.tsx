interface FloatingShapesProps {
  variant?: 'hero' | 'features' | 'testimonials';
}

export default function FloatingShapes({ variant = 'hero' }: FloatingShapesProps) {

  const shapes = {
    hero: (
      <>
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-lg animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-40 w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-wiggle"></div>
      </>
    ),
    features: (
      <>
        <div className="absolute top-10 right-20 w-32 h-32 border-4 border-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-cyan-200 rounded-full opacity-20"></div>
        <div className="absolute top-40 left-40 w-16 h-16 bg-blue-200/30 rounded-2xl rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 right-60 w-20 h-20 bg-cyan-200/30 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
      </>
    ),
    testimonials: (
      <>
        <div className="absolute top-32 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300/40"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-300/40"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300/40"></div>
        </div>
      </>
    ),
  };

  return <>{shapes[variant]}</>;
}
