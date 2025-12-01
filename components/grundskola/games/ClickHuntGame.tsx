"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Search, Trophy, RefreshCcw, Volume2, HelpCircle, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface ClickHuntGameProps {
    onClose: () => void;
}

interface HiddenItem {
    id: string;
    name: string;
    emoji: string;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    description: string;
    explanation: string; // Detailed explanation for the popup
}

const HIDDEN_ITEMS: HiddenItem[] = [
    {
        id: 'robot',
        name: 'Robotdammsugare',
        emoji: '🧹',
        x: 20,
        y: 85,
        description: 'Den städar själv!',
        explanation: 'Robotdammsugaren använder kameror och sensorer för att "se" rummet. Den lär sig var möblerna står så att den inte krockar. Det är AI!'
    },
    {
        id: 'speaker',
        name: 'Smart Högtalare',
        emoji: '🔊',
        x: 80,
        y: 60,
        description: 'Den lyssnar och pratar.',
        explanation: 'När du pratar med högtalaren omvandlar AI ditt tal till text, förstår vad du menar, och letar upp svaret.'
    },
    {
        id: 'phone',
        name: 'Mobiltelefon',
        emoji: '📱',
        x: 45,
        y: 55,
        description: 'Full av AI-appar.',
        explanation: 'Din telefon använder AI för massor av saker! Ansiktsigenkänning för att låsa upp, röststyrning, och för att ta bättre bilder.'
    },
    {
        id: 'camera',
        name: 'Övervakningskamera',
        emoji: '📹',
        x: 10,
        y: 20,
        description: 'Ser vem som kommer.',
        explanation: 'Smarta kameror kan se skillnad på en människa, ett djur eller en bil. De använder bildigenkänning, precis som dina ögon och hjärna!'
    },
    {
        id: 'thermostat',
        name: 'Smart Termostat',
        emoji: '🌡️',
        x: 90,
        y: 40,
        description: 'Reglerar värmen automatiskt.',
        explanation: 'Termostaten lär sig när ni är hemma och vilken temperatur ni gillar. Den sparar energi genom att sänka värmen när ingen är där.'
    },
];

