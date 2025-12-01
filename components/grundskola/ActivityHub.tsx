"use client";

import { useState } from "react";
import { Activity } from "@/lib/grundskola-data";
import { ActivityCard } from "./ActivityCard";
import { ChevronLeft, ChevronRight, Gamepad2, PenTool, Search, BrainCircuit } from "lucide-react";

interface ActivityHubProps {
    activities: Activity[];
}

export function ActivityHub({ activities }: ActivityHubProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!activities || activities.length === 0) {
        return null;
    }

    const nextActivity = () => {
        setActiveIndex((prev) => (prev + 1) % activities.length);
    };

    const prevActivity = () => {
        setActiveIndex((prev) => (prev - 1 + activities.length) % activities.length);
    };

    return (
        <div className="space-y-12">
            {/* Header / Navigation Controls */}
            <div className="flex items-center justify-between px-4">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-black text-gray-800 font-fredoka tracking-tight">
                        Aktivitet {activeIndex + 1} <span className="text-gray-400 font-medium text-xl">/ {activities.length}</span>
                    </h2>
                    <p className="text-gray-500 font-medium font-nunito">Välj en aktivitet att starta</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={prevActivity}
                        className="p-4 rounded-full bg-white border-2 border-gray-100 shadow-[0_4px_0_#e2e8f0] hover:shadow-[0_2px_0_#e2e8f0] hover:translate-y-[2px] hover:bg-gray-50 transition-all active:shadow-none active:translate-y-[4px]"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" strokeWidth={3} />
                    </button>
                    <button
                        onClick={nextActivity}
                        className="p-4 rounded-full bg-white border-2 border-gray-100 shadow-[0_4px_0_#e2e8f0] hover:shadow-[0_2px_0_#e2e8f0] hover:translate-y-[2px] hover:bg-gray-50 transition-all active:shadow-none active:translate-y-[4px]"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" strokeWidth={3} />
                    </button>
                </div>
            </div>

            {/* Main Active Card Area */}
            <div className="relative min-h-[500px] perspective-1000">
                <div
                    className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500 ease-out"
                    key={activeIndex}
                >
                    <ActivityCard
                        activity={activities[activeIndex]}
                        index={activeIndex}
                    />
                </div>
            </div>

            {/* Thumbnails Grid */}
            <div className="px-4">
                <h3 className="text-lg font-bold text-gray-400 font-fredoka mb-6 uppercase tracking-wider">Alla aktiviteter</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {activities.map((activity, index) => {
                        const isDigital = activity.type === 'digital';
                        const isClickHunt = activity.title.includes('Hitta AI-apparaterna');
                        const isSortingGame = activity.title.includes('Sortera Sakerna');
                        const isExplorer = activity.title.includes('AI finns överallt');
                        const isQuiz = activity.title.includes('Vem kan vad?');

                        let Icon = isDigital ? Gamepad2 : PenTool;
                        if (isExplorer) Icon = Search;
                        if (isQuiz) Icon = BrainCircuit;

                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    group relative flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 border-2
                                    ${isActive
                                        ? 'bg-white border-blue-500 shadow-md scale-[1.02] ring-4 ring-blue-50'
                                        : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
                                    }
                                `}
                            >
                                {/* Hover Badge */}
                                <div className={`
                                    absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all duration-300
                                    opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                                    ${isDigital ? 'bg-cyan-500 text-white' : 'bg-amber-500 text-white'}
                                `}>
                                    {isDigital ? 'Digitalt' : 'Analogt'}
                                </div>

                                <div className={`
                                    p-3 rounded-xl transition-colors
                                    ${isActive
                                        ? (isDigital ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700')
                                        : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600'
                                    }
                                `}>
                                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                                </div>

                                <span className={`
                                    text-xs font-bold text-center line-clamp-2 leading-tight
                                    ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}
                                `}>
                                    {activity.title.split('–')[0]}
                                </span>

                                {/* Active Indicator */}
                                {isActive && (
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isDigital ? 'bg-cyan-500' : 'bg-amber-500'}`} />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
