'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Course } from '@/lib/data/courses';

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <ScrollReveal animation="fade-up" delay={index * 100} duration={600}>
      <div className="group relative flex flex-col h-full">
        {/* Popular Badge */}
        {course.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
              ⭐ NAJPOPULARNIJI
            </span>
          </div>
        )}

        {/* Glow Effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur`}></div>

        {/* Card */}
        <div className={`relative bg-white rounded-2xl p-8 border ${course.popular ? 'border-blue-200/50 shadow-2xl pt-10' : 'border-white/20 shadow-xl'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>
          {/* Icon */}
          <div className={`w-14 h-14 bg-gradient-to-br ${course.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={course.icon} />
            </svg>
          </div>

          {/* Title & Meta */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-navy mb-2">{course.title}</h3>
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span className="text-blue-600">{course.duration}</span>
              <span className="text-gray-400">•</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                course.level === 'Početni' ? 'bg-green-100 text-green-700' :
                course.level === 'Srednji' ? 'bg-blue-100 text-blue-700' :
                'bg-purple-100 text-purple-700'
              }`}>
                {course.level}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {course.description}
          </p>

          {/* Features */}
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-bold text-navy mb-3">Šta ćeš naučiti:</h4>
            <ul className="space-y-2">
              {course.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="border-t border-gray-200 pt-6 mb-6 mt-auto">
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                {course.price}
              </span>
              <span className="text-gray-500 text-sm">RSD</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Jednokratna uplata</p>
          </div>

          {/* CTA Button */}
          <Link href={`/courses/${course.slug}`} className={`block w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg text-center`}>
            Saznaj više
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
