"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

interface TeacherInstructionsProps {
    children: React.ReactNode;
}

export function TeacherInstructions({ children }: TeacherInstructionsProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-8 overflow-hidden rounded-xl border-2 border-indigo-100 bg-indigo-50/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between bg-indigo-100/50 px-6 py-4 text-left transition-colors hover:bg-indigo-100"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-indigo-900">Lärarhandledning</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
            </button>

            {isOpen && (
                <div className="animate-fade-in border-t border-indigo-100 bg-white px-6 py-6">
                    <div className="prose prose-indigo max-w-none">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
