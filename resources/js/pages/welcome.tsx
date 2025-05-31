import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Star, Zap, Shield, Camera, Bot, Calculator, FileText, TrendingUp } from 'lucide-react';

// Mock data voor auth en routing
const mockAuth = { user: null };
const mockRoute = (users) => `/${name}`;

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Camera className="w-12 h-12 text-blue-500" />,
      title: "Bonnetjes scannen",
      description: "Maak een foto, de AI doet de rest"
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-500" />,
      title: "AI Assistent",
      description: "Krijg slimme belastingtips en inzichten"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Automatische rapporten",
      description: "Overzichten die je accountant zal waarderen"
    }
  ];

  const benefits = [
    "Bespaar 5+ uren per week",
    "Geen bonnetjes meer kwijt",
    "Automatische BTW-berekeningen",
    "Accountant-ready rapporten"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-800">
      {/* Header */}
      <header className="relative z-50 backdrop-blur-sm bg-white/80 border-b border-blue-100">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FreelanceBuddy
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            {mockAuth.user ? (
              <a
                href={mockRoute('dashboard')}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Dashboard <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <>
                <a href={mockRoute('login')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  Inloggen
                </a>
                <a
                  href={mockRoute('register')}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Gratis starten
                </a>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Nieuwe AI-functies beschikbaar!</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Administratie die{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              zichzelf doet
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Van bonnetje tot belastingaangifte in één klik. Laat onze AI je administratie volledig automatiseren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={mockAuth.user ? mockRoute('dashboard') : mockRoute('register')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-xl shadow-blue-500/25 flex items-center gap-2"
            >
              {mockAuth.user ? 'Ga naar dashboard' : 'Gratis proberen'}
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm">1000+ tevreden freelancers</span>
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100 transform transition-all duration-500 delay-${index * 100}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Interactive Feature Demo */}
      <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Zo werkt het</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    currentFeature === index 
                      ? 'border-blue-300 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-blue-200'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="text-center z-10">
                  {features[currentFeature].icon}
                  <p className="mt-4 text-slate-600 font-medium">{features[currentFeature].title}</p>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-600 font-semibold">4.9/5 (127 reviews)</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                "Ik bespaar letterlijk uren per week. De AI herkent alles perfect en mijn accountant is super blij met de rapporten."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-800">Samir Ahmed</p>
                  <p className="text-slate-500 text-sm">Freelance Designer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                "Eindelijk een tool die echt begrijpt wat freelancers nodig hebben. De BTW-berekeningen zijn perfect!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-800">Lisa van der Berg</p>
                  <p className="text-slate-500 text-sm">Marketing Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Klaar voor stress-vrije administratie?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Sluit je aan bij 1000+ freelancers die hun administratie hebben geautomatiseerd
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mockAuth.user ? mockRoute('dashboard') : mockRoute('register')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-xl flex items-center justify-center gap-2"
            >
              {mockAuth.user ? 'Ga naar dashboard' : 'Start vandaag nog gratis'}
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Shield className="w-5 h-5" />
              <span>30 dagen geld-terug-garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-700">FreelanceBuddy</span>
          </div>
          <p>&copy; {new Date().getFullYear()} FreelanceBuddy. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}