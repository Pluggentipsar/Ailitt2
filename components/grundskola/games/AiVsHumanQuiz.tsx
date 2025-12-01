"use client";

import { useState, useEffect } from "react";
import { Bot, User, X, CheckCircle2, XCircle, ArrowRight, RefreshCw, Drama, Sparkles, BrainCircuit, Heart } from "lucide-react";
import confetti from 'canvas-confetti';

interface Question {
    id: number;
    text: string;
    validAnswers: ('AI' | 'HUMAN' | 'SIMULATE')[];
    explanation: string;
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "Sortera 1 000 bilder supersnabbt",
        validAnswers: ['AI'],
        explanation: "AI är jättebra på att räkna och hitta mönster i massor av bilder samtidigt. En människa skulle behöva flera dagar!"
    },
    {
        id: 2,
        text: "Förstå att någon är ledsen utan att de säger något",
        validAnswers: ['HUMAN'],
        explanation: "Bara människor kan känna empati och förstå känslor på riktigt. AI kan se tårar, men förstår inte känslan."
    },
    {
        id: 3,
        text: "Skriva en text som låter klok och snäll",
        validAnswers: ['SIMULATE', 'HUMAN'],
        explanation: "Båda kan! Men AI härmar bara snällhet från andra texter den läst. Människor menar det på riktigt."
    },
    {
        id: 4,
        text: "Känna doften av nybakat bröd",
        validAnswers: ['HUMAN'],
        explanation: "AI har ingen näsa! Den kan skriva om doften, men kan aldrig känna den på riktigt."
    },
    {
        id: 5,
        text: "Skriva en saga om en flygande robot-elefant",
        validAnswers: ['SIMULATE', 'HUMAN'],
        explanation: "Båda kan! Människan använder sin vilda fantasi. AI pusslar ihop sagan från mönster i andra sagor."
    },
    {
        id: 6,
        text: "Veta hur det känns att bli knuffad i en lek",
        validAnswers: ['HUMAN'],
        explanation: "AI har ingen kropp och kan inte känna smärta. Den vet inte hur det känns att ramla."
    },
    {
        id: 7,
        text: "Gissa vad du vill se på nästa film i en app",
        validAnswers: ['AI'],
        explanation: "AI är expert på att se vad du gillat förut och räkna ut vad du borde gilla nu. Människor kan gissa, men AI är snabbare!"
    },
    {
        id: 8,
        text: "Rita en bild av en dinosaurie som spelar piano",
        validAnswers: ['SIMULATE', 'HUMAN'],
        explanation: "Båda kan! AI skapar bilden genom att blanda massor av bilder den sett. Människan ritar från sin fantasi."
    },
    {
        id: 9,
        text: "Trösta en kompis som gråter",
        validAnswers: ['HUMAN'],
        explanation: "AI kan skriva tröstande ord, men bara en människa kan ge en kram och känna äkta vänskap."
    },
    {
        id: 10,
        text: "Hitta på ett nytt, roligt skämt",
        validAnswers: ['SIMULATE', 'HUMAN'],
        explanation: "Båda kan försöka! AI kan härma hur skämt brukar låta, men människor är oftast bättre på att veta vad som är roligt på riktigt."
    },
    {
        id: 11,
        text: "Komma ihåg en sommarupplevelse från när man var liten",
        validAnswers: ['HUMAN'],
        explanation: "AI har inga egna minnen eller barndom. Den har bara data som människor matat in i den."
    },
    {
        id: 12,
        text: "Förstå att en bild är “läskigt fel” (t.ex. sex fingrar)",
        validAnswers: ['HUMAN'],
        explanation: "AI märker ofta inte om en hand har sex fingrar. Människor ser direkt när något ser onaturligt ut."
    }
];

interface AiVsHumanQuizProps {
    onClose: () => void;
}

