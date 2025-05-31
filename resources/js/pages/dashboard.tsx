import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Bot, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Calendar,
  Plus, 
  Search,
  Bell,
  Settings,
  LogOut,
  Home,
  Upload,
  MessageCircle,
  Lightbulb,
  BarChart3,
  Receipt,
  Calculator,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  Zap,
  Target
} from 'lucide-react';

// Mock data
const mockAuth = { user: { name: 'Alex van den Berg', email: 'alex@example.com' } };
const mockRoute = (name) => `/${name}`;

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      title: 'Deze maand',
      value: '€2.847',
      change: '+12%',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Bonnetjes',
      value: '23',
      change: '+5',
      trend: 'up',
      icon: <Receipt className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'BTW terug',
      value: '€421',
      change: '+€89',
      trend: 'up',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Te verwerken',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentReceipts = [
    {
      id: 1,
      vendor: 'Albert Heijn',
      amount: '€12.45',
      category: 'Kantoorbenodigdheden',
      date: '2 uur geleden',
      status: 'processed',
      confidence: 98
    },
    {
      id: 2,
      vendor: 'Shell',
      amount: '€89.20',
      category: 'Brandstof',
      date: '5 uur geleden',
      status: 'processed',
      confidence: 95
    },
    {
      id: 3,
      vendor: 'MediaMarkt',
      amount: '€234.99',
      category: 'Apparatuur',
      date: 'Gisteren',
      status: 'pending',
      confidence: 87
    },
    {
      id: 4,
      vendor: 'Café Central',
      amount: '€15.60',
      category: 'Zakelijke lunch',
      date: '2 dagen geleden',
      status: 'processed',
      confidence: 92
    }
  ];

  const aiSuggestions = [
    {
      type: 'tip',
      title: 'BTW-voordeel gemist?',
      message: 'Je hebt €89 aan brandstof uitgegeven. Vergeet niet dit af te trekken!',
      action: 'Bekijk details'
    },
    {
      type: 'reminder',
      title: 'Kwartaalaangifte',
      message: 'Over 12 dagen moet je BTW-aangifte worden ingediend.',
      action: 'Voorbereiden'
    },
    {
      type: 'insight',
      title: 'Uitgavenpatroon',
      message: 'Je kantoorkosten zijn 23% lager dan vorige maand. Goed bezig!',
      action: 'Meer inzichten'
    }
  ];

  const quickActions = [
    {
      title: 'Bonnetje uploaden',
      description: 'Scan of upload een bonnetje',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      action: () => setShowUpload(true)
    },
    {
      title: 'AI Assistent',
      description: 'Stel een vraag over belasting',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      action: () => setActiveTab('ai-chat')
    },
    {
      title: 'Rapport genereren',
      description: 'Download je maandoverzicht',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      action: () => console.log('Generate report')
    },
    {
      title: 'Uitgaven analyseren',
      description: 'Bekijk je uitgavenpatronen',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      action: () => setActiveTab('analytics')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/80 border-b border-blue-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800">
                    Welkom terug, {mockAuth.user?.name?.split(' ')[0] || 'Alex'}! 👋
                  </h1>
                  <p className="text-sm text-slate-500">
                    {currentTime.toLocaleDateString('nl-NL', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
            
            <nav className="flex items-center gap-3">
              <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              
              <a
                href={mockRoute('home')}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </a>
              
              <a
                href={mockRoute('logout')}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Uitloggen</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  <ArrowUpRight className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Snelle acties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{action.title}</h3>
                <p className="text-slate-600 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Receipts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Receipt className="w-6 h-6 text-blue-500" />
                Laatste bonnetjes
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Plus className="w-4 h-4" />
                Nieuw bonnetje
              </button>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg overflow-hidden">
              {recentReceipts.length > 0 ? (
                <div className="divide-y divide-blue-100">
                  {recentReceipts.map((receipt) => (
                    <div key={receipt.id} className="p-6 hover:bg-blue-50/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            receipt.status === 'processed' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-orange-100 text-orange-600'
                          }`}>
                            {receipt.status === 'processed' ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{receipt.vendor}</p>
                            <p className="text-slate-500 text-sm">{receipt.category} • {receipt.date}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-green-500 rounded-full"
                                  style={{ width: `${receipt.confidence}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-500">{receipt.confidence}% zeker</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-800">{receipt.amount}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            receipt.status === 'processed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {receipt.status === 'processed' ? 'Verwerkt' : 'Wachtend'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <Receipt className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 mb-4">Nog geen bonnetjes toegevoegd</p>
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Upload je eerste bonnetje
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* AI Assistant */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800">AI Assistent</h3>
              </div>
              
              <div className="space-y-3 mb-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        suggestion.type === 'tip' ? 'bg-blue-100 text-blue-600' :
                        suggestion.type === 'reminder' ? 'bg-orange-100 text-orange-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {suggestion.type === 'tip' ? <Lightbulb className="w-4 h-4" /> :
                         suggestion.type === 'reminder' ? <Bell className="w-4 h-4" /> :
                         <Target className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm mb-1">{suggestion.title}</p>
                        <p className="text-slate-600 text-xs mb-2">{suggestion.message}</p>
                        <button className="text-blue-600 text-xs font-medium hover:underline">
                          {suggestion.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all">
                <MessageCircle className="w-4 h-4" />
                Start gesprek met AI
              </button>
            </div>

            {/* Tax Tips */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800">Slimme tips</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-sm font-medium text-green-800 mb-1">💰 Bespaar op belasting</p>
                  <p className="text-green-600 text-xs">Bewaar bonnetjes van zakelijke diners - deze zijn 100% aftrekbaar!</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm font-medium text-blue-800 mb-1">📅 Deadline reminder</p>
                  <p className="text-blue-600 text-xs">BTW-aangifte Q4 2024 moet voor 31 januari ingediend worden.</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-sm font-medium text-purple-800 mb-1">📊 Maandoverzicht</p>
                  <p className="text-purple-600 text-xs">Je hebt dit kwartaal 15% meer uitgegeven aan kantoorbenodigdheden.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Bonnetje uploaden</h3>
              <p className="text-slate-600">Sleep je bonnetje hierheen of klik om te selecteren</p>
            </div>
            
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center mb-6 hover:border-blue-500 transition-colors cursor-pointer">
              <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-slate-600">Klik hier om een foto te maken of bestand te selecteren</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowUpload(false)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Annuleren
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Uploaden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}