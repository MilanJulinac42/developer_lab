interface WaveDividerProps {
  variant?: 'default' | 'curved' | 'double' | 'smooth';
  fromColor?: string;
  toColor?: string;
  height?: string;
  position?: 'top' | 'bottom';
}

export default function WaveDivider({
  variant = 'default',
  fromColor = 'from-slate-900',
  toColor = 'to-slate-900',
  height = 'h-24',
  position = 'bottom'
}: WaveDividerProps) {

  const waves = {
    default: (
      <div className={`relative ${height} bg-gradient-to-br ${fromColor} via-blue-900 ${toColor}`}>
        <svg className={`absolute ${position}-0 w-full ${height} text-blue-50`} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 53.3 480 80 720 80C960 80 1200 53.3 1440 0V120H0V0Z" fill="currentColor"/>
        </svg>
      </div>
    ),
    curved: (
      <div className={`relative ${height}`}>
        <svg className={`absolute ${position}-0 w-full ${height} text-white`} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L60 13.3C120 26.7 240 53.3 360 64C480 74.7 600 69.3 720 58.7C840 48 960 32 1080 26.7C1200 21.3 1320 26.7 1380 29.3L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor"/>
        </svg>
      </div>
    ),
    double: (
      <div className={`relative ${height}`}>
        <svg className={`absolute ${position}-0 w-full ${height} text-white`} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 50C360 10 720 90 1080 50C1260 30 1350 40 1440 50V100H0V50Z" fill="currentColor"/>
        </svg>
        <svg className={`absolute ${position}-0 w-full ${height} text-blue-50/50`} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 70C360 30 720 100 1080 60C1260 40 1350 50 1440 60V100H0V70Z" fill="currentColor"/>
        </svg>
      </div>
    ),
    smooth: (
      <div className={`relative ${height} bg-gradient-to-b from-blue-100/50 to-white`}>
        <svg className={`absolute ${position}-0 w-full ${height}`} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z" fill="white"/>
        </svg>
      </div>
    ),
  };

  return waves[variant];
}