export function AiVsHumanQuiz({ onClose }: AiVsHumanQuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<'AI' | 'HUMAN' | 'SIMULATE' | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameComplete, setGameComplete] = useState(false);

    const currentQuestion = QUESTIONS[currentQuestionIndex];

    const handleAnswer = (answer: 'AI' | 'HUMAN' | 'SIMULATE') => {
        if (selectedAnswer) return;

        setSelectedAnswer(answer);
        const correct = currentQuestion.validAnswers.includes(answer);

        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.7 },
                colors: ['#4ADE80', '#22C55E', '#FFD700']
            });
        }

        setShowResult(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setIsCorrect(null);
        } else {
            setGameComplete(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    const restartGame = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameComplete(false);
        setSelectedAnswer(null);
        setShowResult(false);
        setIsCorrect(null);
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300 font-fredoka">
            <div className="bg-white rounded-[3rem] max-w-3xl w-full shadow-2xl overflow-hidden relative border-8 border-white/50 ring-4 ring-white/20">

                {/* Header */}
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 border-b border-violet-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white text-violet-600 rounded-2xl shadow-sm border border-violet-100">
                            <BrainCircuit className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="font-black text-2xl text-slate-800 tracking-tight">Vem kan vad?</h2>
                            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                                <span className="px-2 py-0.5 bg-white rounded-md shadow-sm border border-slate-100">
                                    Fråga {currentQuestionIndex + 1} / {QUESTIONS.length}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 rounded-full bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all shadow-sm hover:shadow-md"
                    >
                        <X className="w-6 h-6" strokeWidth={3} />
                    </button>
                </div>

                {/* Game Content */}
                {!gameComplete ? (
                    <div className="p-8 sm:p-10 bg-slate-50/50">
                        {/* Progress Bar */}
                        <div className="w-full h-6 bg-slate-200 rounded-full mb-10 overflow-hidden shadow-inner border border-slate-300/50">
                            <div
                                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 ease-out rounded-full shadow-[0_2px_10px_rgba(167,139,250,0.5)] relative"
                                style={{ width: `${((currentQuestionIndex) / QUESTIONS.length) * 100}%` }}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20" />
                            </div>
                        </div>

                        {/* Question */}
                        <div className="min-h-[120px] flex items-center justify-center mb-10">
                            <h3 className="text-3xl sm:text-4xl font-black text-slate-800 text-center leading-tight drop-shadow-sm">
                                {currentQuestion.text}
                            </h3>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {/* AI Button */}
                            <button
                                onClick={() => handleAnswer('AI')}
                                disabled={!!selectedAnswer}
                                className={`
                                    relative p-6 rounded-[2rem] transition-all duration-300 flex flex-col items-center gap-4 group
                                    ${selectedAnswer === 'AI'
                                        ? (currentQuestion.validAnswers.includes('AI')
                                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_0_4px_#22c55e] scale-105 z-10'
                                            : 'bg-gradient-to-br from-red-400 to-rose-500 shadow-[0_0_0_4px_#ef4444] opacity-50')
                                        : 'bg-gradient-to-br from-blue-400 to-cyan-400 shadow-[0_8px_0_#0ea5e9] hover:shadow-[0_4px_0_#0ea5e9] hover:translate-y-1 active:shadow-none active:translate-y-2'
                                    }
                                    ${!!selectedAnswer && selectedAnswer !== 'AI' && 'opacity-30 grayscale scale-95'}
                                `}
                            >
                                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
                                    <Bot className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="font-black text-white text-xl tracking-wide drop-shadow-md">AI</span>
                            </button>

                            {/* Human Button */}
                            <button
                                onClick={() => handleAnswer('HUMAN')}
                                disabled={!!selectedAnswer}
                                className={`
                                    relative p-6 rounded-[2rem] transition-all duration-300 flex flex-col items-center gap-4 group
                                    ${selectedAnswer === 'HUMAN'
                                        ? (currentQuestion.validAnswers.includes('HUMAN')
                                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_0_4px_#22c55e] scale-105 z-10'
                                            : 'bg-gradient-to-br from-red-400 to-rose-500 shadow-[0_0_0_4px_#ef4444] opacity-50')
                                        : 'bg-gradient-to-br from-amber-400 to-orange-400 shadow-[0_8px_0_#f97316] hover:shadow-[0_4px_0_#f97316] hover:translate-y-1 active:shadow-none active:translate-y-2'
                                    }
                                    ${!!selectedAnswer && selectedAnswer !== 'HUMAN' && 'opacity-30 grayscale scale-95'}
                                `}
                            >
                                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
                                    <User className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="font-black text-white text-xl tracking-wide drop-shadow-md">Människa</span>
                            </button>

                            {/* Simulate Button */}
                            <button
                                onClick={() => handleAnswer('SIMULATE')}
                                disabled={!!selectedAnswer}
                                className={`
                                    relative p-6 rounded-[2rem] transition-all duration-300 flex flex-col items-center gap-4 group
                                    ${selectedAnswer === 'SIMULATE'
                                        ? (currentQuestion.validAnswers.includes('SIMULATE')
                                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_0_4px_#22c55e] scale-105 z-10'
                                            : 'bg-gradient-to-br from-red-400 to-rose-500 shadow-[0_0_0_4px_#ef4444] opacity-50')
                                        : 'bg-gradient-to-br from-fuchsia-400 to-purple-500 shadow-[0_8px_0_#9333ea] hover:shadow-[0_4px_0_#9333ea] hover:translate-y-1 active:shadow-none active:translate-y-2'
                                    }
                                    ${!!selectedAnswer && selectedAnswer !== 'SIMULATE' && 'opacity-30 grayscale scale-95'}
                                `}
                            >
                                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
                                    <Drama className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="font-black text-white text-xl tracking-wide drop-shadow-md text-center leading-none">AI Låtsas</span>
                            </button>
                        </div>

                        {/* Result Feedback */}
                        {showResult && (
                            <div className="animate-in slide-in-from-bottom-8 fade-in duration-500">
                                <div className={`
                                    p-6 rounded-[2rem] mb-8 flex items-start gap-5 shadow-lg border-4
                                    ${isCorrect
                                        ? 'bg-green-50 border-green-200 text-green-900'
                                        : 'bg-red-50 border-red-200 text-red-900'
                                    }
                                `}>
                                    <div className={`
                                        p-3 rounded-full shrink-0 shadow-sm
                                        ${isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}
                                    `}>
                                        {isCorrect ? <CheckCircle2 className="w-8 h-8" strokeWidth={3} /> : <XCircle className="w-8 h-8" strokeWidth={3} />}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl mb-2">{isCorrect ? 'Snyggt!' : 'Nja, inte riktigt...'}</h4>
                                        <p className="font-bold text-lg leading-relaxed opacity-90">{currentQuestion.explanation}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={nextQuestion}
                                    className="w-full py-5 bg-slate-800 text-white rounded-2xl font-black text-2xl hover:bg-slate-700 transition-all flex items-center justify-center gap-3 shadow-[0_8px_0_#1e293b] hover:shadow-[0_4px_0_#1e293b] hover:translate-y-1 active:shadow-none active:translate-y-2"
                                >
                                    Nästa fråga <ArrowRight className="w-8 h-8" strokeWidth={3} />
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Game Complete Screen
                    <div className="p-12 text-center flex flex-col items-center animate-in zoom-in-95 duration-500 bg-gradient-to-b from-white to-slate-50">
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-yellow-200 rounded-full blur-2xl opacity-50 animate-pulse" />
                            <div className="w-40 h-40 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(245,158,11,0.4)] animate-bounce relative z-10 border-4 border-white">
                                <span className="text-7xl">🏆</span>
                            </div>
                        </div>

                        <h2 className="text-5xl font-black text-slate-800 mb-4 tracking-tight">Bra jobbat!</h2>
                        <p className="text-2xl text-slate-600 font-bold mb-10">
                            Du fick <span className="text-violet-600 text-3xl">{score}</span> av <span className="text-slate-400">{QUESTIONS.length}</span> rätt!
                        </p>

                        <div className="flex gap-6 w-full max-w-lg">
                            <button
                                onClick={restartGame}
                                className="flex-1 py-4 bg-white text-slate-700 rounded-2xl font-bold text-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                                <RefreshCw className="w-6 h-6" />
                                Igen
                            </button>
                            <button
                                onClick={onClose}
                                className="flex-1 py-4 bg-violet-600 text-white rounded-2xl font-bold text-xl hover:bg-violet-500 transition-all shadow-[0_6px_0_#7c3aed] hover:shadow-[0_3px_0_#7c3aed] hover:translate-y-1 active:shadow-none active:translate-y-2"
                            >
                                Klar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
