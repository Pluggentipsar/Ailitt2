"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { DialogueLine } from "@/lib/grundskola-data";
import { Sparkles, User, ChevronRight, RefreshCw, Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";

interface ChatDialogProps {
    dialogue: DialogueLine[];
    imageSrc?: string;
    audioSrc?: string;
    onComplete?: () => void;
    variant?: 'standard' | 'playful';
}

export function ChatDialog({ dialogue, imageSrc, audioSrc, onComplete, variant = 'standard' }: ChatDialogProps) {
    const [visibleCount, setVisibleCount] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const currentLine = dialogue[visibleCount - 1];
    const isComplete = visibleCount >= dialogue.length;
    const isPlayful = variant === 'playful';

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleCount, isFullscreen, textSize]);

    const handleNext = () => {
        if (!isComplete) {
            setVisibleCount((prev) => prev + 1);
        }
    };

    const handleReset = () => {
        setVisibleCount(1);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const toggleTextSize = () => {
        setTextSize(prev => prev === 'normal' ? 'large' : 'normal');
    };

    // Audio element that persists across renders and fullscreen toggles
    const audioPlayer = audioSrc && (
        <audio
            ref={audioRef}
            src={audioSrc}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
        />
    );

    // The main chat interface content
    const chatInterface = (
        <div className={`
            transition-all duration-300 ease-in-out bg-white w-full h-full flex flex-col
            ${isFullscreen
                ? 'fixed inset-0 z-[9999] h-screen w-screen rounded-none'
                : `overflow-hidden shadow-2xl border relative ${isPlayful ? 'rounded-[2.5rem] border-purple-100 shadow-purple-900/10' : 'rounded-3xl border-gray-100'}`
            }
        `}>
            {/* Header Controls */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                {audioSrc && (
                    <button
                        onClick={() => {
                            if (audioRef.current) {
                                if (isPlaying) {
                                    audioRef.current.pause();
                                } else {
                                    audioRef.current.play().catch(e => console.error("Audio play failed:", e));
                                }
                                setIsPlaying(!isPlaying);
                            }
                        }}
                        className={`rounded-full p-2 backdrop-blur-sm transition-all hover:scale-105 ${isPlaying
                            ? 'bg-red-500/20 text-red-600 hover:bg-red-500/30'
                            : 'bg-green-500/20 text-green-600 hover:bg-green-500/30'
                            }`}
                        title={isPlaying ? "Pausa" : "Lyssna"}
                    >
                        {isPlaying ? <span className="font-bold text-sm px-2">Pausa</span> : <span className="font-bold text-sm px-2">Lyssna</span>}
                    </button>
                )}
                <button
                    onClick={toggleTextSize}
                    className="rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-colors hover:bg-black/20"
                    title="Ändra textstorlek"
                >
                    <span className="font-bold text-sm">Aa</span>
                </button>
                <button
                    onClick={toggleFullscreen}
                    className="rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-colors hover:bg-black/20"
                    title={isFullscreen ? "Avsluta helskärm" : "Helskärm"}
                >
                    {isFullscreen ? (
                        <Minimize2 className="h-6 w-6" />
                    ) : (
                        <Maximize2 className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className={`
                    flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth pb-32
                    ${isPlayful ? 'bg-gradient-to-b from-[#E0F2FE] to-[#F3E8FF]' : 'bg-gray-50'}
                `}
            >
                {dialogue.slice(0, visibleCount).map((line, index) => {
                    const isGnista = line.speaker === 'Gnista';
                    const isNarrator = line.speaker === 'Narrator';
                    const isMaja = line.speaker === 'Maja';

                    if (isNarrator) {
                        return (
                            <div key={index} className="flex justify-center animate-fade-in w-full">
                                <div className={`
                                    relative w-full max-w-2xl px-6 py-4 rounded-2xl text-center
                                    ${isPlayful
                                        ? 'bg-white/60 backdrop-blur-sm border-2 border-dashed border-indigo-200 text-indigo-800 font-medium font-fredoka'
                                        : 'bg-gray-100 text-gray-600 italic font-medium'
                                    }
                                `}>
                                    {line.image && (
                                        <div className="mb-4 rounded-xl overflow-hidden shadow-sm">
                                            <img src={line.image} alt="Story illustration" className="w-full h-auto object-cover" />
                                        </div>
                                    )}
                                    <p className="leading-relaxed">{line.text}</p>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className={`flex w-full ${isMaja ? 'justify-start' : 'justify-end'} animate-slide-in-up`}
                        >
                            <div className={`
                                relative max-w-[85%] sm:max-w-[75%] px-6 py-4 rounded-[2rem] shadow-sm
                                ${isMaja
                                    ? (isPlayful
                                        ? 'bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] text-gray-800 rounded-tl-none border border-white/50'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none')
                                    : (isPlayful
                                        ? 'bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] text-gray-800 rounded-tr-none border border-white/50'
                                        : 'bg-indigo-600 text-white rounded-tr-none')
                                }
                            `}>
                                {/* Speaker Label */}
                                <div className={`text-xs font-bold mb-1 opacity-70 ${isPlayful ? 'font-fredoka uppercase tracking-wide' : ''}`}>
                                    {line.speaker}
                                </div>

                                {line.image && (
                                    <div className="mb-3 rounded-xl overflow-hidden shadow-sm">
                                        <img
                                            src={line.image}
                                            alt="Story illustration"
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <p className={`leading-relaxed ${isPlayful ? 'font-nunito' : ''} ${textSize === 'large' ? 'text-2xl' : 'text-lg'}`}>
                                    {line.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white p-4">
                {!isComplete ? (
                    <button
                        onClick={handleNext}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg
                            ${isPlayful
                                ? 'bg-gradient-modern-sunset hover:shadow-orange-200 shadow-orange-100'
                                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                            }
                        `}
                    >
                        <span>Nästa</span>
                        <ChevronRight className="h-5 w-5" />
                    </button>
                ) : (
                    <div className="flex gap-3 w-full">
                        <button
                            onClick={handleReset}
                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-100 py-4 font-bold text-gray-600 transition-all hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <RefreshCw className="h-5 w-5" />
                            <span>Börja om</span>
                        </button>
                        {onComplete && (
                            <button
                                onClick={onComplete}
                                className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-4 font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg
                                    ${isPlayful
                                        ? 'bg-gradient-modern-ocean hover:shadow-teal-200 shadow-teal-100'
                                        : 'bg-green-600 hover:bg-green-700 shadow-green-200'
                                    }
                                `}
                            >
                                <span>Läs texten</span>
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            {audioPlayer}
            {isFullscreen && mounted ? createPortal(chatInterface, document.body) : chatInterface}
        </>
    );
}
