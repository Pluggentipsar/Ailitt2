import React, { useState, useEffect, useRef } from 'react';
import { Dog, Cat, Brain, RotateCcw, ArrowRight, Zap, Search, AlertCircle, CheckCircle2, ChevronRight, Volume2, VolumeX, X } from 'lucide-react';

// --- Typer ---

type AnimalType = 'dog' | 'cat';
type ColorType = 'orange' | 'black' | 'white' | 'grey';

interface AnimalCard {
  id: string;
  type: AnimalType;
  color: ColorType;
  isScanned: boolean;
}

// --- Hjälpfunktioner ---

const getCardStyle = (type: AnimalType, color: ColorType) => {
  let bgColor = 'bg-gray-100';
  let textColor = 'text-gray-600';
  let borderColor = 'border-white';

  if (color === 'orange') { bgColor = 'bg-orange-100'; textColor = 'text-orange-600'; borderColor = 'border-orange-200'; }
  if (color === 'black') { bgColor = 'bg-slate-800'; textColor = 'text-slate-200'; borderColor = 'border-slate-600'; }
  if (color === 'white') { bgColor = 'bg-white'; textColor = 'text-slate-400'; borderColor = 'border-slate-200'; }
  if (color === 'grey') { bgColor = 'bg-slate-200'; textColor = 'text-slate-600'; borderColor = 'border-slate-300'; }

  return { bgColor, textColor, borderColor };
};

// --- Komponenter ---

const Card = ({ animal, onClick, disabled, size = 'normal' }: { animal: AnimalCard, onClick?: () => void, disabled?: boolean, size?: 'small' | 'normal' | 'large' }) => {
  const style = getCardStyle(animal.type, animal.color);

  const sizeClasses = size === 'small' ? 'w-12 h-16' : size === 'large' ? 'w-32 h-44' : 'w-20 h-28 md:w-24 md:h-32';
  const iconSize = size === 'small' ? 24 : size === 'large' ? 64 : 40;

  return (
    <button
      onClick={onClick}
      disabled={disabled || animal.isScanned}
      className={`
        relative ${sizeClasses} rounded-xl border-4 flex items-center justify-center shadow-sm transition-all duration-500
        ${animal.isScanned ? 'scale-0 opacity-0' : 'scale-100 hover:scale-105 active:scale-95 cursor-pointer'}
        ${style.bgColor} ${style.borderColor}
      `}
      aria-label={`Kort med ${animal.type === 'dog' ? 'hund' : 'katt'} i färgen ${animal.color}`}
    >
      {animal.type === 'dog' ? <Dog size={iconSize} className={style.textColor} /> : <Cat size={iconSize} className={style.textColor} />}
      {size !== 'small' && <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/10 rounded-full"></div>}
    </button>
  );
};

const GnistaBrain = ({ count, mood }: { count: number, mood: 'neutral' | 'thinking' | 'confused' | 'happy' }) => {
  return (
    <div className="relative group">
      {/* Hjärn-behållaren */}
      <div className={`
        w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center border-8 transition-colors duration-500 z-10 relative bg-white
        ${mood === 'confused' ? 'border-orange-300 shadow-orange-200' : mood === 'happy' ? 'border-green-400 shadow-green-200' : 'border-indigo-100'}
        shadow-xl
      `}>
        <div className="absolute inset-0 rounded-full overflow-hidden flex flex-wrap content-end p-4 gap-1 opacity-50">
          {/* Visualisera datan som "fyller" hjärnan */}
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
          ))}
        </div>

        {/* Ansikte */}
        <div className="z-20 relative text-slate-700 transition-transform duration-300 transform group-hover:scale-110">
          {mood === 'neutral' && <div className="text-5xl md:text-6xl">🙂</div>}
          {mood === 'thinking' && <div className="text-5xl md:text-6xl animate-bounce">🤔</div>}
          {mood === 'confused' && <div className="text-6xl md:text-7xl animate-pulse">😵‍💫</div>}
          {mood === 'happy' && <div className="text-6xl md:text-7xl animate-pulse">🤩</div>}
        </div>
        <p className="z-20 text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest bg-white/80 px-2 rounded-full">Minne: {count}</p>
      </div>
    </div>
  );
};

// --- Huvudapp ---

