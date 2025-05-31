import { Link, Head, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Welkom bij AdminBuddy" />
      <div className="min-h-screen bg-white text-gray-800 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        {/* Header */}
        <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">AdminBuddy</h1>
          <nav className="flex items-center gap-4 text-sm">
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link href={route('login')} className="hover:underline">
                  Inloggen
                </Link>
                <Link
                  href={route('register')}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                >
                  Registreren
                </Link>
              </>
            )}
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Slimme administratie voor freelancers & zzp’ers</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Beheer je bonnetjes met 1 klik. Laat onze AI-assistent je helpen met administratie, belastingtips en slimme inzichten.
          </p>
          <Link
            href={auth.user ? route('dashboard') : route('register')}
            className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-900 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {auth.user ? 'Ga naar dashboard' : 'Start gratis'}
          </Link>
        </section>

        {/* Feature Animation / Demo */}
        <section className="text-center py-12">
          <div className="mx-auto max-w-3xl aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl shadow-inner flex items-center justify-center text-gray-500 dark:text-gray-300">
            <span>📹 Hier kan een toekomstige demo-video of animatie komen</span>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 dark:bg-[#111] py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">📸 Bonnetjes vastleggen</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maak een foto van je bon en sla ‘m automatisch op in je administratie.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🤖 AI Administratie-assistent</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chat met een slimme AI die je helpt met btw-vragen, tips en berekeningen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔒 Veilig & eenvoudig</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jouw data is veilig opgeslagen. Geen gedoe, gewoon duidelijke inzichten.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h4 className="text-2xl font-bold text-center mb-10">Wat anderen zeggen</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="italic text-gray-700 dark:text-gray-300">“Ik bespaar uren per week. Nooit meer bonnetjes kwijt!”</p>
              <p className="mt-4 font-semibold">— Samir, Freelancer</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="italic text-gray-700 dark:text-gray-300">“De AI-assistent heeft mij geholpen met btw-aangifte, top tool.”</p>
              <p className="mt-4 font-semibold">— Lisa, Creatief Ondernemer</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6">
          <h4 className="text-2xl font-semibold mb-4">Klaar om jouw administratie te versimpelen?</h4>
          <Link
            href={auth.user ? route('dashboard') : route('register')}
            className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {auth.user ? 'Ga naar dashboard' : 'Maak een gratis account'}
          </Link>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} AdminBuddy. Alle rechten voorbehouden.
        </footer>
      </div>
    </>
  );
}
