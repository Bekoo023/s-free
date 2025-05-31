import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
  const [aiResponse, setAiResponse] = useState('Hallo! Waarmee kan ik je vandaag helpen?');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a] text-gray-800 dark:text-white p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welkom terug!</h1>
        <Link
          href="/bon-toevoegen"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          + Nieuwe bon toevoegen
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Laatste bonnen */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow col-span-2">
          <h2 className="text-xl font-semibold mb-4">📄 Laatste bonnen</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">Lunch – €12,50 – 27 mei</li>
            <li className="border-b pb-2">Tankbon – €43,10 – 25 mei</li>
            <li className="border-b pb-2">Printerpapier – €6,99 – 23 mei</li>
            <li className="text-sm text-gray-500 dark:text-gray-400 italic">Meer bonnen worden automatisch geladen...</li>
          </ul>
        </div>

        {/* AI Chatbox */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col">
          <h2 className="text-xl font-semibold mb-4">🤖 AI Assistent</h2>
          <div className="flex-1 mb-4 bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
            {aiResponse}
          </div>
          <input
            type="text"
            placeholder="Stel een vraag over btw, kosten, etc."
            className="p-2 border border-gray-300 rounded dark:bg-gray-900 dark:border-gray-600"
            onKeyDown={(e) => {
              if (e.key === 'Enter') setAiResponse('✨ AI is bezig met je vraag te verwerken...');
            }}
          />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Belastingtips */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">💡 Belastingtips</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            <li>Bewaar je bonnetjes minimaal 7 jaar (digitale kopieën toegestaan)</li>
            <li>Gebruik de kleineondernemersregeling (KOR) als je minder dan €20.000 omzet maakt</li>
            <li>Woon-werkverkeer mag niet altijd als zakelijke rit worden opgevoerd</li>
          </ul>
        </div>

        {/* Statistieken */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">📊 Statistieken</h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300">
            <li>Totale uitgaven deze maand: <strong>€328,12</strong></li>
            <li>Aftrekbare btw: <strong>€56,89</strong></li>
            <li>Bonnetjes ingediend: <strong>14</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
