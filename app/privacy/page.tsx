import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import WaveDivider from '@/components/decorative/WaveDivider';

export const metadata = {
  title: 'Politika privatnosti - Developer.Lab',
  description: 'Politika privatnosti Developer.Lab platforme za Data Science edukaciju.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Politika <span className="text-accent">privatnosti</span>
            </h1>
            <p className="text-lg text-gray-200">
              Poslednje ažurirano: {new Date().toLocaleDateString('sr-RS', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <WaveDivider variant="default" />

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <p className="text-navy mb-0">
                Developer.Lab poštuje tvoju privatnost i posvećen je zaštiti tvojih ličnih podataka. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i čuvamo tvoje informacije.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">1. Prikupljanje podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prikupljamo sledeće vrste podataka kada koristiš našu platformu:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Lični podaci:</strong> ime, prezime, email adresa, broj telefona</li>
                <li><strong>Podaci o nalogu:</strong> korisničko ime, lozinka (kriptovana)</li>
                <li><strong>Podaci o korišćenju:</strong> informacije o tvojim aktivnostima na platformi, napredak u kursevima</li>
                <li><strong>Tehnički podaci:</strong> IP adresa, tip browsera, operativni sistem</li>
                <li><strong>Podaci o plaćanju:</strong> informacije neophodne za procesuiranje plaćanja (čuvaju se kod provajdera plaćanja)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">2. Korišćenje podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tvoje podatke koristimo u sledeće svrhe:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Pružanje pristupa kursevima i edukacionom sadržaju</li>
                <li>Praćenje tvog napretka i dostignuća</li>
                <li>Komunikacija o kursevima, ažuriranjima i novostima</li>
                <li>Procesuiranje plaćanja i izdavanje računa</li>
                <li>Poboljšanje naših usluga i korisničkog iskustva</li>
                <li>Ispunjavanje zakonskih obaveza</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">3. Deljenje podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tvoje lične podatke <strong>ne delimo sa trećim stranama</strong> osim u sledećim slučajevima:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Provajderi usluga:</strong> Koristimo pouzdane treće strane za hosting, email komunikaciju i procesuiranje plaćanja</li>
                <li><strong>Zakonske obaveze:</strong> Kada je to zakonski potrebno ili u odgovoru na validne zahteve nadležnih organa</li>
                <li><strong>Tvoja saglasnost:</strong> Kada nam daš eksplicitnu dozvolu</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">4. Sigurnost podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Koristimo industrijske standarde za zaštitu tvojih podataka, uključujući:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>SSL/TLS enkripciju za prenos podataka</li>
                <li>Kriptovanje osetljivih informacija u bazi podataka</li>
                <li>Redovne sigurnosne provere i ažuriranja</li>
                <li>Ograničen pristup podacima samo ovlašćenom osoblju</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">5. Tvoja prava</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Imaš sledeća prava u vezi sa tvojim ličnim podacima:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Pristup:</strong> Možeš zatražiti kopiju svojih ličnih podataka</li>
                <li><strong>Ispravka:</strong> Možeš zatražiti ispravku netačnih podataka</li>
                <li><strong>Brisanje:</strong> Možeš zatražiti brisanje svojih podataka</li>
                <li><strong>Ograničenje:</strong> Možeš zatražiti ograničenje obrade tvojih podataka</li>
                <li><strong>Prenosivost:</strong> Možeš zatražiti prenos podataka drugom provajderu</li>
                <li><strong>Prigovor:</strong> Možeš prigovoriti na obradu tvojih podataka</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">6. Kolačići (Cookies)</h2>
              <p className="text-gray-700 leading-relaxed">
                Koristimo kolačiće za poboljšanje funkcionalnosti sajta i korisničkog iskustva. Kolačići nam pomažu da zapamtimo tvoje postavke, analiziramo saobraćaj i personalizujemo sadržaj. Možeš podesiti svoj browser da odbije kolačiće, ali to može uticati na funkcionalnost platforme.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">7. Zadržavanje podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Čuvamo tvoje lične podatke onoliko dugo koliko je potrebno za pružanje usluga ili ispunjavanje zakonskih obaveza. Nakon zatvaranja naloga, tvoji podaci se brišu ili anonimizuju u roku od 90 dana, osim ako zakon ne zahteva duže čuvanje.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">8. Deca i maloljetnici</h2>
              <p className="text-gray-700 leading-relaxed">
                Naša platforma nije namenjena deci mlađoj od 16 godina. Ako saznamo da smo prikupili podatke od deteta mlađeg od 16 godina bez saglasnosti roditelja, preduzećemo korake da te podatke brzo obrišemo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">9. Izmene politike</h2>
              <p className="text-gray-700 leading-relaxed">
                Zadržavamo pravo da ažuriramo ovu politiku privatnosti. Sve izmene će biti objavljene na ovoj stranici sa novim datumom ažuriranja. Preporučujemo periodičnu proveru ove stranice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">10. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ako imaš pitanja ili zahteve vezane za politiku privatnosti i zaštitu podataka, možeš nas kontaktirati:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@developer.lab" className="text-primary hover:text-primary-dark">privacy@developer.lab</a></p>
                <p className="text-gray-700 mb-2"><strong>Telefon:</strong> <a href="tel:+381601234567" className="text-primary hover:text-primary-dark">+381 60 123 4567</a></p>
                <p className="text-gray-700"><strong>Adresa:</strong> Beograd, Srbija</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