export default function TrainAiGame() {
  const [scene, setScene] = useState<'intro' | 'collecting' | 'analyzing' | 'result'>('intro');
  const [mode, setMode] = useState<'low' | 'high'>('low');
  const [deck, setDeck] = useState<AnimalCard[]>([]);
  const [scannedCount, setScannedCount] = useState(0);
  const [gnistaMessage, setGnistaMessage] = useState("Hej! Jag vet ingenting om hundar. Kan du lära mig?");
  const [gnistaMood, setGnistaMood] = useState<'neutral' | 'thinking' | 'confused' | 'happy'>('neutral');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Ljudeffekter (Textbaserade)
  const [sfx, setSfx] = useState<string | null>(null);

  const playSfx = (text: string) => {
    setSfx(text);
    setTimeout(() => setSfx(null), 800);
  };

  // TTS Helper
  const speak = (text: string) => {
    if (!soundEnabled) return;
    window.speechSynthesis.cancel(); // Stoppa pågående tal
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'sv-SE';
    utterance.rate = 1.0;
    utterance.pitch = 1.1; // Lite ljusare röst för Gnista
    window.speechSynthesis.speak(utterance);
  };

  const initGame = (selectedMode: 'low' | 'high') => {
    setMode(selectedMode);
    setScene('collecting');
    setScannedCount(0);
    setGnistaMood('neutral');

    const newDeck: AnimalCard[] = [];
    const count = selectedMode === 'low' ? 3 : 20;

    for (let i = 0; i < count; i++) {
      if (selectedMode === 'low') {
        newDeck.push({ id: `dog-${i}`, type: 'dog', color: 'orange', isScanned: false });
      } else {
        const colors: ColorType[] = ['orange', 'black', 'white', 'grey'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const type: AnimalType = Math.random() > 0.85 ? 'cat' : 'dog'; // Mest hundar
        newDeck.push({ id: `${type}-${i}`, type, color: randomColor, isScanned: false });
      }
    }
    setDeck(newDeck);

    const msg = selectedMode === 'low'
      ? "Klicka på korten för att skicka in dem i min hjärna!"
      : "Oj vad många! Klicka på dem för att lära mig. Använd 'Superscan' om du blir trött.";
    setGnistaMessage(msg);
    speak(msg);
  };

  const handleScan = (card: AnimalCard) => {
    playSfx("Bloop!");
    setDeck(prev => prev.map(c => c.id === card.id ? { ...c, isScanned: true } : c));
    setScannedCount(prev => prev + 1);

    // Enkel uppläsning av kortet
    const colorName = { orange: 'orange', black: 'svart', white: 'vit', grey: 'grå' }[card.color];
    const typeName = card.type === 'dog' ? 'hund' : 'katt';
    speak(`En ${colorName} ${typeName}`);
  };

  const handleSuperScan = () => {
    playSfx("Wozhh!");
    setDeck(prev => prev.map(card => ({ ...card, isScanned: true })));
    setScannedCount(deck.length);
    speak("Wow! Nu går det undan! Jag läser in allt på en gång!");
  };

  useEffect(() => {
    if (scene === 'collecting' && scannedCount === deck.length && deck.length > 0) {
      setTimeout(() => {
        setScene('analyzing');
        setGnistaMood('thinking');
        const msg = "Nu tänker jag... Jag letar efter mönster i bilderna du visade.";
        setGnistaMessage(msg);
        speak(msg);
      }, 1500);
    }
  }, [scannedCount, scene, deck.length]);

  useEffect(() => {
    if (scene === 'intro') {
      // Kort fördröjning så att komponenten hinner laddas
      const timer = setTimeout(() => {
        speak("Hej! Jag heter Gnista. Jag vet ingenting om hundar. Kan du lära mig?");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [scene]);

  const handleResult = () => {
    setScene('result');
    if (mode === 'low') {
      speak("Titta här! En svart hund. Men... min regel säger att hundar måste vara orangea. Så jag tror inte att det här är en hund. Det blev fel!");
    } else {
      speak("Titta här! En svart hund. Min regel säger att hundar har en viss form. Den här passar formen, så jag vet att det är en hund! Hurra!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden relative">

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="absolute top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors"
        aria-label={soundEnabled ? "Stäng av ljud" : "Sätt på ljud"}
      >
        {soundEnabled ? <Volume2 size={24} className="text-indigo-600" /> : <VolumeX size={24} className="text-slate-400" />}
      </button>

      {/* SFX Overlay */}
      {sfx && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-5xl font-black text-indigo-500 animate-bounce drop-shadow-lg pointer-events-none select-none">
          {sfx}
        </div>
      )}

      {/* --- SCENE: INTRO --- */}
      {scene === 'intro' && (
        <div className="max-w-xl w-full text-center space-y-8 animate-fade-in">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mb-4 border-4 border-indigo-200 shadow-md">
              <Brain size={64} className="text-indigo-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">Träna Gnista</h1>
            <p className="text-slate-600 mt-2 text-lg max-w-md mx-auto">Du är läraren. Hjälp AI:n Gnista att förstå vad en "Hund" är.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full">
            <button
              onClick={() => initGame('low')}
              onMouseEnter={() => speak("Lite data. Här får jag bara se tre hundar.")}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-orange-400 hover:bg-orange-50 transition-all flex items-center gap-4 group transform hover:-translate-y-1"
            >
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">3</div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-xl text-slate-800">Lite data</h3>
                <p className="text-sm text-slate-500 font-medium">Gnista får bara se 3 hundar.</p>
              </div>
              <ChevronRight className="ml-auto text-orange-300 group-hover:text-orange-600 transition-colors" size={28} />
            </button>

            <button
              onClick={() => initGame('high')}
              onMouseEnter={() => speak("Mycket data. Här får jag se massor av hundar!")}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-green-500 hover:bg-green-50 transition-all flex items-center gap-4 group transform hover:-translate-y-1"
            >
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl shadow-sm">20</div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-xl text-slate-800">Mycket data</h3>
                <p className="text-sm text-slate-500 font-medium">Gnista får se massor av hundar!</p>
              </div>
              <ChevronRight className="ml-auto text-green-300 group-hover:text-green-600 transition-colors" size={28} />
            </button>
          </div>
        </div>
      )}

      {/* --- SCENE: COLLECTING --- */}
      {scene === 'collecting' && (
        <div className="w-full max-w-4xl flex flex-col h-full animate-fade-in relative">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 gap-4">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <GnistaBrain count={scannedCount} mood={gnistaMood} />
              <div className="bg-slate-100 px-6 py-4 rounded-2xl rounded-tl-none relative shadow-inner flex-1 md:flex-none">
                <p className="font-bold text-slate-700 text-lg leading-snug">"{gnistaMessage}"</p>
                <div className="absolute top-0 left-0 -translate-x-3 w-6 h-6 bg-slate-100 [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Insamlat</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-indigo-600">{scannedCount}</span>
                <span className="text-xl font-bold text-slate-400">/ {deck.length}</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 bg-slate-200/50 rounded-3xl p-4 md:p-6 shadow-inner border border-slate-200 overflow-hidden relative min-h-[400px]">

            {mode === 'high' && scannedCount < deck.length && (
              <div className="absolute bottom-6 right-6 z-20">
                <button
                  onClick={handleSuperScan}
                  className="bg-indigo-600 text-white px-6 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-500 hover:scale-105 transition-all flex items-center gap-2 animate-bounce-gentle"
                >
                  <Zap size={24} fill="currentColor" />
                  <span>Superscan!</span>
                </button>
              </div>
            )}

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 justify-items-center h-full overflow-y-auto pb-20 pt-2 px-2 custom-scrollbar">
              {deck.map((card) => (
                <Card
                  key={card.id}
                  animal={card}
                  onClick={() => handleScan(card)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- SCENE: ANALYZING (Den pedagogiska visualiseringen) --- */}
      {scene === 'analyzing' && (
        <div className="w-full max-w-4xl animate-fade-in flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Gnista bygger sin "Inre Bild"</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">

            {/* Input Data */}
            <div className="bg-slate-100 p-6 rounded-3xl border-2 border-slate-200 text-center w-64 h-80 flex flex-col items-center">
              <h3 className="font-bold text-slate-500 uppercase tracking-widest text-xs mb-4">Datan du gav</h3>
              <div className="flex-1 flex items-center justify-center relative w-full">
                {/* Visualiserar stacken av kort */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-6">
                  <Card animal={{ id: 'x', type: 'dog', color: 'orange', isScanned: false }} disabled size="small" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-6">
                  <Card animal={{ id: 'y', type: 'dog', color: 'orange', isScanned: false }} disabled size="small" />
                </div>
                {mode === 'high' && (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-12 translate-x-4">
                      <Card animal={{ id: 'z', type: 'dog', color: 'black', isScanned: false }} disabled size="small" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-12 -translate-x-4">
                      <Card animal={{ id: 'w', type: 'dog', color: 'white', isScanned: false }} disabled size="small" />
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-2 font-medium">
                {mode === 'low' ? "3st (Bara orangea)" : "20st (Alla färger)"}
              </p>
            </div>

            {/* Processpil */}
            <div className="flex flex-col items-center gap-2 text-indigo-400">
              <span className="text-xs font-bold uppercase">Träning</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
              </div>
              <ArrowRight size={40} />
            </div>

            {/* Output Model */}
            <div className="bg-indigo-50 p-6 rounded-3xl border-4 border-indigo-200 text-center w-64 h-80 flex flex-col items-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-indigo-200 animate-progress"></div>
              <h3 className="font-bold text-indigo-800 uppercase tracking-widest text-xs mb-4">Gnistas "Regel"</h3>

              <div className="flex-1 flex items-center justify-center">
                {mode === 'low' ? (
                  // Low Data Model: Specific Orange Dog
                  <div className="flex flex-col items-center animate-pulse">
                    <Dog size={80} className="text-orange-600 drop-shadow-md" />
                    <div className="mt-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                      Hund = Orange
                    </div>
                  </div>
                ) : (
                  // High Data Model: Generic/Abstract Dog
                  <div className="flex flex-col items-center animate-pulse">
                    <div className="relative">
                      <Dog size={80} className="text-slate-400 opacity-50" />
                      <Dog size={80} className="text-slate-800 absolute top-0 left-0 opacity-30 animate-ping" />
                    </div>
                    <div className="mt-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                      Hund = Formen
                    </div>
                  </div>
                )}
              </div>
              <p className="text-sm text-indigo-800 mt-2 font-medium">
                {mode === 'low' ? "Väldigt specifik bild" : "Allmän bild (mönster)"}
              </p>
            </div>

          </div>

          <div className="mt-12">
            <button
              onClick={handleResult}
              className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all flex items-center gap-3 animate-bounce-gentle"
            >
              <Search size={24} />
              Testa Gnista nu!
            </button>
          </div>
        </div>
      )}

      {/* --- SCENE: RESULT (Pedagogisk Jämförelse) --- */}
      {scene === 'result' && (
        <div className="w-full max-w-4xl animate-fade-in flex flex-col items-center pb-10">

          <h2 className="text-2xl font-bold mb-8 text-slate-800">Testet: Ett nytt djur dyker upp!</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-3xl">

            {/* The Reality (Test Card) */}
            <div className="bg-slate-800 p-6 rounded-3xl border-4 border-slate-700 w-full md:w-1/3 flex flex-col items-center text-white relative">
              <span className="absolute -top-3 bg-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase">Verkligheten</span>
              <Dog size={64} className="text-white mb-2" />
              <p className="font-bold text-lg">Svart Hund</p>
            </div>

            {/* VS */}
            <div className="font-black text-2xl text-slate-300">JÄMFÖRS MED</div>

            {/* The AI Model */}
            <div className={`
              p-6 rounded-3xl border-4 w-full md:w-1/3 flex flex-col items-center relative bg-white
              ${mode === 'low' ? 'border-orange-200' : 'border-indigo-200'}
            `}>
              <span className={`absolute -top-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${mode === 'low' ? 'bg-orange-100 text-orange-700' : 'bg-indigo-100 text-indigo-700'}`}>
                Gnistas "Regel"
              </span>
              {mode === 'low' ? (
                <>
                  <Dog size={64} className="text-orange-600 mb-2" />
                  <p className="font-bold text-lg text-orange-800">Orange Hund</p>
                </>
              ) : (
                <>
                  <Dog size={64} className="text-slate-400 mb-2" />
                  <p className="font-bold text-lg text-slate-600">Hund-formen</p>
                </>
              )}
            </div>
          </div>

          {/* The Outcome */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1 h-16 bg-slate-300 -z-10"></div>
            {mode === 'low' ? (
              <div className="bg-red-100 border-l-8 border-red-500 p-6 rounded-r-xl shadow-lg max-w-lg flex items-start gap-4">
                <X className="text-red-500 shrink-0" size={32} strokeWidth={4} />
                <div>
                  <h3 className="font-bold text-red-900 text-lg">Det krockar!</h3>
                  <p className="text-red-800">
                    Verkligheten (Svart) passar inte med Gnistas regel (Måste vara Orange).
                    Gnista tror att det <strong>inte</strong> är en hund.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-xl shadow-lg max-w-lg flex items-start gap-4">
                <CheckCircle2 className="text-green-600 shrink-0" size={32} strokeWidth={4} />
                <div>
                  <h3 className="font-bold text-green-900 text-lg">Det matchar!</h3>
                  <p className="text-green-800">
                    Verkligheten (Svart) passar i Gnistas form-regel.
                    Gnista ser att formen är rätt, så hon vet att det är en hund!
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setScene('intro');
              speak("Vill du testa igen? Välj hur mycket data jag ska få.");
            }}
            className="text-slate-500 font-bold hover:text-indigo-600 underline decoration-2 underline-offset-4 flex items-center gap-2"
          >
            <RotateCcw size={16} /> Testa det andra läget
          </button>

        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-bounce-gentle { animation: bounce-gentle 3s infinite; }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-progress { animation: progress 2s ease-in-out infinite; }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
