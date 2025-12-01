"use client";

import { useState } from "react";
import { ModulePart } from "@/lib/grundskola-data";
import { ChatDialog } from "@/components/grundskola/ChatDialog";
import { ActivityHub } from "./ActivityHub";
import { BookOpen, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, BrainCircuit, GraduationCap, PlayCircle, Maximize2, X, Star } from "lucide-react";
import { TeacherInstructions } from "@/components/grundskola/TeacherInstructions";
import confetti from 'canvas-confetti';

interface ModuleContentWrapperProps {
    module: ModulePart;
    grade: string;
    imageSrc?: string;
}

type Step = 'story' | 'learning' | 'exercises';

export function ModuleContentWrapper({ module, grade, imageSrc }: ModuleContentWrapperProps) {
    const [currentStep, setCurrentStep] = useState<Step>('story');
    const [completedSteps, setCompletedSteps] = useState<Step[]>([]);
    const [showImageModal, setShowImageModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);

    const isAk13 = grade === 'ak-1-3';

    const steps: { id: Step; label: string; icon: React.ElementType; description: string }[] = [
        { id: 'story', label: 'Berättelse', icon: Sparkles, description: 'Lyssna och häng med' },
        { id: 'learning', label: 'Läs och lär', icon: BookOpen, description: 'Fördjupa dig' },
        { id: 'exercises', label: 'Övningar', icon: BrainCircuit, description: 'Testa dina kunskaper' },
    ];

    const handleStepComplete = (step: Step) => {
        if (!completedSteps.includes(step)) {
            setCompletedSteps([...completedSteps, step]);
            if (isAk13) {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8E53']
                });
            }
        }
    };

    const goToNextStep = () => {
        if (currentStep === 'story') {
            handleStepComplete('story');
            setCurrentStep('learning');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (currentStep === 'learning') {
            handleStepComplete('learning');
            setCurrentStep('exercises');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPrevStep = () => {
        if (currentStep === 'learning') setCurrentStep('story');
        else if (currentStep === 'exercises') setCurrentStep('learning');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="space-y-12">
            {/* 3D App Icon Stepper Navigation */}
            <div className="relative max-w-3xl mx-auto px-4 py-8">
                <div className="flex justify-center items-center gap-6 sm:gap-12">
                    {steps.map((step, index) => {
                        const isActive = currentStep === step.id;
                        const isCompleted = completedSteps.includes(step.id) || steps.findIndex(s => s.id === currentStep) > index;

                        // Custom colors for each step icon
                        const iconColors = {
                            story: 'bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] shadow-[0_8px_16px_rgba(79,172,254,0.4)]', // Blue/Cyan
                            learning: 'bg-gradient-to-br from-[#FFD200] to-[#F7971E] shadow-[0_8px_16px_rgba(255,210,0,0.4)]', // Yellow/Orange
                            exercises: 'bg-gradient-to-br from-[#A0E1F5] to-[#E0C3FC] shadow-[0_8px_16px_rgba(160,225,245,0.4)]', // Pastel
                        };

                        return (
                            <button
                                key={step.id}
                                onClick={() => {
                                    setCurrentStep(step.id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`group relative flex flex-col items-center gap-3 transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}
                            >
                                <div className={`
                                    w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] flex items-center justify-center border-4 border-white
                                    ${iconColors[step.id]}
                                    ${isActive ? 'ring-4 ring-white/50' : ''}
                                `}>
                                    <step.icon className="w-10 h-10 text-white drop-shadow-md" />
                                </div>
                                {isActive && (
                                    <div className="absolute -bottom-8 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold font-fredoka text-gray-700 shadow-sm animate-fade-in-up">
                                        {step.label}
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[600px] relative">
                {currentStep === 'story' && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
                        {grade === 'ak-1-3' && module.story ? (
                            <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                                <ChatDialog
                                    dialogue={module.story.dialogue}
                                    imageSrc={imageSrc}
                                    audioSrc="/saga1.wav"
                                    onComplete={goToNextStep}
                                    variant={isAk13 ? 'playful' : 'standard'}
                                />
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                <p className="text-gray-500 font-medium">Ingen berättelse tillgänglig för denna del.</p>
                            </div>
                        )}
                        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 gap-4 px-4">
                            <button
                                onClick={goToPrevStep}
                                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-600 font-bold text-lg flex items-center justify-center gap-2 px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Tillbaka
                            </button>
                            <button
                                onClick={goToNextStep}
                                className={`group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1
                                    ${isAk13
                                        ? 'bg-gradient-to-r from-[#FF9A9E] to-[#FECFEF] text-white px-10 py-5 text-xl hover:shadow-[0_10px_20px_rgba(255,154,158,0.4)]'
                                        : 'bg-blue-600 text-white px-8 py-4'
                                    }
                                `}
                            >
                                {isAk13 ? 'Gå vidare!' : 'Övningar'}
                                <ArrowRight className={`group-hover:translate-x-1 transition-transform w-6 h-6`} />
                            </button>
                            <button
                                onClick={goToNextStep}
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 bg-gradient-to-r from-[#FF9966] to-[#FF5E62] text-white px-10 py-5 text-xl hover:shadow-[0_10px_20px_rgba(255,153,102,0.4)]"
                            >
                                Till övningarna!
                                <ArrowRight className="group-hover:translate-x-1 transition-transform w-6 h-6" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 'learning' && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            {/* Left Column: Media (Image & Video) */}
                            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                                {/* Image Card */}
                                {module.learningMaterial?.image && (
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                                        <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

                                            <div className="relative h-[300px] sm:h-[400px] w-full p-6 flex items-center justify-center">
                                                <img
                                                    src={module.learningMaterial.image}
                                                    alt={module.learningMaterial.title}
                                                    className="max-h-full max-w-full object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                                                    onClick={() => setShowImageModal(true)}
                                                />

                                                <button
                                                    onClick={() => setShowImageModal(true)}
                                                    className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                                                >
                                                    <Maximize2 className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Video Card */}
                                {module.learningMaterial?.video && (
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-400 to-pink-300 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                                        <div className="relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-video">
                                            <video
                                                src={module.learningMaterial.video}
                                                className="w-full h-full object-cover"
                                                controls
                                                poster="/chapter_0_maja_gnista.png" // Fallback poster
                                            />
                                            <button
                                                onClick={() => setShowVideoModal(true)}
                                                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
                                            >
                                                <Maximize2 className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Text Content */}
                            <div className="lg:col-span-7">
                                {module.learningMaterial ? (
                                    <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl p-6 sm:p-10 border border-white/50 h-full">
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                                            <h2 className="text-3xl sm:text-4xl font-fredoka font-bold text-gray-800 leading-tight">
                                                {module.learningMaterial.title}
                                            </h2>
                                            <button className="bg-[#E0C3FC]/20 hover:bg-[#E0C3FC]/40 text-[#8A4FBD] px-5 py-2.5 rounded-full font-bold transition-colors flex items-center gap-2 whitespace-nowrap">
                                                <PlayCircle className="w-5 h-5" />
                                                Lyssna
                                            </button>
                                        </div>

                                        <div className="space-y-6">
                                            {module.learningMaterial.content.split('\n').map((paragraph, idx) => {
                                                if (!paragraph.trim()) return null;

                                                // 3D "Viktigt!" Box Implementation
                                                if (paragraph.startsWith('👉')) {
                                                    return (
                                                        <div key={idx} className="relative my-10 group">
                                                            {/* 3D Tab Effect */}
                                                            <div className="absolute -top-4 -right-2 bg-[#FFD200] text-[#B38800] px-4 py-1.5 rounded-full font-fredoka font-bold shadow-lg transform rotate-6 border-2 border-white z-20 text-sm">
                                                                Viktigt!
                                                            </div>

                                                            <div className={`
                                                                relative bg-gradient-to-b from-[#FFF8D9] to-[#FFF0B3] 
                                                                rounded-[2rem] p-6 
                                                                shadow-[0_8px_0px_0px_rgba(255,210,0,0.2)] 
                                                                border-4 border-white
                                                                transform transition-transform hover:-translate-y-1
                                                            `}>
                                                                <div className="flex gap-4 items-start">
                                                                    <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0">
                                                                        <span className="text-3xl">💡</span>
                                                                    </div>
                                                                    <p className="font-nunito text-lg text-[#7A5C00] font-bold leading-relaxed">
                                                                        {paragraph.substring(2).trim().replace(/\*\*/g, '')}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }

                                                // Bullet Point Implementation
                                                if (paragraph.trim().startsWith('•')) {
                                                    return (
                                                        <div key={idx} className="flex items-start gap-3 my-2 pl-4">
                                                            <div className="bg-yellow-100 p-1.5 rounded-full mt-1 shrink-0">
                                                                <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                                                            </div>
                                                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium font-nunito">
                                                                {paragraph.replace('•', '').trim()}
                                                            </p>
                                                        </div>
                                                    );
                                                }

                                                // Regular Text
                                                return (
                                                    <p key={idx} className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium font-nunito">
                                                        {paragraph.replace(/\*\*/g, '')}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                        <p className="text-gray-500">Ingen lästext tillgänglig.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-4 gap-4 px-4">
                            <button
                                onClick={goToPrevStep}
                                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-600 font-bold text-lg flex items-center justify-center gap-2 px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Tillbaka
                            </button>
                            <button
                                onClick={goToNextStep}
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 bg-gradient-to-r from-[#FF9966] to-[#FF5E62] text-white px-10 py-5 text-xl hover:shadow-[0_10px_20px_rgba(255,153,102,0.4)]"
                            >
                                Till övningarna!
                                <ArrowRight className="group-hover:translate-x-1 transition-transform w-6 h-6" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 'exercises' && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out space-y-12">
                        {module.activities && module.activities.length > 0 ? (
                            <ActivityHub activities={module.activities} />
                        ) : (
                            <>
                                <section className={`${isAk13 ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border-4 border-teal-100' : 'bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100'} rounded-[2.5rem] p-8 sm:p-12 shadow-sm`}>
                                    <div className={`flex items-center gap-4 mb-8 ${isAk13 ? 'text-modern-text' : 'text-indigo-900'}`}>
                                        <div className={`${isAk13 ? 'bg-gradient-modern-ocean text-white' : 'bg-white text-indigo-600'} p-3 rounded-2xl shadow-sm`}>
                                            <BrainCircuit className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h2 className={`text-3xl font-bold ${isAk13 ? 'font-fredoka' : ''}`}>Diskutera och fundera</h2>
                                            <p className={`${isAk13 ? 'text-gray-600 font-nunito' : 'text-indigo-600/80'} font-medium`}>Tänk till tillsammans</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className={`group relative bg-white p-8 transition-all duration-500
                                            ${isAk13
                                                ? 'rounded-[2rem] shadow-[0_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_0px_0px_rgba(78,205,196,0.3)] hover:-translate-y-1 border-2 border-gray-100 hover:border-teal-200'
                                                : 'rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md hover:border-indigo-100'
                                            }
                                        `}>
                                            {isAk13 && <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🤔</div>}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`${isAk13 ? 'bg-gradient-modern-ocean text-white' : 'bg-indigo-100 text-indigo-700'} w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm shadow-sm`}>1</span>
                                                <h3 className={`font-bold text-gray-900 text-lg ${isAk13 ? 'font-fredoka' : ''}`}>Första frågan</h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed font-nunito">
                                                Här kommer en diskussionsfråga eller övning som passar till innehållet. Vad tror ni händer om...?
                                            </p>
                                        </div>
                                        <div className={`group relative bg-white p-8 transition-all duration-500
                                            ${isAk13
                                                ? 'rounded-[2rem] shadow-[0_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_0px_0px_rgba(78,205,196,0.3)] hover:-translate-y-1 border-2 border-gray-100 hover:border-teal-200'
                                                : 'rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md hover:border-indigo-100'
                                            }
                                        `}>
                                            {isAk13 && <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">✨</div>}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`${isAk13 ? 'bg-gradient-modern-ocean text-white' : 'bg-indigo-100 text-indigo-700'} w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm shadow-sm`}>2</span>
                                                <h3 className={`font-bold text-gray-900 text-lg ${isAk13 ? 'font-fredoka' : ''}`}>Andra frågan</h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed font-nunito">
                                                En till fråga att fundera på tillsammans i klassen eller i mindre grupper. Hur skulle ni göra om...?
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden">
                                    <div className="bg-gray-100 px-8 py-4 border-b border-gray-200 flex items-center gap-3">
                                        <GraduationCap className="w-5 h-5 text-gray-600" />
                                        <h3 className="font-bold text-gray-700">Lärarhandledning</h3>
                                    </div>
                                    <div className="p-8">
                                        <TeacherInstructions>
                                            <div className="space-y-6 text-gray-600">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Syfte och mål</h4>
                                                    <p>Här beskrivs syftet med momentet och kopplingar till läroplanen.</p>
                                                </div>
                                                <div className="h-px bg-gray-200" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Genomförande</h4>
                                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                                        <li>Steg 1: Introducera ämnet...</li>
                                                        <li>Steg 2: {grade === 'ak-1-3' ? 'Läs berättelsen tillsammans...' : 'Titta på videon...'}</li>
                                                        <li>Steg 3: Diskutera frågorna...</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </TeacherInstructions>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex justify-start pt-4">
                            <button
                                onClick={goToPrevStep}
                                className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Tillbaka till texten
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {showImageModal && module.learningMaterial?.image && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowImageModal(false)}>
                    <button
                        onClick={() => setShowImageModal(false)}
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={module.learningMaterial.image}
                        alt={module.learningMaterial.title}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowVideoModal(false)}>
                    <button
                        onClick={() => setShowVideoModal(false)}
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="w-full max-w-7xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
                        {module.learningMaterial?.video && (
                            <video
                                src={module.learningMaterial.video}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
