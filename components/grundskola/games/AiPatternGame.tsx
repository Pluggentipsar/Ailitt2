"use client";

import { useState, useEffect } from "react";
import { X, Volume2, ArrowRight, RefreshCcw, Star, CheckCircle2, HelpCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface AiPatternGameProps {
    onClose: () => void;
}

interface PatternItem {
    id: string;
    content: string; // Emoji
    color: string;
}

interface Level {
    id: number;
    sequence: (PatternItem | null)[];
    options: PatternItem[];
    correctAnswerId: string;
    explanation: string;
    patternType: string;
}

const LEVELS: Level[] = [
    {
        id: 1,
        patternType: "ABAB - Enkel",
        sequence: [
            { id: 'r1', content: '🔴', color: 'bg-red-100' },
            { id: 'b1', content: '🔵', color: 'bg-blue-100' },
            { id: 'r2', content: '🔴', color: 'bg-red-100' },
            { id: 'b2', content: '🔵', color: 'bg-blue-100' },
            { id: 'r3', content: '🔴', color: 'bg-red-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '🔵', color: 'bg-blue-100' },
            { id: 'opt2', content: '🟢', color: 'bg-green-100' },
            { id: 'opt3', content: '🟡', color: 'bg-yellow-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Röd, Blå, Röd, Blå... Efter röd kommer blå! Det är ett varannan-mönster."
    },
    {
        id: 2,
        patternType: "AABB - Dubbel",
        sequence: [
            { id: 'c1', content: '🐱', color: 'bg-orange-100' },
            { id: 'c2', content: '🐱', color: 'bg-orange-100' },
            { id: 'd1', content: '🐶', color: 'bg-amber-100' },
            { id: 'd2', content: '🐶', color: 'bg-amber-100' },
            { id: 'c3', content: '🐱', color: 'bg-orange-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '🐶', color: 'bg-amber-100' },
            { id: 'opt2', content: '🐱', color: 'bg-orange-100' },
            { id: 'opt3', content: '🐭', color: 'bg-gray-100' }
        ],
        correctAnswerId: 'opt2',
        explanation: "Två katter, två hundar, två katter... Då ska det vara en katt till!"
    },
    {
        id: 3,
        patternType: "ABC - Tre i rad",
        sequence: [
            { id: 'sq', content: '🟥', color: 'bg-red-100' },
            { id: 'tr', content: '🔺', color: 'bg-red-100' },
            { id: 'ci', content: '🔴', color: 'bg-red-100' },
            { id: 'sq2', content: '🟥', color: 'bg-red-100' },
            { id: 'tr2', content: '🔺', color: 'bg-red-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '🔴', color: 'bg-red-100' },
            { id: 'opt2', content: '🟥', color: 'bg-red-100' },
            { id: 'opt3', content: '🔺', color: 'bg-red-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Fyrkant, triangel, cirkel. Fyrkant, triangel... Cirkel! Tre former som byter plats."
    },
    {
        id: 4,
        patternType: "Siffror - Hopp",
        sequence: [
            { id: 'n1', content: '2️⃣', color: 'bg-emerald-100' },
            { id: 'n2', content: '4️⃣', color: 'bg-emerald-100' },
            { id: 'n3', content: '6️⃣', color: 'bg-emerald-100' },
            { id: 'n4', content: '8️⃣', color: 'bg-emerald-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '🔟', color: 'bg-emerald-100' },
            { id: 'opt2', content: '9️⃣', color: 'bg-emerald-100' },
            { id: 'opt3', content: '5️⃣', color: 'bg-emerald-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "2, 4, 6, 8... Vi hoppar två steg varje gång. Nästa tal är 10!"
    },
    {
        id: 5,
        patternType: "Ljud - Musik",
        sequence: [
            { id: 's1', content: '🥁', color: 'bg-purple-100' },
            { id: 's2', content: '👏', color: 'bg-yellow-100' },
            { id: 's3', content: '👏', color: 'bg-yellow-100' },
            { id: 's4', content: '🥁', color: 'bg-purple-100' },
            { id: 's5', content: '👏', color: 'bg-yellow-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '👏', color: 'bg-yellow-100' },
            { id: 'opt2', content: '🥁', color: 'bg-purple-100' },
            { id: 'opt3', content: '🎺', color: 'bg-orange-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Trumma, klapp, klapp. Trumma, klapp... Klapp! En rytm som upprepas."
    },
    {
        id: 6,
        patternType: "Storlek - Växande",
        sequence: [
            { id: 'st1', content: '⭐', color: 'bg-yellow-50' },
            { id: 'st2', content: '🌟', color: 'bg-yellow-100' },
            { id: 'st3', content: '✨', color: 'bg-yellow-200' },
            { id: 'st4', content: '⭐', color: 'bg-yellow-50' },
            { id: 'st5', content: '🌟', color: 'bg-yellow-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '✨', color: 'bg-yellow-200' },
            { id: 'opt2', content: '⭐', color: 'bg-yellow-50' },
            { id: 'opt3', content: '🌟', color: 'bg-yellow-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Liten, mellan, stor. Liten, mellan... Stor! Stjärnorna växer i ett mönster."
    },
    {
        id: 7,
        patternType: "ABCABC - Komplex",
        sequence: [
            { id: 'f1', content: '🍎', color: 'bg-red-100' },
            { id: 'f2', content: '🍌', color: 'bg-yellow-100' },
            { id: 'f3', content: '🍊', color: 'bg-orange-100' },
            { id: 'f4', content: '🍎', color: 'bg-red-100' },
            { id: 'f5', content: '🍌', color: 'bg-yellow-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '🍊', color: 'bg-orange-100' },
            { id: 'opt2', content: '🍎', color: 'bg-red-100' },
            { id: 'opt3', content: '🍌', color: 'bg-yellow-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Äpple, banan, apelsin. Äpple, banan... Apelsin! En frukt-sekvens som upprepas."
    },
    {
        id: 8,
        patternType: "AABBAABB - Svår",
        sequence: [
            { id: 'h1', content: '❤️', color: 'bg-pink-100' },
            { id: 'h2', content: '❤️', color: 'bg-pink-100' },
            { id: 'h3', content: '💙', color: 'bg-blue-100' },
            { id: 'h4', content: '💙', color: 'bg-blue-100' },
            { id: 'h5', content: '❤️', color: 'bg-pink-100' },
            { id: 'h6', content: '❤️', color: 'bg-pink-100' },
            { id: 'h7', content: '💙', color: 'bg-blue-100' },
            null
        ],
        options: [
            { id: 'opt1', content: '💙', color: 'bg-blue-100' },
            { id: 'opt2', content: '❤️', color: 'bg-pink-100' },
            { id: 'opt3', content: '💚', color: 'bg-green-100' }
        ],
        correctAnswerId: 'opt1',
        explanation: "Två röda, två blå, två röda, två blå... Det ska vara ett blått hjärta till!"
    }
];

export function AiPatternGame({ onClose }: AiPatternGameProps) {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameComplete, setGameComplete] = useState(false);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [draggedItem, setDraggedItem] = useState<PatternItem | null>(null);
    const [placedItem, setPlacedItem] = useState<PatternItem | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const currentLevel = LEVELS[currentLevelIndex];

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

    const handleDragStart = (e: React.DragEvent, item: PatternItem) => {
        setDraggedItem(item);
        e.dataTransfer.setData('text/plain', item.id);
        e.dataTransfer.effectAllowed = 'copy';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (!draggedItem) return;

        setPlacedItem(draggedItem);
        checkAnswer(draggedItem);
        setDraggedItem(null);
    };

    const checkAnswer = (item: PatternItem) => {
        const correct = item.id === currentLevel.correctAnswerId;
        setIsCorrect(correct);
        setShowExplanation(true);

        if (correct) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#FFA500', '#FF4500']
            });
            speak(`Rätt! ${currentLevel.explanation}`);
        } else {
            speak("Inte riktigt. Försök igen!");
            setTimeout(() => {
                setPlacedItem(null);
                setIsCorrect(null);
                setShowExplanation(false);
            }, 2000);
        }
    };

    const nextLevel = () => {
        stopSpeaking();
        if (currentLevelIndex < LEVELS.length - 1) {
            setCurrentLevelIndex(prev => prev + 1);
            setPlacedItem(null);
            setIsCorrect(null);
            setShowExplanation(false);
        } else {
            // Game Complete
            setPlacedItem(null);
            setIsCorrect(null);
            setShowExplanation(false);
            setGameComplete(true);

            // Wait a bit before speaking the completion message
            setTimeout(() => {
                const completionMessage = `Fantastiskt! Du har klarat alla åtta nivåer! Du är en riktig mönster-mästare! Visste du att precis det du just gjorde, är samma sak som en AI gör när den lär sig? En AI tittar på många exempel, hittar mönster, och gör sedan gissningar om vad som kommer härnäst. Precis som du gjorde! När en AI tränas, visar vi den tusentals exempel, och den letar efter mönster. Du har tränat din hjärna att hitta mönster, precis som vi tränar en AI. Bra jobbat!`;
                speak(completionMessage);
            }, 500);

            confetti({
                particleCount: 200,
                spread: 160,
                origin: { y: 0.5 },
                colors: ['#FFD700', '#FFA500', '#FF4500', '#FF69B4', '#00CED1']
            });
        }
    };

    // Game Complete Screen
    if (gameComplete) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 flex items-center justify-center p-4 animate-in fade-in duration-500 font-fredoka overflow-y-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] max-w-5xl w-full p-8 sm:p-12 shadow-2xl border border-white/20 text-center relative overflow-hidden my-8">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

                    <div className="relative z-10">
                        {/* Trophy Animation */}
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(255,215,0,0.6)] animate-bounce">
                            <span className="text-8xl">🏆</span>
                        </div>

                        <h2 className="font-black text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-orange-200 mb-6 drop-shadow-lg">
                            Fantastiskt jobbat!
                        </h2>

                        <p className="text-2xl sm:text-3xl text-white font-bold mb-8 drop-shadow-md">
                            Du klarade alla {LEVELS.length} nivåer! 🎉
                        </p>

                        {/* Achievement Stars */}
                        <div className="flex justify-center gap-3 mb-10">
                            {[...Array(LEVELS.length)].map((_, i) => (
                                <Star key={i} className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 fill-yellow-300 animate-in zoom-in duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                            ))}
                        </div>

                        {/* AI Connection Explanation */}
                        <div className="bg-white/20 backdrop-blur-md rounded-[2rem] p-6 sm:p-10 mb-8 border-4 border-white/30 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="text-6xl">🤖</span>
                                <span className="text-6xl">❤️</span>
                                <span className="text-6xl">🧠</span>
                            </div>

                            <h3 className="font-black text-3xl sm:text-4xl text-white mb-6 drop-shadow-md">
                                Visste du detta?
                            </h3>

                            <div className="space-y-6 text-left">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                    <p className="text-xl sm:text-2xl text-white/95 font-bold leading-relaxed font-nunito">
                                        <span className="text-3xl mr-3">✨</span>
                                        Precis det du just gjorde är <span className="text-yellow-300">samma sak som en AI gör</span> när den lär sig!
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                    <p className="text-xl sm:text-2xl text-white/95 font-bold leading-relaxed font-nunito">
                                        <span className="text-3xl mr-3">🔍</span>
                                        En AI tittar på många exempel, <span className="text-yellow-300">hittar mönster</span>, och gör sedan gissningar om vad som kommer härnäst.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                                    <p className="text-xl sm:text-2xl text-white/95 font-bold leading-relaxed font-nunito">
                                        <span className="text-3xl mr-3">🎯</span>
                                        När en AI tränas, visar vi den <span className="text-yellow-300">tusentals exempel</span>, och den letar efter mönster - precis som du gjorde!
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300/50">
                                    <p className="text-xl sm:text-2xl text-white font-black leading-relaxed font-nunito">
                                        <span className="text-3xl mr-3">🌟</span>
                                        Du har tränat din hjärna att hitta mönster, <span className="text-yellow-300">precis som vi tränar en AI!</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => {
                                    const message = "Fantastiskt! Du har klarat alla åtta nivåer! Du är en riktig mönster-mästare! Visste du att precis det du just gjorde, är samma sak som en AI gör när den lär sig? En AI tittar på många exempel, hittar mönster, och gör sedan gissningar om vad som kommer härnäst. Precis som du gjorde! När en AI tränas, visar vi den tusentals exempel, och den letar efter mönster. Du har tränat din hjärna att hitta mönster, precis som vi tränar en AI. Bra jobbat!";
                                    speak(message);
                                }}
                                className={`
                                    px-8 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3
                                    ${isSpeaking
                                        ? 'bg-white text-green-600 ring-4 ring-yellow-400 scale-105'
                                        : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                                    }
                                `}
                            >
                                <Volume2 className={`w-7 h-7 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                {isSpeaking ? 'Lyssnar...' : 'Lyssna på förklaringen'}
                            </button>

                            <button
                                onClick={() => {
                                    stopSpeaking();
                                    setGameComplete(false);
                                    setGameStarted(false);
                                    setCurrentLevelIndex(0);
                                }}
                                className="px-8 py-5 rounded-2xl bg-white/20 text-white hover:bg-white/30 font-bold text-xl transition-all flex items-center gap-3 hover:scale-105 border-2 border-white/30"
                            >
                                <RefreshCcw className="w-7 h-7" />
                                Spela igen
                            </button>

                            <button
                                onClick={() => {
                                    stopSpeaking();
                                    onClose();
                                }}
                                className="px-12 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-2xl hover:from-yellow-300 hover:to-orange-400 shadow-[0_0_30px_rgba(255,165,0,0.5)] hover:shadow-[0_0_50px_rgba(255,165,0,0.7)] hover:scale-105 transition-all flex items-center gap-4"
                            >
                                Avsluta
                                <CheckCircle2 className="w-8 h-8" />
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

    // Intro Screen
    if (!gameStarted) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-violet-900 via-fuchsia-900 to-purple-900 flex items-center justify-center p-4 animate-in fade-in duration-500 font-fredoka">
                <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] max-w-4xl w-full p-12 shadow-2xl border border-white/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

                    <div className="relative z-10">
                        <div className="w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,215,0,0.4)] animate-pulse">
                            <Star className="w-20 h-20 text-white fill-white" />
                        </div>

                        <h2 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-orange-200 mb-6 drop-shadow-sm">
                            Mönster-leken
                        </h2>

                        <p className="text-2xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md font-nunito">
                            Kan du gissa vad som kommer härnäst?
                            <br />
                            AI älskar mönster. Hjälp Gnista att fylla i de tomma rutorna!
                        </p>

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => speak("Kan du gissa vad som kommer härnäst? AI älskar mönster. Hjälp Gnista att fylla i de tomma rutorna!")}
                                className={`
                                    px-8 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3
                                    ${isSpeaking
                                        ? 'bg-white/20 text-white ring-2 ring-yellow-400'
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
                                className="px-12 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-2xl hover:from-yellow-300 hover:to-orange-400 shadow-[0_0_30px_rgba(255,165,0,0.5)] hover:shadow-[0_0_50px_rgba(255,165,0,0.7)] hover:scale-105 transition-all flex items-center gap-4 group"
                            >
                                <span>Starta</span>
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
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
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white shadow-lg">
                        <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-white tracking-wide">Mönsterleken</h2>
                        <p className="text-yellow-300 font-medium font-nunito">Nivå {currentLevel.id} av {LEVELS.length}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => speak("Dra rätt figur till den tomma rutan för att göra klart mönstret.")}
                        className={`
                            p-3 rounded-full transition-all
                            ${isSpeaking ? 'bg-yellow-500/20 text-yellow-300 ring-2 ring-yellow-500' : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'}
                        `}
                    >
                        <Volume2 className="w-7 h-7" />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-3 rounded-full bg-slate-700 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-all"
                    >
                        <X className="w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Game Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Question Area */}
                <div className="w-full max-w-5xl mb-12">
                    <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 min-h-[160px]">
                            {currentLevel.sequence.map((item, idx) => {
                                if (item === null) {
                                    // Drop Zone
                                    return (
                                        <div
                                            key={`drop-${idx}`}
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            className={`
                                                w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-4 border-dashed flex items-center justify-center transition-all duration-300
                                                ${placedItem
                                                    ? (isCorrect ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20')
                                                    : 'border-yellow-400/50 bg-yellow-400/10 animate-pulse'
                                                }
                                            `}
                                        >
                                            {placedItem ? (
                                                <div className="text-6xl sm:text-7xl animate-in zoom-in duration-300 drop-shadow-xl">
                                                    {placedItem.content}
                                                </div>
                                            ) : (
                                                <HelpCircle className="w-12 h-12 text-yellow-400/50" />
                                            )}
                                        </div>
                                    );
                                }
                                return (
                                    <div
                                        key={item.id}
                                        className={`
                                            w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105
                                            ${item.color}
                                        `}
                                    >
                                        <div className="text-6xl sm:text-7xl drop-shadow-md">{item.content}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Options Area */}
                <div className="flex gap-6 sm:gap-12">
                    {currentLevel.options.map((option) => (
                        <div
                            key={option.id}
                            draggable={!placedItem}
                            onDragStart={(e) => handleDragStart(e, option)}
                            className={`
                                w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-grab active:cursor-grabbing transition-all duration-300 border-b-8 border-black/10
                                ${option.color}
                                ${placedItem ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:-translate-y-2 hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)]'}
                            `}
                        >
                            <div className="text-6xl sm:text-7xl drop-shadow-md">{option.content}</div>
                        </div>
                    ))}
                </div>

                {/* Explanation / Next Level Modal */}
                {showExplanation && isCorrect && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl animate-in slide-in-from-bottom-10 duration-500">
                        <div className="bg-white rounded-[2rem] p-6 shadow-2xl border-4 border-green-400 flex flex-col sm:flex-row items-center gap-6">
                            <div className="bg-green-100 p-4 rounded-full shrink-0">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl font-bold text-green-700 mb-1">Rätt svar!</h3>
                                <p className="text-lg text-slate-600 font-nunito font-medium">{currentLevel.explanation}</p>
                            </div>
                            <button
                                onClick={nextLevel}
                                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                                Nästa
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
