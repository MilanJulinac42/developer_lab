import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import WaveDivider from '@/components/decorative/WaveDivider';

export const metadata = {
  title: 'Uslovi korišćenja - Developer.Lab',
  description: 'Uslovi korišćenja Developer.Lab platforme za Data Science edukaciju.',
};

export default function TermsPage() {
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
              Uslovi <span className="text-accent">korišćenja</span>
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
                Korišćenjem Developer.Lab platforme prihvataš sledeće uslove korišćenja. Molimo te da pažljivo pročitaš ovaj dokument pre nego što počneš da koristiš naše usluge.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">1. Prihvatanje uslova</h2>
              <p className="text-gray-700 leading-relaxed">
                Pristupanjem i korišćenjem Developer.Lab platforme (u daljem tekstu "Platforma"), prihvataš da budeš vezan ovim Uslovima korišćenja. Ako se ne slažeš sa bilo kojim delom ovih uslova, nemoj koristiti našu platformu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">2. Opis usluge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Developer.Lab je online edukaciona platforma koja pruža:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Online kurseve iz oblasti Data Science-a i programiranja</li>
                <li>Video lekcije, praktične vežbe i projekte</li>
                <li>Sertifikate o završetku kurseva</li>
                <li>Mentorsku podršku i pomoć</li>
                <li>Pristup zajednici polaznika</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">3. Registracija naloga</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Za korišćenje platforme potrebno je kreirati nalog. Slažeš se da:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Pružiš tačne i potpune informacije prilikom registracije</li>
                <li>Održavaš sigurnost svog naloga i lozinke</li>
                <li>Odmah nas obvestiš o neovlašćenom pristupu tvom nalogu</li>
                <li>Prihvataš odgovornost za sve aktivnosti koje se dogode pod tvojim nalogom</li>
                <li>Nećeš deliti svoj nalog sa drugim osobama</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">4. Plaćanje i refundacija</h2>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">4.1 Cene i plaćanje</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sve cene su iskazane u dinarima (RSD). Plaćanje se vrši jednokratno pre pristupa kursu. Prihvatamo sledeće metode plaćanja: kreditne/debitne kartice, PayPal i uplatu na račun.
              </p>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">4.2 Politika refundacije</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nudimo 14-dnevnu garanciju vraćanja novca. Možeš zatražiti puni povraćaj sredstava ako:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Nisi zadovoljan kursom u prvih 14 dana od kupovine</li>
                <li>Nisi prošao više od 25% kursa</li>
                <li>Nisi preuzeo sertifikat</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nakon 14 dana od kupovine, refundacija nije moguća.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">5. Intelektualna svojina</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sav sadržaj na platformi (video lekcije, tekstovi, kod, slike, grafike) je vlasništvo Developer.Lab-a ili naših partnera i zaštićen je zakonima o autorskim pravima.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Dozvoljeno je:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Gledanje i korišćenje materijala za ličnu edukaciju</li>
                <li>Preuzimanje materijala za offline korišćenje (gde je dostupno)</li>
                <li>Kreiranje projekata na osnovu naučenog materijala</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 mt-6">
                <strong>Zabranjeno je:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Deljenje nalogaili pristupa sa drugim korisnicima</li>
                <li>Kopiranje, distribuiranje ili preprodaja kurseva</li>
                <li>Javno objavljivanje materijala sa platforme</li>
                <li>Korišćenje materijala u komercijalne svrhe bez dozvole</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">6. Pravila ponašanja</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Slažeš se da nećeš:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Koristiti platformu na bilo koji nezakonit način</li>
                <li>Uznemiravati ili vređati druge korisnike ili osoblje</li>
                <li>Pokušavati da hakovanjem ili na drugi način dobiješ neovlašćeni pristup</li>
                <li>Objavljivati štetni ili neprikladni sadržaj</li>
                <li>Slati spam poruke ili reklame</li>
                <li>Koristiti automatizovane sisteme ili botove</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">7. Sertifikati</h2>
              <p className="text-gray-700 leading-relaxed">
                Nakon uspešnog završetka kursa, dobijaš digitalni sertifikat. Sertifikat potvrđuje da si završio kurs, ali ne garantuje zaposlenje niti predstavlja akreditovanu kvalifikaciju. Developer.Lab zadržava pravo da ne izda sertifikat ako se utvrdi kršenje uslova korišćenja.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">8. Ograničenje odgovornosti</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Developer.Lab ne preuzima odgovornost za:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Prekide u radu platforme zbog održavanja ili tehničkih problema</li>
                <li>Gubitak podataka ili nemogućnost pristupa sadržaju</li>
                <li>Netačnosti u sadržaju kurseva</li>
                <li>Rezultate koje postigneš ili ne postigneš nakon završetka kursa</li>
                <li>Radnje trećih strana (provajdera plaćanja, hosting provajdera, itd.)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">9. Prekid pristupa</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zadržavamo pravo da privremeno ili trajno suspendujemo tvoj pristup platformi ako:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Prekršiš ove uslove korišćenja</li>
                <li>Učestvuješ u fraudulentnim aktivnostima</li>
                <li>Svojim ponašanjem ugrožavaš druge korisnike</li>
                <li>Ne platiš za kurs koji si započeo</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">10. Izmene uslova</h2>
              <p className="text-gray-700 leading-relaxed">
                Zadržavamo pravo da izmenimo ove uslove korišćenja u bilo kom trenutku. Sve izmene stupaju na snagu odmah nakon objavljivanja. Nastavak korišćenja platforme nakon izmena smatra se prihvatanjem novih uslova. Preporučujemo periodičnu proveru ove stranice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">11. Raskid ugovora</h2>
              <p className="text-gray-700 leading-relaxed">
                Možeš raskinuti ugovor i zatvoriti nalog u bilo kom trenutku kontaktiranjem naše podrške. Nakon zatvaranja naloga, izgubiš pristup svim kursevima i materijalimaosim ako zakon ne zahteva drugačije. Refundacija se vrši samo u skladu sa politikom refundacije iz člana 4.2.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">12. Mjerodavno pravo</h2>
              <p className="text-gray-700 leading-relaxed">
                Ovi uslovi korišćenja podležu zakonima Republike Srbije. Svi sporovi će se rešavati pred nadležnim sudovima u Beogradu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">13. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ako imaš pitanja ili nedoumice vezane za uslove korišćenja, možeš nas kontaktirati:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:info@developer.lab" className="text-primary hover:text-primary-dark">info@developer.lab</a></p>
                <p className="text-gray-700 mb-2"><strong>Telefon:</strong> <a href="tel:+381601234567" className="text-primary hover:text-primary-dark">+381 60 123 4567</a></p>
                <p className="text-gray-700"><strong>Adresa:</strong> Beograd, Srbija</p>
              </div>
            </section>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-12">
              <p className="text-navy font-semibold mb-0">
                Korišćenjem Developer.Lab platforme potvrđuješ da si pročitao, razumeo i prihvatio ove uslove korišćenja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
