"use client";

import { useState, useRef, useEffect } from "react";
import { DialogueLine } from "@/lib/grundskola-data";
import { Sparkles, User, ChevronRight, RefreshCw } from "lucide-react";
import Image from "next/image";

interface ChatDialogProps {
    dialogue: DialogueLine[];
    imageSrc?: string;
}

export function ChatDialog({ dialogue, imageSrc }: ChatDialogProps) {
    const [visibleCount, setVisibleCount] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    const currentLine = dialogue[visibleCount - 1];
    const isComplete = visibleCount >= dialogue.length;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleCount]);

    const handleNext = () => {
        if (!isComplete) {
            setVisibleCount((prev) => prev + 1);
        }
    };

    const handleReset = () => {
        setVisibleCount(1);
    };

    return (
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
            {/* Image Header */}
            {imageSrc && (
                <div className="relative aspect-video w-full bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                        <Image
                            src={imageSrc}
                            alt="Kapitelbild"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className="h-[500px] overflow-y-auto bg-gray-50 p-6 space-y-6 scroll-smooth"
            >
                {dialogue.slice(0, visibleCount).map((line, index) => {
                    const isGnista = line.speaker === 'Gnista';
                    const isNarrator = line.speaker === 'Narrator';
                    const isMaja = line.speaker === 'Maja';

                    if (isNarrator) {
                        return (
                            <div key={index} className="flex justify-center animate-fade-in">
                                <div className="max-w-md rounded-xl bg-gray-200/50 px-4 py-2 text-sm italic text-gray-600 text-center">
                                    {line.text}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className={`flex gap-3 animate-fade-in-up ${isGnista ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            {/* Avatar */}
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${isGnista ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white' :
                                    isMaja ? 'bg-gradient-to-br from-pink-400 to-purple-500 text-white' :
                                        'bg-gray-300 text-gray-600'
                                }`}>
                                {isGnista ? <Sparkles className="h-6 w-6" /> : <User className="h-6 w-6" />}
                            </div>

                            {/* Bubble */}
                            <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm text-sm sm:text-base leading-relaxed ${isGnista
                                    ? 'rounded-tl-none bg-white text-gray-800 border border-gray-100'
                                    : 'rounded-tr-none bg-blue-600 text-white'
                                }`}>
                                <div className="mb-1 text-xs font-bold opacity-70">
                                    {line.speaker}
                                </div>
                                {line.text}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="border-t border-gray-100 bg-white p-4">
                {!isComplete ? (
                    <button
                        onClick={handleNext}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200"
                    >
                        <span>Nästa</span>
                        <ChevronRight className="h-5 w-5" />
                    </button>
                ) : (
                    <button
                        onClick={handleReset}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-4 font-bold text-gray-600 transition-all hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <RefreshCw className="h-5 w-5" />
                        <span>Börja om</span>
                    </button>
                )}
            </div>
        </div>
    );
}