export function ClickHuntGame({ onClose }: ClickHuntGameProps) {
    const [gameStarted, setGameStarted] = useState(false);
    const [foundItems, setFoundItems] = useState<string[]>([]);
    const [mistakes, setMistakes] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeItem, setActiveItem] = useState<HiddenItem | null>(null); // Item currently being explained
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        if (foundItems.length === HIDDEN_ITEMS.length && !activeItem) {
            setShowSuccess(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFCA28', '#26C6DA', '#EF5350']
            });
            speak("Bra jobbat! Du hittade alla AI-prylar! Nu vet du att AI finns nästan överallt hemma.");
        }
    }, [foundItems, activeItem]);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any previous speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sv-SE'; // Swedish
            utterance.rate = 0.9; // Slightly slower for kids
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopSpeaking = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    const handleItemClick = (item: HiddenItem) => {
        if (foundItems.includes(item.id)) return;

        // Don't add to foundItems yet, wait until they close the explanation
        setActiveItem(item);

        // Confetti burst
        confetti({
            particleCount: 30,
            spread: 30,
            origin: { y: 0.5 },
            colors: ['#26C6DA']
        });

        // Auto-speak explanation
        speak(`Du hittade ${item.name}! ${item.explanation}`);
    };

    const handleCloseExplanation = () => {
        stopSpeaking();
        if (activeItem) {
            setFoundItems(prev => [...prev, activeItem.id]);
            setActiveItem(null);
        }
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).dataset.bg === "true") {
            setMistakes(prev => prev + 1);
        }
    };

    const resetGame = () => {
        stopSpeaking();
        setFoundItems([]);
        setMistakes(0);
        setShowSuccess(false);
        setActiveItem(null);
        setGameStarted(false); // Go back to intro
    };

    // Intro Screen
    if (!gameStarted) {
        return (
            <div className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
                <div className="bg-white rounded-[3rem] max-w-3xl w-full p-12 shadow-2xl border-8 border-[#4DD0E1] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-4 bg-[#4DD0E1]" />

                    <div className="w-32 h-32 bg-[#E0F7FA] rounded-full flex items-center justify-center mx-auto mb-8 text-6xl shadow-inner text-[#00BCD4]">
                        🕵️‍♀️
                    </div>

                    <h2 className="font-fredoka font-bold text-5xl text-[#006064] mb-6">Uppdrag: Hitta AI!</h2>

                    <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                        Det finns massor av saker i det här rummet som har <strong>Artificiell Intelligens (AI)</strong>.
                        Kan du hitta alla <strong>{HIDDEN_ITEMS.length}</strong> saker?
                        <br /><br />
                        Klicka på sakerna för att lära dig hur de funkar!
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => speak("Det finns massor av saker i det här rummet som har Artificiell Intelligens. Kan du hitta alla 5 saker? Klicka på sakerna för att lära dig hur de funkar!")}
                            className={`
                                px-6 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-2
                                ${isSpeaking
                                    ? 'bg-[#E0F7FA] text-[#00BCD4] ring-2 ring-[#00BCD4]'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
                            `}
                        >
                            <Volume2 className={`w-6 h-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                            Lyssna
                        </button>

                        <button
                            onClick={() => {
                                stopSpeaking();
                                setGameStarted(true);
                            }}
                            className="px-10 py-4 rounded-2xl bg-[#00BCD4] text-white font-bold text-2xl hover:bg-[#00ACC1] shadow-[0_6px_0_#0097A7] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0097A7] transition-all flex items-center gap-3"
                        >
                            <span>Starta Uppdraget</span>
                            <ArrowRight className="w-8 h-8" />
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            stopSpeaking();
                            onClose();
                        }}
                        className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <div className="bg-[#E0F7FA] p-4 flex items-center justify-between border-b-4 border-[#4DD0E1]">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-[#00BCD4]">
                        <Search className="w-8 h-8" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 className="font-fredoka font-bold text-2xl text-[#006064]">Hitta AI-prylarna!</h2>
                        <p className="text-[#00838F] font-medium">Hitta alla {HIDDEN_ITEMS.length} saker som har AI.</p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        stopSpeaking();
                        onClose();
                    }}
                    className="p-3 rounded-full bg-white hover:bg-[#B2EBF2] text-[#006064] transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Checklist */}
                <div className="w-80 bg-white border-r border-gray-100 p-6 flex flex-col shadow-lg z-10">
                    <h3 className="font-fredoka font-bold text-xl text-gray-800 mb-6">Att hitta:</h3>
                    <div className="space-y-4 flex-1">
                        {HIDDEN_ITEMS.map(item => {
                            const isFound = foundItems.includes(item.id);
                            return (
                                <div
                                    key={item.id}
                                    className={`
                                        p-4 rounded-2xl border-2 transition-all duration-500
                                        ${isFound
                                            ? 'bg-[#E0F2F1] border-[#26A69A] opacity-50'
                                            : 'bg-gray-50 border-gray-100'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`
                                            w-10 h-10 rounded-full flex items-center justify-center text-xl
                                            ${isFound ? 'bg-[#26A69A] text-white' : 'bg-white shadow-sm'}
                                        `}>
                                            {isFound ? <CheckCircle2 className="w-6 h-6" /> : <HelpCircle className="w-6 h-6 text-gray-300" />}
                                        </div>
                                        <div>
                                            <span className={`font-bold block ${isFound ? 'text-[#004D40] line-through' : 'text-gray-700'}`}>
                                                {isFound ? item.name : '???'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                            <span>Hittade</span>
                            <span>{foundItems.length} / {HIDDEN_ITEMS.length}</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#26C6DA] transition-all duration-500 ease-out"
                                style={{ width: `${(foundItems.length / HIDDEN_ITEMS.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Game Area */}
                <div className="flex-1 bg-gray-100 relative overflow-hidden flex items-center justify-center p-8">
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white ring-4 ring-gray-200 cursor-crosshair group"
                        onClick={handleBackgroundClick}
                        data-bg="true"
                    >
                        {/* Placeholder Background Scene */}
                        <div className="absolute inset-0 bg-[#FFF3E0] pointer-events-none">
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FFE0B2]" /> {/* Floor */}
                            <div className="absolute top-20 left-20 w-40 h-40 bg-[#FFCC80] rounded-xl opacity-50" /> {/* Window */}
                            <div className="absolute bottom-20 right-40 w-60 h-32 bg-[#FFB74D] rounded-t-3xl opacity-50" /> {/* Sofa */}
                        </div>

                        {/* Hidden Items */}
                        {HIDDEN_ITEMS.map(item => {
                            const isFound = foundItems.includes(item.id);
                            return (
                                <button
                                    key={item.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleItemClick(item);
                                    }}
                                    disabled={isFound}
                                    className={`
                                        absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300
                                        ${isFound
                                            ? 'scale-125 z-20 cursor-default'
                                            : 'scale-100 hover:scale-110 opacity-0 hover:opacity-100 z-10' // Hidden until hovered
                                        }
                                    `}
                                    style={{ left: `${item.x}%`, top: `${item.y}%` }}
                                >
                                    <div className={`
                                        text-6xl filter drop-shadow-lg transition-all
                                        ${isFound ? 'animate-bounce' : 'grayscale opacity-80'}
                                    `}>
                                        {item.emoji}
                                    </div>
                                </button>
                            );
                        })}

                        {/* Educational Popup (Explanation) */}
                        {activeItem && (
                            <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-8 animate-in fade-in duration-200">
                                <div className="bg-white rounded-[2.5rem] p-8 max-w-lg w-full shadow-2xl border-8 border-[#26C6DA] animate-in zoom-in-95">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-6xl">{activeItem.emoji}</div>
                                        <div>
                                            <h3 className="font-fredoka font-bold text-3xl text-[#006064]">{activeItem.name}</h3>
                                            <p className="text-[#00ACC1] font-bold text-lg">{activeItem.description}</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#E0F7FA] p-6 rounded-2xl mb-8">
                                        <p className="text-[#006064] font-medium text-lg leading-relaxed">
                                            {activeItem.explanation}
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => speak(activeItem.explanation)}
                                            className={`
                                                flex-1 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
                                                ${isSpeaking
                                                    ? 'bg-[#B2EBF2] text-[#006064] ring-2 ring-[#00BCD4]'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }
                                            `}
                                        >
                                            <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                            Lyssna
                                        </button>
                                        <button
                                            onClick={handleCloseExplanation}
                                            className="flex-[2] py-4 rounded-xl bg-[#00BCD4] text-white font-bold text-lg hover:bg-[#00ACC1] shadow-[0_4px_0_#0097A7] hover:translate-y-[2px] hover:shadow-[0_2px_0_#0097A7] transition-all"
                                        >
                                            Jag fattar!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white rounded-[3rem] p-12 max-w-2xl w-full text-center shadow-2xl border-8 border-[#FFCA28] animate-in zoom-in-95">
                        <div className="w-32 h-32 bg-[#FFF8E1] rounded-full flex items-center justify-center mx-auto mb-8 text-6xl shadow-inner">
                            🏆
                        </div>
                        <h2 className="font-fredoka font-bold text-5xl text-[#FF6F00] mb-4">Bra jobbat!</h2>
                        <p className="text-xl text-gray-600 mb-8 font-medium">
                            Du hittade alla {HIDDEN_ITEMS.length} AI-prylar! Nu vet du att AI finns nästan överallt hemma.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={resetGame}
                                className="px-8 py-4 rounded-2xl bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                <RefreshCcw className="w-5 h-5" />
                                Spela igen
                            </button>
                            <button
                                onClick={() => {
                                    stopSpeaking();
                                    onClose();
                                }}
                                className="px-8 py-4 rounded-2xl bg-[#00BCD4] text-white font-bold text-lg hover:bg-[#00ACC1] shadow-[0_4px_0_#0097A7] hover:translate-y-[2px] hover:shadow-[0_2px_0_#0097A7] transition-all"
                            >
                                Tillbaka till övningar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
