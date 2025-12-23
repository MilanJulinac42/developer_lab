'use client';

import { useState, FormEvent } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import FloatingShapes from '@/components/decorative/FloatingShapes';
import WaveDivider from '@/components/decorative/WaveDivider';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obavezno';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email adresa nije validna';
    }

    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Telefon nije validan';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Tema je obavezna';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Poruka je obavezna';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Poruka mora biti duža od 10 karaktera';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <FloatingShapes variant="hero" />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              Kontaktiraj <span className="text-accent">nas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Imaš pitanja? Želiš da saznaš više? Tu smo da pomognemo!
            </p>
          </div>
        </div>
      </section>

      <WaveDivider variant="default" />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <FloatingShapes variant="features" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Hajde da razgovaramo
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Popuni formu i javiće ti se naš tim u najkraćem mogućem roku. Takođe nas možeš kontaktirati direktno putem email-a ili telefona.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                      <a href="mailto:info@developer.lab" className="text-primary hover:text-primary-dark transition-colors">
                        info@developer.lab
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Telefon</h3>
                      <a href="tel:+381601234567" className="text-primary hover:text-primary-dark transition-colors">
                        +381 60 123 4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1">Adresa</h3>
                      <p className="text-gray-600">
                        Beograd, Srbija
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-navy mb-4">Prati nas</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-navy mb-6">Pošalji nam poruku</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Ime i prezime"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                  required
                  placeholder="Milan Vulić"
                />

                <Input
                  label="Email adresa"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  required
                  placeholder="milan@example.com"
                />

                <Input
                  label="Telefon"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  error={errors.phone}
                  placeholder="+381 60 123 4567"
                />

                <Input
                  label="Tema"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  error={errors.subject}
                  required
                  placeholder="Pitanje o kursu"
                />

                <Textarea
                  label="Poruka"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  error={errors.message}
                  required
                  rows={6}
                  placeholder="Ovde upiši svoju poruku..."
                />

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-green-900">Poruka uspešno poslata!</h4>
                      <p className="text-sm text-green-700 mt-1">Javićemo ti se u najkraćem mogućem roku.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-red-900">Greška pri slanju</h4>
                      <p className="text-sm text-red-700 mt-1">Pokušaj ponovo ili nas kontaktiraj direktno putem email-a.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Šalje se...
                    </>
                  ) : (
                    <>
                      Pošalji poruku
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="curved" height="h-32" />

      {/* FAQ Quick Links */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 via-cyan-100/40 to-blue-100/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #2563EB 1px, transparent 1px), linear-gradient(to bottom, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Često postavljana pitanja
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Možda ćeš ovde pronaći odgovor na svoje pitanje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="btn-primary text-lg px-8 py-4">
              Pregledaj kurseve
            </a>
            <a href="/about" className="btn-secondary text-lg px-8 py-4">
              O nama
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
