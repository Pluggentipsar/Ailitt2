"use client";

import { useState } from "react";
import { Activity } from "@/lib/grundskola-data";
import { BookOpen, X, CheckCircle2, Gamepad2, PenTool, Search, Drama } from "lucide-react";
import { createPortal } from "react-dom";
import { ClickHuntGame } from "./games/ClickHuntGame";
import { AiSortingGame } from "./games/AiSortingGame";

import { AiServicesExplorer } from "./games/AiServicesExplorer";

import { AiVsHumanQuiz } from "./games/AiVsHumanQuiz";
import { AiPatternGame } from "./games/AiPatternGame";
import { AiRobotGame } from "./games/AiRobotGame";

interface ActivityCardProps {
    activity: Activity;
    index: number;
}

export function ActivityCard({ activity, index }: ActivityCardProps) {
    const [showTeacherInfo, setShowTeacherInfo] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [showSortingGame, setShowSortingGame] = useState(false);
    const [showExplorer, setShowExplorer] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showPatternGame, setShowPatternGame] = useState(false);
    const [showRobotGame, setShowRobotGame] = useState(false);

    const isDigital = activity.type === 'digital';
    const isClickHunt = activity.title.includes('Hitta AI-apparaterna');
    const isSortingGame = activity.title.includes('Sortera Sakerna');
    const isExplorer = activity.title.includes('AI finns överallt');
    const isQuiz = activity.title.includes('Vem kan vad?');
    const isPatternGame = activity.title.includes('Mönsterleken');
    const isRobotGame = activity.title.includes('Robot-programmering');

    const Icon = isDigital ? Gamepad2 : PenTool;

    // Distinct styles for Analog vs Digital
    const cardStyle = isDigital
        ? 'bg-gradient-to-br from-[#E0F7FA] to-[#80DEEA] border-b-8 border-[#4DD0E1]' // Cyan/Blue for Digital
        : 'bg-gradient-to-br from-[#FFF8E1] to-[#FFE082] border-b-8 border-[#FFCA28]'; // Yellow/Orange for Analog

    const iconBg = isDigital ? 'bg-white text-[#00BCD4]' : 'bg-white text-[#FFB300]';
    const buttonStyle = isDigital
        ? 'bg-[#00BCD4] text-white hover:bg-[#00ACC1] shadow-[0_4px_0_#0097A7] hover:shadow-[0_2px_0_#0097A7] hover:translate-y-[2px]'
        : 'bg-[#FFB300] text-white hover:bg-[#FFA000] shadow-[0_4px_0_#FF8F00] hover:shadow-[0_2px_0_#FF8F00] hover:translate-y-[2px]';

    return (
        <>
            <div className={`
                relative rounded-[2.5rem] p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                ${cardStyle}
            `}>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 rotate-12">
                    <div className={`
                        px-4 py-2 rounded-full font-fredoka font-bold text-sm uppercase tracking-wider shadow-lg border-2 border-white
                        ${isDigital ? 'bg-[#26C6DA] text-white' : 'bg-[#FFCA28] text-white'}
                    `}>
                        {isDigital ? 'Digitalt' : 'Analogt'}
                    </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-[1.5rem] shadow-sm ${iconBg} transform -rotate-6`}>
                            <Icon className="w-8 h-8" strokeWidth={2.5} />
                        </div>
                        <span className="font-fredoka font-bold text-4xl text-black/10">
                            {index + 1}
                        </span>
                    </div>

                    <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-4 leading-tight min-h-[3.5rem]">
                        {activity.title}
                    </h3>

                    <p className="text-gray-700 mb-8 font-nunito font-medium leading-relaxed flex-grow">
                        {activity.studentDescription}
                    </p>

                    <div className="mt-auto space-y-3">
                        {isClickHunt && (
                            <button
                                onClick={() => setShowGame(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Gamepad2 className="w-6 h-6" />
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isSortingGame && (
                            <button
                                onClick={() => setShowSortingGame(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Gamepad2 className="w-6 h-6" />
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isExplorer && (
                            <button
                                onClick={() => setShowExplorer(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Search className="w-6 h-6" />
                                <span>Utforska!</span>
                            </button>
                        )}

                        {isQuiz && (
                            <button
                                onClick={() => setShowQuiz(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Gamepad2 className="w-6 h-6" />
                                <span>Starta quizet!</span>
                            </button>
                        )}

                        {isPatternGame && (
                            <button
                                onClick={() => setShowPatternGame(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Gamepad2 className="w-6 h-6" />
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        {isRobotGame && (
                            <button
                                onClick={() => setShowRobotGame(true)}
                                className="w-full py-4 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 bg-white text-[#00BCD4] shadow-[0_4px_0_#B2EBF2] hover:shadow-[0_2px_0_#B2EBF2] hover:translate-y-[2px]"
                            >
                                <Gamepad2 className="w-6 h-6" />
                                <span>Starta spelet!</span>
                            </button>
                        )}

                        <button
                            onClick={() => setShowTeacherInfo(true)}
                            className={`w-full py-3 px-6 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center justify-center gap-3 ${buttonStyle}`}
                        >
                            <BookOpen className="w-5 h-5" />
                            <span>Lärarinstruktion</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Teacher Instructions Modal */}
            {showTeacherInfo && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setShowTeacherInfo(false)}
                    />
                    <div className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 border-8 border-[#FFCA28]">
                        <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 p-8 border-b border-gray-100 flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[#FFF8E1] text-[#FFB300] rounded-2xl">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">Lärarinstruktion</h4>
                                    <h3 className="font-fredoka font-bold text-2xl text-gray-800 leading-none">{activity.title}</h3>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowTeacherInfo(false)}
                                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Purpose Section */}
                            {activity.teacherInstructions.purpose && (
                                <div className="bg-[#E3F2FD] p-6 rounded-3xl border-2 border-[#BBDEFB]">
                                    <h5 className="font-fredoka font-bold text-[#1565C0] mb-3 text-lg flex items-center gap-2">
                                        <CheckCircle2 className="w-6 h-6" />
                                        Syfte
                                    </h5>
                                    <p className="text-[#0D47A1] font-medium leading-relaxed text-lg">
                                        {activity.teacherInstructions.purpose}
                                    </p>
                                </div>
                            )}

                            {/* Explanation Section */}
                            {activity.teacherInstructions.explanation && (
                                <div className="bg-[#FFF3E0] p-6 rounded-3xl border-2 border-[#FFE0B2]">
                                    <h5 className="font-fredoka font-bold text-[#E65100] mb-3 text-lg flex items-center gap-2">
                                        <BookOpen className="w-6 h-6" />
                                        Förklaring
                                    </h5>
                                    <p className="text-[#BF360C] font-medium leading-relaxed text-lg">
                                        {activity.teacherInstructions.explanation}
                                    </p>
                                </div>
                            )}

                            {/* Preparation Section */}
                            {activity.teacherInstructions.preparation && activity.teacherInstructions.preparation.length > 0 && (
                                <div>
                                    <h5 className="font-fredoka font-bold text-gray-800 mb-4 text-xl">Förberedelser</h5>
                                    <ul className="space-y-3">
                                        {activity.teacherInstructions.preparation.map((step, i) => (
                                            <li key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-2xl">
                                                <span className="w-3 h-3 rounded-full bg-[#FFCA28] mt-2 shrink-0" />
                                                <span className="text-gray-700 font-medium">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Steps Section */}
                            <div>
                                <h5 className="font-fredoka font-bold text-gray-800 mb-4 text-xl">Gör så här</h5>
                                <ol className="space-y-4">
                                    {activity.teacherInstructions.steps.map((step, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFCA28] text-white font-fredoka font-bold flex items-center justify-center text-xl shadow-sm">
                                                {i + 1}
                                            </span>
                                            <p className="text-gray-700 font-medium leading-relaxed pt-1.5 text-lg">
                                                {step}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Examples Section */}
                            {activity.teacherInstructions.examples && activity.teacherInstructions.examples.length > 0 && (
                                <div className="bg-[#E8F5E9] p-6 rounded-3xl border-2 border-[#C8E6C9]">
                                    <h5 className="font-fredoka font-bold text-[#2E7D32] mb-4 text-xl">Exempel</h5>
                                    <ul className="grid gap-3">
                                        {activity.teacherInstructions.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-xl">
                                                <span className="text-2xl">💡</span>
                                                <span className="text-[#1B5E20] font-medium leading-relaxed">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Discussion Section */}
                            {activity.teacherInstructions.discussion && (
                                <div className="bg-[#F3E5F5] p-8 rounded-3xl border-2 border-[#E1BEE7] text-center">
                                    <h5 className="font-fredoka font-bold text-[#7B1FA2] mb-4 text-xl">Diskutera</h5>
                                    <p className="text-[#4A148C] font-bold italic text-xl leading-relaxed">
                                        "{activity.teacherInstructions.discussion}"
                                    </p>
                                </div>
                            )}
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
        </>
    );
}
