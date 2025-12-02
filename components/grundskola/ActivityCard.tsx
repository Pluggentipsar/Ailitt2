"use client";

import { useState } from "react";
import { Activity } from "@/lib/grundskola-data";
import { BookOpen, X, CheckCircle2, Gamepad2, PenTool, Search, Drama, Users, Clock, Target, Lightbulb } from "lucide-react";
import { createPortal } from "react-dom";
import { ClickHuntGame } from "./games/ClickHuntGame";
import { AiSortingGame } from "./games/AiSortingGame";

import { AiServicesExplorer } from "./games/AiServicesExplorer";

import { AiVsHumanQuiz } from "./games/AiVsHumanQuiz";
import { AiPatternGame } from "./games/AiPatternGame";
import { AiRobotGame } from "./games/AiRobotGame";
import { PromptGuessingGame } from "./games/PromptGuessingGame";
import TrainAiGame from "./games/TrainAiGame";

interface ActivityCardProps {
    activity: Activity;
    index: number;
}

export function ActivityCard({ activity, index }: ActivityCardProps) {
    const [showGame, setShowGame] = useState(false);
    const [showSortingGame, setShowSortingGame] = useState(false);
    const [showExplorer, setShowExplorer] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showPatternGame, setShowPatternGame] = useState(false);
    const [showRobotGame, setShowRobotGame] = useState(false);
    const [showPromptGame, setShowPromptGame] = useState(false);
    const [showTrainAiGame, setShowTrainAiGame] = useState(false);
    const [showSteps, setShowSteps] = useState(false);

    const isDigital = activity.type === 'digital';
    const isClickHunt = activity.title.includes('Hitta AI-apparaterna');
    const isSortingGame = activity.title.includes('Sortera Sakerna');
    const isExplorer = activity.title.includes('AI finns överallt');
    const isQuiz = activity.title.includes('Vem kan vad?');
    const isPatternGame = activity.title.includes('Mönsterleken');
    const isRobotGame = activity.title.includes('Programmering vs AI');
    const isPromptGame = activity.title.includes('Vilken prompt skapade texten?');
    const isTrainAiGame = activity.title.includes('Träna Gnista');

    const Icon = isDigital ? Gamepad2 : PenTool;

    // MASSIVE emoji icons for activity types
    const getActivityEmoji = () => {
        if (isClickHunt) return '🔍';
        if (isSortingGame) return '📦';
        if (isExplorer) return '🌍';
        if (isQuiz) return '🧠';
        if (isPatternGame) return '🎨';
        if (isRobotGame) return '🤖';
        if (isPromptGame) return '📝';
        if (isTrainAiGame) return '🎓';
        return isDigital ? '🎮' : '✏️';
    };

    // Distinct styles for Analog vs Digital - BIGGER and BOLDER
    const cardStyle = isDigital
        ? 'bg-gradient-to-br from-[#E0F7FA] to-[#80DEEA] border-b-[12px] border-[#4DD0E1]' // Cyan/Blue for Digital
        : 'bg-gradient-to-br from-[#FFF8E1] to-[#FFE082] border-b-[12px] border-[#FFCA28]'; // Yellow/Orange for Analog

    const iconBg = isDigital ? 'bg-white text-[#00BCD4]' : 'bg-white text-[#FFB300]';
    const buttonStyle = isDigital
        ? 'bg-[#00BCD4] text-white hover:bg-[#00ACC1] shadow-[0_6px_0_#0097A7] hover:shadow-[0_3px_0_#0097A7] hover:translate-y-[3px]'
        : 'bg-[#FFB300] text-white hover:bg-[#FFA000] shadow-[0_6px_0_#FF8F00] hover:shadow-[0_3px_0_#FF8F00] hover:translate-y-[3px]';

    return (
        <>
            <div className={`
                relative rounded-[3rem] p-8 sm:p-12 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                ${cardStyle}
            `}>
                {/* MASSIVE Floating Badge with Emoji */}
                <div className="absolute -top-6 -right-6 rotate-12 z-20">
                    <div className={`
                        px-6 py-4 rounded-[2rem] font-fredoka font-bold text-xl sm:text-2xl uppercase tracking-wider shadow-2xl border-4 border-white
                        ${isDigital ? 'bg-[#26C6DA] text-white' : 'bg-[#FFCA28] text-white'}
                    `}>
                        <span className="text-3xl mr-2">{getActivityEmoji()}</span>
                        {isDigital ? 'Digitalt' : 'Analogt'}
                    </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header with HUGE number */}
                    <div className="flex items-start justify-between mb-8">
                        <div className={`p-6 sm:p-8 rounded-[2rem] shadow-lg ${iconBg} transform -rotate-6`}>
                            <Icon className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={2.5} />
                        </div>
                        <span className="font-fredoka font-bold text-6xl sm:text-7xl text-black/10">
                            {index + 1}
                        </span>
                    </div>

                    {/* GIANT Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6 leading-tight">
                        {activity.title}
                    </h3>

                    {/* LARGE Description with better readability */}
                    <p className="text-xl sm:text-2xl text-gray-800 mb-8 font-nunito font-bold leading-relaxed flex-grow">
                        {activity.studentDescription}
                    </p>

                    <div className="mt-auto space-y-4 sm:space-y-5">
                        {/* For DIGITAL activities - Launch Game Button */}
                        {isClickHunt && (
                            <button
                                onClick={() => setShowGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🔍</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isSortingGame && (
                            <button
                                onClick={() => setShowSortingGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">📦</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isExplorer && (
                            <button
                                onClick={() => setShowExplorer(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🌍</span>
                                <span>Utforska!</span>
                            </button>
                        )}

                        {isQuiz && (
                            <button
                                onClick={() => setShowQuiz(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🧠</span>
                                <span>Starta quizet!</span>
                            </button>
                        )}

                        {isPatternGame && (
                            <button
                                onClick={() => setShowPatternGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🎨</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isRobotGame && (
                            <button
                                onClick={() => setShowRobotGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🤖</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isPromptGame && (
                            <button
                                onClick={() => setShowPromptGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">📝</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isTrainAiGame && (
                            <button
                                onClick={() => setShowTrainAiGame(true)}
                                className="w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 bg-white text-[#00BCD4] shadow-[0_8px_0_#B2EBF2] hover:shadow-[0_4px_0_#B2EBF2] hover:translate-y-[4px] border-4 border-[#00BCD4]"
                            >
                                <span className="text-4xl">🎓</span>
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {/* Teacher Instructions Button - LARGE and PROMINENT */}
                        <button
                            onClick={() => setShowSteps(true)}
                            className={`w-full py-6 sm:py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 ${buttonStyle} border-4 ${isDigital ? 'border-[#00BCD4]' : 'border-[#FFB300]'}`}
                        >
                            <BookOpen className="w-10 h-10" />
                            <span>Lärarinstruktion</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Teacher Instructions Modal - Large and Beautiful */}
            {showSteps && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div
                        className={`absolute inset-0 backdrop-blur-md ${isDigital ? 'bg-gradient-to-br from-cyan-900/80 to-blue-900/80' : 'bg-gradient-to-br from-amber-900/80 to-orange-900/80'}`}
                        onClick={() => setShowSteps(false)}
                    />
                    <div className={`rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 ${isDigital ? 'bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] border-8 border-[#00BCD4]' : 'bg-gradient-to-br from-[#FFF8E1] to-[#FFE082] border-8 border-[#FFCA28]'}`}>
                        {/* Header */}
                        <div className={`sticky top-0 backdrop-blur-sm z-20 p-8 sm:p-12 flex items-start justify-between ${isDigital ? 'bg-gradient-to-br from-[#00BCD4] to-[#0097A7]' : 'bg-gradient-to-br from-[#FFB300] to-[#FF8F00]'}`}>
                            <div className="flex items-center gap-6">
                                <div className={`p-6 bg-white rounded-3xl shadow-lg ${isDigital ? 'text-[#00BCD4]' : 'text-[#FFB300]'}`}>
                                    <BookOpen className="w-12 h-12" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white/90 text-lg uppercase tracking-wider mb-2">Lärarinstruktion</h4>
                                    <h3 className="font-fredoka font-bold text-3xl sm:text-4xl text-white leading-tight">{activity.title}</h3>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowSteps(false)}
                                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                            >
                                <X className="w-8 h-8 text-white" />
                            </button>
                        </div>

                        <div className="p-8 sm:p-12 space-y-8">
                            {/* Purpose Card */}
                            {activity.teacherInstructions.purpose && (
                                <div className={`bg-white p-8 rounded-[2rem] shadow-lg border-4 ${isDigital ? 'border-[#B2EBF2]' : 'border-[#FFE082]'}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-5xl">🎯</span>
                                        <h5 className={`font-fredoka font-bold text-2xl ${isDigital ? 'text-[#0097A7]' : 'text-[#FF8F00]'}`}>Vad ska vi göra?</h5>
                                    </div>
                                    <p className="text-gray-800 font-bold text-xl sm:text-2xl leading-relaxed">
                                        {activity.teacherInstructions.purpose}
                                    </p>
                                </div>
                            )}

                            {/* Student Description - Large and Clear */}
                            <div className={`bg-white p-8 rounded-[2rem] shadow-lg border-4 ${isDigital ? 'border-[#B2EBF2]' : 'border-[#FFE082]'}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">💡</span>
                                    <h5 className={`font-fredoka font-bold text-2xl ${isDigital ? 'text-[#0097A7]' : 'text-[#FF8F00]'}`}>Så här funkar det!</h5>
                                </div>
                                <p className="text-gray-800 font-bold text-xl sm:text-2xl leading-relaxed whitespace-pre-line">
                                    {activity.studentDescription}
                                </p>
                            </div>

                            {/* GIANT Steps Cards */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl">👣</span>
                                    <h5 className="font-fredoka font-bold text-gray-800 text-3xl">Stegen att följa</h5>
                                </div>
                                <div className="grid gap-6">
                                    {activity.teacherInstructions.steps.map((step, i) => (
                                        <div key={i} className={`bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border-4 ${isDigital ? 'border-[#B2EBF2] hover:border-[#00BCD4]' : 'border-[#FFE082] hover:border-[#FFCA28]'}`}>
                                            <div className="flex gap-6 items-start">
                                                <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full text-white font-fredoka font-bold flex items-center justify-center text-3xl sm:text-4xl shadow-lg ${isDigital ? 'bg-gradient-to-br from-[#00BCD4] to-[#0097A7]' : 'bg-gradient-to-br from-[#FFB300] to-[#FF8F00]'}`}>
                                                    {i + 1}
                                                </div>
                                                <p className="text-gray-800 font-bold text-xl sm:text-2xl leading-relaxed pt-2">
                                                    {step}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Examples - If available */}
                            {activity.teacherInstructions.examples && activity.teacherInstructions.examples.length > 0 && (
                                <div className={`bg-white p-8 rounded-[2rem] shadow-lg border-4 ${isDigital ? 'border-[#B2EBF2]' : 'border-[#FFE082]'}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl">✨</span>
                                        <h5 className={`font-fredoka font-bold text-2xl ${isDigital ? 'text-[#0097A7]' : 'text-[#FF8F00]'}`}>Exempel</h5>
                                    </div>
                                    <ul className="grid gap-4">
                                        {activity.teacherInstructions.examples.map((example, i) => (
                                            <li key={i} className={`flex items-start gap-4 p-6 rounded-2xl border-2 ${isDigital ? 'bg-[#E0F7FA] border-[#B2EBF2]' : 'bg-[#FFF8E1] border-[#FFE082]'}`}>
                                                <span className="text-3xl flex-shrink-0">💡</span>
                                                <span className="text-gray-800 font-bold text-lg sm:text-xl leading-relaxed">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={() => setShowSteps(false)}
                                className={`w-full py-8 px-8 rounded-[2rem] font-fredoka font-bold text-2xl sm:text-3xl transition-all flex items-center justify-center gap-4 text-white ${isDigital ? 'bg-gradient-to-br from-[#00BCD4] to-[#0097A7] shadow-[0_8px_0_rgba(0,188,212,0.3)] hover:shadow-[0_4px_0_rgba(0,188,212,0.3)]' : 'bg-gradient-to-br from-[#FFB300] to-[#FF8F00] shadow-[0_8px_0_rgba(255,143,0,0.3)] hover:shadow-[0_4px_0_rgba(255,143,0,0.3)]'} hover:translate-y-[4px]`}
                            >
                                <CheckCircle2 className="w-10 h-10" />
                                Stäng
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* Click Hunt Game Portal */}
            {showGame && createPortal(
                <ClickHuntGame onClose={() => setShowGame(false)} />,
                document.body
            )}

            {/* AI Sorting Game Portal */}
            {showSortingGame && createPortal(
                <AiSortingGame onClose={() => setShowSortingGame(false)} />,
                document.body
            )}

            {/* AI Services Explorer Portal */}
            {showExplorer && createPortal(
                <AiServicesExplorer onClose={() => setShowExplorer(false)} />,
                document.body
            )}

            {/* Quiz Portal */}
            {showQuiz && createPortal(
                <AiVsHumanQuiz onClose={() => setShowQuiz(false)} />,
                document.body
            )}

            {/* Pattern Game Portal */}
            {showPatternGame && createPortal(
                <AiPatternGame onClose={() => setShowPatternGame(false)} />,
                document.body
            )}

            {/* Robot Game Portal */}
            {showRobotGame && createPortal(
                <AiRobotGame onClose={() => setShowRobotGame(false)} />,
                document.body
            )}

            {/* Prompt Guessing Game Portal */}
            {showPromptGame && createPortal(
                <PromptGuessingGame onClose={() => setShowPromptGame(false)} />,
                document.body
            )}

            {/* Train AI Game Portal */}
            {showTrainAiGame && createPortal(
                <div className="fixed inset-0 z-[9999] bg-white">
                    <button
                        onClick={() => setShowTrainAiGame(false)}
                        className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <TrainAiGame />
                </div>,
                document.body
            )}
        </>
    );
}
