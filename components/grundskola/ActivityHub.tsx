"use client";

import { useState } from "react";
import { Activity } from "@/lib/grundskola-data";
import { ActivityCard } from "./ActivityCard";
import { ChevronLeft, ChevronRight, Gamepad2, PenTool, Sparkles } from "lucide-react";

interface ActivityHubProps {
    activities: Activity[];
}

export function ActivityHub({ activities }: ActivityHubProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filter, setFilter] = useState<'all' | 'digital' | 'analog'>('all');

    if (!activities || activities.length === 0) {
        return null;
    }

    // Filter activities based on selected filter
    const filteredActivities = activities.filter(activity => {
        if (filter === 'all') return true;
        if (filter === 'digital') return activity.type === 'digital';
        if (filter === 'analog') return activity.type === 'analog';
        return true;
    });

    const nextActivity = () => {
        setActiveIndex((prev) => (prev + 1) % filteredActivities.length);
    };

    const prevActivity = () => {
        setActiveIndex((prev) => (prev - 1 + filteredActivities.length) % filteredActivities.length);
    };

    const currentActivity = filteredActivities[activeIndex];
    const isDigital = currentActivity?.type === 'digital';

    // Count activities by type
    const digitalCount = activities.filter(a => a.type === 'digital').length;
    const analogCount = activities.filter(a => a.type === 'analog').length;

    return (
        <div className="space-y-8 pb-12">
            {/* Category Filter - BIG and BOLD */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <button
                    onClick={() => { setFilter('all'); setActiveIndex(0); }}
                    className={`
                        group relative px-8 py-5 rounded-[2rem] font-fredoka font-bold text-xl sm:text-2xl transition-all duration-300 border-4 min-w-[200px]
                        ${filter === 'all'
                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white border-white shadow-[0_8px_0_rgba(168,85,247,0.4)] translate-y-0'
                            : 'bg-white text-gray-600 border-gray-200 shadow-[0_6px_0_#e5e7eb] hover:shadow-[0_4px_0_#e5e7eb] hover:translate-y-[2px]'
                        }
                    `}
                >
                    <Sparkles className="inline-block w-7 h-7 mr-2 -mt-1" />
                    Alla ({activities.length})
                </button>
                <button
                    onClick={() => { setFilter('digital'); setActiveIndex(0); }}
                    className={`
                        group relative px-8 py-5 rounded-[2rem] font-fredoka font-bold text-xl sm:text-2xl transition-all duration-300 border-4 min-w-[200px]
                        ${filter === 'digital'
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white border-white shadow-[0_8px_0_rgba(6,182,212,0.4)] translate-y-0'
                            : 'bg-white text-gray-600 border-gray-200 shadow-[0_6px_0_#e5e7eb] hover:shadow-[0_4px_0_#e5e7eb] hover:translate-y-[2px]'
                        }
                    `}
                >
                    <Gamepad2 className="inline-block w-7 h-7 mr-2 -mt-1" />
                    Digitala ({digitalCount})
                </button>
                <button
                    onClick={() => { setFilter('analog'); setActiveIndex(0); }}
                    className={`
                        group relative px-8 py-5 rounded-[2rem] font-fredoka font-bold text-xl sm:text-2xl transition-all duration-300 border-4 min-w-[200px]
                        ${filter === 'analog'
                            ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-white shadow-[0_8px_0_rgba(245,158,11,0.4)] translate-y-0'
                            : 'bg-white text-gray-600 border-gray-200 shadow-[0_6px_0_#e5e7eb] hover:shadow-[0_4px_0_#e5e7eb] hover:translate-y-[2px]'
                        }
                    `}
                >
                    <PenTool className="inline-block w-7 h-7 mr-2 -mt-1" />
                    Analoga ({analogCount})
                </button>
            </div>

            {/* Navigation Header with LARGE arrows */}
            <div className="flex items-center justify-between px-4 sm:px-8">
                <button
                    onClick={prevActivity}
                    className={`
                        p-6 sm:p-8 rounded-full border-4 transition-all duration-300
                        ${isDigital
                            ? 'bg-cyan-500 border-cyan-300 shadow-[0_8px_0_rgba(6,182,212,0.3)] hover:shadow-[0_4px_0_rgba(6,182,212,0.3)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px]'
                            : 'bg-amber-500 border-amber-300 shadow-[0_8px_0_rgba(245,158,11,0.3)] hover:shadow-[0_4px_0_rgba(245,158,11,0.3)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px]'
                        }
                    `}
                    disabled={filteredActivities.length <= 1}
                >
                    <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={4} />
                </button>

                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 font-fredoka tracking-tight mb-2">
                        Aktivitet {activeIndex + 1}
                    </h2>
                    <p className="text-2xl sm:text-3xl text-gray-400 font-bold font-fredoka">
                        av {filteredActivities.length}
                    </p>
                </div>

                <button
                    onClick={nextActivity}
                    className={`
                        p-6 sm:p-8 rounded-full border-4 transition-all duration-300
                        ${isDigital
                            ? 'bg-cyan-500 border-cyan-300 shadow-[0_8px_0_rgba(6,182,212,0.3)] hover:shadow-[0_4px_0_rgba(6,182,212,0.3)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px]'
                            : 'bg-amber-500 border-amber-300 shadow-[0_8px_0_rgba(245,158,11,0.3)] hover:shadow-[0_4px_0_rgba(245,158,11,0.3)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px]'
                        }
                    `}
                    disabled={filteredActivities.length <= 1}
                >
                    <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={4} />
                </button>
            </div>

            {/* HERO CARD - Main Active Card Area (90% of screen focus) */}
            <div className="relative min-h-[600px] px-4 sm:px-8">
                <div
                    className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500 ease-out"
                    key={`${filter}-${activeIndex}`}
                >
                    <ActivityCard
                        activity={currentActivity}
                        index={activeIndex}
                    />
                </div>
            </div>

            {/* DOT NAVIGATION - Simple and clean */}
            <div className="flex items-center justify-center gap-3 px-4 py-8">
                {filteredActivities.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            transition-all duration-300 rounded-full
                            ${index === activeIndex
                                ? (isDigital
                                    ? 'w-16 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg'
                                    : 'w-16 h-6 bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg')
                                : 'w-6 h-6 bg-gray-300 hover:bg-gray-400 hover:scale-110'
                            }
                        `}
                        aria-label={`Gå till aktivitet ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
