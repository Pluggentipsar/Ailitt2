"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Volume2, RefreshCcw, ArrowRight, Info, Sparkles, Box, Cpu } from "lucide-react";
import confetti from "canvas-confetti";

interface AiSortingGameProps {
    onClose: () => void;
}

type ItemType = 'AI' | 'NOT_AI';

interface SortableItem {
    id: string;
    name: string;
    emoji: string;
    type: ItemType;
    explanation: string;
}

const ITEMS: SortableItem[] = [
    // AI Items
    {
        id: 'robot-vacuum',
        name: 'Robotdammsugare',
        emoji: '🧹',
        type: 'AI',
        explanation: 'Den har lärt sig hur ditt hem ser ut. Den använder kameror för att "se" och bestämma vägen själv.'
    },
    {
        id: 'smartphone',
        name: 'Ansiktslås',
        emoji: '📱',
        type: 'AI',
        explanation: 'Telefonen har tränat på tusentals ansikten för att känna igen just ditt. Den lär sig även om du skaffar glasögon!'
    },
    {
        id: 'smart-speaker',
        name: 'Smart Högtalare',
        emoji: '🔊',
        type: 'AI',
        explanation: 'Den har tränat på att förstå mänskligt tal. Den gissar vad du säger och letar upp svaret.'
    },
    {
        id: 'streaming',
        name: 'Film-tips',
        emoji: '📺',
        type: 'AI',
        explanation: 'Netflix lär sig vad du gillar. Om du tittar på action, förstår AI:n det och tipsar om mer action.'
    },
    {
        id: 'filter',
        name: 'Kamerafilter',
        emoji: '✨',
        type: 'AI',
        explanation: 'Filtret vet var dina ögon och mun är för att den har sett massor av ansikten förut.'
    },
    {
        id: 'translation',
        name: 'Översättare',
        emoji: '🌐',
        type: 'AI',
        explanation: 'Den översätter inte ord-för-ord, utan har lärt sig hur språk hänger ihop genom att läsa massor av text.'
    },
    {
        id: 'chatbot',
        name: 'Chatbot',
        emoji: '💬',
        type: 'AI',
        explanation: 'Den har lärt sig att skriva genom att läsa nästan allt på internet. Den gissar vilket ord som passar bäst härnäst.'
    },
    {
        id: 'image-gen',
        name: 'Bildskapare',
        emoji: '🎨',
        type: 'AI',
        explanation: 'Den har tittat på miljontals bilder och lärt sig hur man ritar en "katt" eller "rymdraket" från grunden.'
    },

    // Not AI Items
    {
        id: 'toaster',
        name: 'Brödrost',
        emoji: '🍞',
        type: 'NOT_AI',
        explanation: 'Den följer bara en enkel regel: "Värm i 2 minuter". Den lär sig inte hur du vill ha brödet.'
    },
    {
        id: 'bicycle',
        name: 'Cykel',
        emoji: '🚲',
        type: 'NOT_AI',
        explanation: 'Du bestämmer allt. Cykeln tänker inte och gör inga egna val.'
    },
    {
        id: 'calculator',
        name: 'Miniräknare',
        emoji: '🧮',
        type: 'NOT_AI',
        explanation: 'Den är supersnabb på matte, men den följer bara regler. Den kan inte lära sig nya saker själv.'
    },
    {
        id: 'traffic-light',
        name: 'Trafikljus',
        emoji: '🚦',
        type: 'NOT_AI',
        explanation: 'Det byter färg på en bestämd tid. Det ser inte om det kommer bilar (oftast).'
    },
    {
        id: 'microwave',
        name: 'Mikrovågsugn',
        emoji: '👋',
        type: 'NOT_AI',
        explanation: 'Den värmer maten, men den vet inte vad "mat" är. Den gör bara exakt det du trycker in.'
    },
    {
        id: 'book',
        name: 'Bok',
        emoji: '📖',
        type: 'NOT_AI',
        explanation: 'Texten är alltid densamma. Boken ändrar sig inte efter vem som läser.'
    },
];

