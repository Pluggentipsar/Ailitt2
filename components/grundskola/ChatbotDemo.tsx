import { useState } from 'react';
import { ChatbotActivity } from '@/lib/grundskola-data';
import { Lightbulb, Book, Star, HelpCircle, ArrowLeft, ArrowRight, Bot, User, Info, X } from 'lucide-react';

interface ChatbotDemoProps {
    activities: ChatbotActivity[];
}

export function ChatbotDemo({ activities }: ChatbotDemoProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTips, setShowTips] = useState(false);

    const currentActivity = activities[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
    };

    const icons = {
        lightbulb: Lightbulb,
        book: Book,
        star: Star,
        help: HelpCircle
    };

    const Icon = icons[currentActivity.icon] || Lightbulb;

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            {/* Header Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-500 p-3 rounded-2xl shadow-lg shadow-blue-200">
                        <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-blue-900 font-fredoka">Vad kan en chattbot göra för dig?</h2>
                        <p className="text-blue-600 font-medium">Chattbotar kan vara användbara på många sätt i skolan</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-8 px-2">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        {activities.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[400px]">
                    {/* Left Card - Activity Info */}
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-[2rem] p-8 text-white flex flex-col items-center text-center justify-center shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
                        <Icon className="w-20 h-20 mb-6 text-white drop-shadow-md" />
                        <h3 className="text-3xl font-bold font-fredoka mb-4">{currentActivity.title}</h3>
                        <p className="text-lg text-orange-50 font-medium leading-relaxed max-w-sm">
                            {currentActivity.description}
                        </p>
                    </div>

                    {/* Right Card - Chat Simulation */}
                    <div className="bg-gray-50 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 border border-gray-100 shadow-inner">
                        {/* User Message */}
                        <div className="flex gap-4 items-start animate-in slide-in-from-right-4 duration-500 fade-in">
                            <div className="bg-indigo-100 p-3 rounded-full shrink-0">
                                <User className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="space-y-2 flex-1">
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Du frågar:</span>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-800 font-medium text-lg">
                                    {currentActivity.prompt}
                                </div>
                            </div>
                        </div>

                        {/* Bot Message */}
                        <div className="flex gap-4 items-start animate-in slide-in-from-left-4 duration-700 delay-150 fade-in">
                            <div className="bg-blue-500 p-3 rounded-full shrink-0">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="space-y-2 flex-1">
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Chattboten svarar:</span>
                                <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none shadow-sm border border-blue-100 text-gray-800 text-lg leading-relaxed">
                                    {currentActivity.response}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tips Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setShowTips(true)}
                        className="group flex items-center gap-2 px-6 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-full font-bold transition-all"
                    >
                        <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Visa viktiga tips om chattbotar
                    </button>
                </div>
            </div>

            {/* Tips Modal */}
            {showTips && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowTips(false)}>
                    <div className="bg-white rounded-[2rem] max-w-2xl w-full p-8 shadow-2xl animate-in zoom-in-95 duration-300 relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowTips(false)}
                            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-3xl font-bold font-fredoka text-gray-800">Viktigt att tänka på!</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start bg-amber-50 p-4 rounded-2xl border border-amber-100">
                                <span className="text-2xl">🤔</span>
                                <div>
                                    <h4 className="font-bold text-amber-900 text-lg mb-1">Dubbelkolla alltid svaret</h4>
                                    <p className="text-amber-800">AI kan ha fel, även om den låter säker. Det kallas att den "hallucinerar". Lita inte blint på fakta från en chattbot.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                <span className="text-2xl">🤖</span>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg mb-1">Inte en kompis</h4>
                                    <p className="text-blue-800">En AI har inga känslor. Den kan vara trevlig och rolig, men den är inte en människa och kan inte vara din vän på riktigt.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-rose-50 p-4 rounded-2xl border border-rose-100">
                                <span className="text-2xl">🔒</span>
                                <div>
                                    <h4 className="font-bold text-rose-900 text-lg mb-1">Håll hemligheter hemliga</h4>
                                    <p className="text-rose-800">Skriv aldrig ditt lösenord, din adress eller hemligheter till en AI. Det du skriver kan sparas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setShowTips(false)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Jag förstår!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