export function AiSortingGame({ onClose }: AiSortingGameProps) {
    const [gameStarted, setGameStarted] = useState(false);
    const [items, setItems] = useState<SortableItem[]>([]);
    const [aiBox, setAiBox] = useState<SortableItem[]>([]);
    const [notAiBox, setNotAiBox] = useState<SortableItem[]>([]);
    const [draggedItem, setDraggedItem] = useState<SortableItem | null>(null);
    const [isChecking, setIsChecking] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [score, setScore] = useState(0);
    const [explanationItem, setExplanationItem] = useState<SortableItem | null>(null);

    // Initialize items randomly, pick 10 random items
    useEffect(() => {
        const shuffled = [...ITEMS].sort(() => Math.random() - 0.5).slice(0, 10);
        setItems(shuffled);
    }, []);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sv-SE';
            utterance.rate = 0.9;
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

    const handleDragStart = (e: React.DragEvent, item: SortableItem) => {
        setDraggedItem(item);
        e.dataTransfer.setData('text/plain', item.id);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent, targetZone: 'AI' | 'NOT_AI') => {
        e.preventDefault();
        if (!draggedItem) return;

        // Remove from all lists first
        const newItems = items.filter(i => i.id !== draggedItem.id);
        const newAiBox = aiBox.filter(i => i.id !== draggedItem.id);
        const newNotAiBox = notAiBox.filter(i => i.id !== draggedItem.id);

        // Add to target
        if (targetZone === 'AI') {
            setAiBox([...newAiBox, draggedItem]);
            setItems(newItems);
            setNotAiBox(newNotAiBox);
        } else if (targetZone === 'NOT_AI') {
            setNotAiBox([...newNotAiBox, draggedItem]);
            setItems(newItems);
            setAiBox(newAiBox);
        } else {
            setItems([...newItems, draggedItem]);
            setAiBox(newAiBox);
            setNotAiBox(newNotAiBox);
        }

        setDraggedItem(null);
    };

    const checkAnswers = () => {
        setIsChecking(true);
        let correctCount = 0;

        aiBox.forEach(item => {
            if (item.type === 'AI') correctCount++;
        });
        notAiBox.forEach(item => {
            if (item.type === 'NOT_AI') correctCount++;
        });

        setScore(correctCount);
        const total = aiBox.length + notAiBox.length;

        if (correctCount === total && items.length === 0) {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#00E5FF', '#76FF03', '#FFD600']
            });
            speak("Fantastiskt! Du sorterade alla rätt! Klicka på korten för att se varför de är AI eller inte.");
        } else {
            speak(`Du fick ${correctCount} rätt. Klicka på korten för att se facit och förklaringar.`);
        }

        setShowResults(true);
    };

    const resetGame = () => {
        stopSpeaking();
        const shuffled = [...ITEMS].sort(() => Math.random() - 0.5).slice(0, 10);
        setItems(shuffled);
        setAiBox([]);
        setNotAiBox([]);
        setIsChecking(false);
        setShowResults(false);
        setScore(0);
        setExplanationItem(null);
    };

    // Intro Screen
    if (!gameStarted) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 flex items-center justify-center p-4 animate-in fade-in duration-500">
                <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] max-w-4xl w-full p-12 shadow-2xl border border-white/20 text-center relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-700" />

                    <div className="relative z-10">
                        <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce">
                            <span className="text-7xl drop-shadow-md">🧠</span>
                        </div>

                        <h2 className="font-fredoka font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 mb-6 drop-shadow-sm">
                            AI eller Inte AI?
                        </h2>

                        <p className="text-2xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                            Ditt uppdrag är att sortera sakerna.
                            <br />
                            Vilka saker har en <span className="text-cyan-300 font-bold">digital hjärna</span> och vilka följer bara <span className="text-orange-300 font-bold">enkla regler</span>?
                        </p>

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => speak("Ditt uppdrag är att sortera sakerna. Vilka saker har en digital hjärna, alltså AI, och vilka följer bara enkla regler?")}
                                className={`
                                    px-8 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3
                                    ${isSpeaking
                                        ? 'bg-white/20 text-white ring-2 ring-cyan-400'
                                        : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                                    }
                                `}
                            >
                                <Volume2 className={`w-7 h-7 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                Lyssna
                            </button>

                            <button
                                onClick={() => {
                                    stopSpeaking();
                                    setGameStarted(true);
                                }}
                                className="px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] hover:scale-105 transition-all flex items-center gap-4 group"
                            >
                                <span>Starta Spelet</span>
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            stopSpeaking();
                            onClose();
                        }}
                        className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col animate-in fade-in duration-300 font-fredoka">
            {/* Header */}
            <div className="bg-slate-800/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-slate-700 shadow-lg z-20">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-lg">
                        <RefreshCcw className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-white tracking-wide">Sortera Sakerna</h2>
                        <p className="text-cyan-300 font-medium">
                            {isChecking ? "Klicka på korten för att se svaret!" : "Dra sakerna till rätt zon!"}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => speak("Dra sakerna från mitten till rätt zon. Blå zon för AI, Orange zon för Inte AI.")}
                        className={`
                            p-3 rounded-full transition-all
                            ${isSpeaking ? 'bg-cyan-500/20 text-cyan-300 ring-2 ring-cyan-500' : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'}
                        `}
                    >
                        <Volume2 className="w-7 h-7" />
                    </button>
                    <button
                        onClick={() => {
                            stopSpeaking();
                            onClose();
                        }}
                        className="p-3 rounded-full bg-slate-700 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-all"
                    >
                        <X className="w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Game Area */}
            <div className="flex-1 flex overflow-hidden relative">

                {/* Background Split */}
                <div className="absolute inset-0 flex pointer-events-none">
                    <div className="w-1/2 h-full bg-gradient-to-br from-orange-900/20 to-amber-900/20 border-r border-white/5" />
                    <div className="w-1/2 h-full bg-gradient-to-bl from-cyan-900/20 to-blue-900/20 border-l border-white/5" />
                </div>

                {/* NOT AI Zone (Left) */}
                <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, 'NOT_AI')}
                    className={`
                        flex-1 p-6 transition-all duration-300 flex flex-col relative z-10
                        ${isChecking ? '' : 'hover:bg-orange-500/5'}
                    `}
                >
                    <div className={`
                        rounded-[2rem] border-4 border-dashed h-full flex flex-col transition-all duration-300
                        ${isChecking
                            ? 'border-slate-600 bg-slate-800/50'
                            : 'border-orange-500/30 bg-orange-500/10 hover:border-orange-400 hover:shadow-[0_0_50px_rgba(249,115,22,0.1)]'
                        }
                    `}>
                        <div className="p-6 text-center border-b border-orange-500/20 bg-orange-500/5 rounded-t-[1.8rem]">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg mb-3 transform -rotate-3">
                                <Box className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-black text-3xl text-orange-400 uppercase tracking-wider drop-shadow-sm">Inte AI</h3>
                            <p className="text-orange-300/80 font-bold text-sm uppercase tracking-widest mt-1">Analogt & Enkelt</p>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto content-start grid grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-orange-500/20 scrollbar-track-transparent">
                            {notAiBox.map(item => (
                                <DraggableCard
                                    key={item.id}
                                    item={item}
                                    isChecking={isChecking}
                                    correctZone="NOT_AI"
                                    onSpeak={speak}
                                    onShowExplanation={setExplanationItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Item Pool (Center) */}
                <div className="w-80 flex flex-col items-center justify-center gap-6 relative z-20 py-8">
                    {items.length > 0 ? (
                        <>
                            <div className="text-center">
                                <p className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-2">Kvar att sortera</p>
                                <div className="text-5xl font-black text-white drop-shadow-lg">{items.length}</div>
                            </div>

                            <div className="relative group cursor-grab active:cursor-grabbing perspective-1000">
                                {/* Stack effect cards behind */}
                                {items.length > 1 && (
                                    <div className="absolute top-2 left-2 w-full h-full bg-slate-700 rounded-3xl border-4 border-slate-600 shadow-xl -z-10 transform rotate-3 scale-95 opacity-50" />
                                )}
                                {items.length > 2 && (
                                    <div className="absolute top-4 left-4 w-full h-full bg-slate-800 rounded-3xl border-4 border-slate-700 shadow-xl -z-20 transform -rotate-2 scale-90 opacity-30" />
                                )}

                                <div
                                    className="w-64 aspect-[3/4] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-8 border-r-8 border-slate-200 flex flex-col items-center justify-center p-6 transform transition-all hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, items[0])}
                                >
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-8xl drop-shadow-xl filter">{items[0].emoji}</div>
                                    </div>
                                    <div className="w-full pt-6 border-t-2 border-slate-100">
                                        <div className="font-black text-2xl text-slate-800 text-center">{items[0].name}</div>
                                        <div className="text-slate-400 text-center text-xs font-bold uppercase tracking-wider mt-2">Dra till rätt zon</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        !isChecking && (
                            <button
                                onClick={checkAnswers}
                                className="w-full max-w-[200px] py-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-2xl hover:from-green-400 hover:to-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] hover:scale-105 transition-all animate-bounce flex flex-col items-center"
                            >
                                <span>Kontrollera!</span>
                                <span className="text-sm font-normal opacity-80 mt-1">Är du klar?</span>
                            </button>
                        )
                    )}

                    {isChecking && (
                        <button
                            onClick={resetGame}
                            className="px-8 py-4 rounded-2xl bg-slate-700 text-white font-bold text-xl hover:bg-slate-600 shadow-lg transition-all flex items-center justify-center gap-3 hover:scale-105"
                        >
                            <RefreshCcw className="w-6 h-6" />
                            Spela igen
                        </button>
                    )}
                </div>

                {/* AI Zone (Right) */}
                <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, 'AI')}
                    className={`
                        flex-1 p-6 transition-all duration-300 flex flex-col relative z-10
                        ${isChecking ? '' : 'hover:bg-cyan-500/5'}
                    `}
                >
                    <div className={`
                        rounded-[2rem] border-4 border-dashed h-full flex flex-col transition-all duration-300
                        ${isChecking
                            ? 'border-slate-600 bg-slate-800/50'
                            : 'border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.1)]'
                        }
                    `}>
                        <div className="p-6 text-center border-b border-cyan-500/20 bg-cyan-500/5 rounded-t-[1.8rem]">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-3 transform rotate-3">
                                <Cpu className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-black text-3xl text-cyan-400 uppercase tracking-wider drop-shadow-sm">AI</h3>
                            <p className="text-cyan-300/80 font-bold text-sm uppercase tracking-widest mt-1">Smart & Lärande</p>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto content-start grid grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
                            {aiBox.map(item => (
                                <DraggableCard
                                    key={item.id}
                                    item={item}
                                    isChecking={isChecking}
                                    correctZone="AI"
                                    onSpeak={speak}
                                    onShowExplanation={setExplanationItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Explanation Modal */}
            {explanationItem && (
                <div className="fixed inset-0 z-[10000] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 shadow-2xl animate-in zoom-in-95 duration-300 relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-3 ${explanationItem.type === 'AI' ? 'bg-cyan-500' : 'bg-orange-500'}`} />

                        <div className="text-center">
                            <div className="text-8xl mb-6 filter drop-shadow-lg animate-bounce">{explanationItem.emoji}</div>
                            <h3 className="font-black text-4xl text-slate-800 mb-2">{explanationItem.name}</h3>
                            <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 ${explanationItem.type === 'AI' ? 'bg-cyan-100 text-cyan-700' : 'bg-orange-100 text-orange-700'}`}>
                                {explanationItem.type === 'AI' ? 'Är AI 🤖' : 'Inte AI 📦'}
                            </div>

                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                                {explanationItem.explanation}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => speak(explanationItem.explanation)}
                                    className="flex-1 py-4 rounded-xl bg-slate-100 text-slate-700 font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Volume2 className="w-6 h-6" />
                                    Lyssna
                                </button>
                                <button
                                    onClick={() => {
                                        stopSpeaking();
                                        setExplanationItem(null);
                                    }}
                                    className={`flex-1 py-4 rounded-xl font-bold text-lg text-white transition-colors shadow-lg hover:scale-105 active:scale-95 ${explanationItem.type === 'AI' ? 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30' : 'bg-orange-500 hover:bg-orange-400 shadow-orange-500/30'}`}
                                >
                                    Jag förstår!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DraggableCard({ item, isChecking, correctZone, onSpeak, onShowExplanation }: { item: SortableItem, isChecking: boolean, correctZone: ItemType, onSpeak: (text: string) => void, onShowExplanation: (item: SortableItem) => void }) {
    const isCorrect = item.type === correctZone;

    return (
        <div
            className={`
                bg-white p-4 rounded-2xl shadow-lg border-b-4 relative group transition-all duration-300 transform
                ${isChecking
                    ? (isCorrect
                        ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-100 cursor-pointer hover:scale-105'
                        : 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] opacity-90 grayscale-[0.5] cursor-pointer hover:scale-105 hover:grayscale-0 hover:opacity-100')
                    : 'border-slate-200 hover:-translate-y-1 hover:shadow-xl'
                }
            `}
            onClick={() => {
                if (isChecking) onShowExplanation(item);
            }}
        >
            <div className="text-5xl mb-3 text-center filter drop-shadow-md">{item.emoji}</div>
            <div className="font-bold text-center text-slate-800 text-sm leading-tight">{item.name}</div>

            {isChecking && (
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md">
                    {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-100" />
                    ) : (
                        <AlertCircle className="w-6 h-6 text-red-500 fill-red-100 animate-pulse" />
                    )}
                </div>
            )}

            {isChecking && (
                <div className="absolute top-2 left-2 animate-pulse">
                    <Info className="w-4 h-4 text-slate-400" />
                </div>
            )}
        </div>
    );
}
