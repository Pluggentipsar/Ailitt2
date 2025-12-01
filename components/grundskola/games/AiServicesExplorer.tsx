"use client";

import { useState } from "react";
import { X, Volume2, Smartphone, Tv, Gamepad2, Mic, Map, Search, Languages, Bot, Car, Watch, Camera, Sparkles, Lightbulb } from "lucide-react";

interface AiService {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    description: string;
    examples: string[];
    didYouKnow: string;
}

const AI_SERVICES: AiService[] = [
    {
        id: 'smartphone',
        title: 'Mobiltelefon',
        icon: Smartphone,
        color: 'bg-blue-100 text-blue-600',
        description: 'Din mobil använder AI för att känna igen ditt ansikte (FaceID), förstå vad du säger till Siri/Google, och för att ta bättre bilder.',
        examples: ['Ansiktslås', 'Röstassistent', 'Kameraförbättring'],
        didYouKnow: 'När du tar ett foto fixar AI:n ljuset och färgerna automatiskt på mindre än en sekund!'
    },
    {
        id: 'streaming',
        title: 'Streaming',
        icon: Tv,
        color: 'bg-red-100 text-red-600',
        description: 'Netflix och YouTube använder AI för att gissa vad du vill titta på härnäst, baserat på vad du gillat förut.',
        examples: ['"Rekommenderat för dig"', 'Autoplay', 'Sökförslag'],
        didYouKnow: 'AI:n jämför vad du tittar på med miljoner andra tittare för att hitta rätt tips.'
    },
    {
        id: 'games',
        title: 'Datorspel',
        icon: Gamepad2,
        color: 'bg-purple-100 text-purple-600',
        description: 'I spel styr AI:n fiender och andra karaktärer. Den bestämmer hur de ska röra sig, attackera eller prata med dig.',
        examples: ['Fiender som gömmer sig', 'NPC:er som pratar', 'Banor som skapas automatiskt'],
        didYouKnow: 'I vissa spel lär sig fienderna av hur du spelar och blir svårare att besegra!'
    },
    {
        id: 'speakers',
        title: 'Smarta Högtalare',
        icon: Mic,
        color: 'bg-cyan-100 text-cyan-600',
        description: 'Högtalaren lyssnar efter sitt "vakna-ord" och använder AI för att omvandla ditt tal till text som den kan förstå.',
        examples: ['Sätta timer', 'Spela musik', 'Svara på frågor'],
        didYouKnow: 'Den måste filtrera bort ljud från TV:n och diskmaskinen för att höra just din röst.'
    },
    {
        id: 'maps',
        title: 'Kartor & GPS',
        icon: Map,
        color: 'bg-green-100 text-green-600',
        description: 'Kart-appar använder AI för att räkna ut den snabbaste vägen. Den kollar på trafikläget just nu och gissar hur lång tid det tar.',
        examples: ['Hitta snabbaste vägen', 'Varna för köer', 'Beräkna ankomsttid'],
        didYouKnow: 'AI:n kan se om många mobiler rör sig långsamt på en väg och förstå att det är bilkö.'
    },
    {
        id: 'search',
        title: 'Sökmotorer',
        icon: Search,
        color: 'bg-yellow-100 text-yellow-600',
        description: 'När du googlar hjälper AI till att förstå vad du menar, även om du stavar fel. Den sorterar miljarder sidor för att hitta rätt svar.',
        examples: ['Rättstavning', 'Bildsökning', 'Snabba svar'],
        didYouKnow: 'Google använder AI för att förstå "meningen" bakom din sökning, inte bara orden.'
    },
    {
        id: 'translate',
        title: 'Översättning',
        icon: Languages,
        color: 'bg-indigo-100 text-indigo-600',
        description: 'Appar som översätter text använder AI för att förstå grammatik och sammanhang, så att det inte bara blir ord-för-ord.',
        examples: ['Google Translate', 'Översätta menyer med kameran', 'Realtids-tolkning'],
        didYouKnow: 'AI-översättare har tränats genom att läsa miljontals böcker som finns på flera språk.'
    },
    {
        id: 'chatbots',
        title: 'Chatbotar',
        icon: Bot,
        color: 'bg-teal-100 text-teal-600',
        description: 'Chatbotar på hemsidor eller i appar är AI som tränats att svara på vanliga frågor och hjälpa kunder dygnet runt.',
        examples: ['Kundtjänst', 'Läxhjälp', 'Virtuella assistenter'],
        didYouKnow: 'De flesta chatbotar gissar bara vilket svar som passar bäst, de "förstår" inte problemet på riktigt.'
    },
    {
        id: 'cars',
        title: 'Smarta Bilar',
        icon: Car,
        color: 'bg-orange-100 text-orange-600',
        description: 'Moderna bilar har AI som hjälper föraren. Den kan bromsa för hinder, hålla bilen i filen eller till och med parkera själv.',
        examples: ['Autobroms', 'Filhållare', 'Parkeringhjälp'],
        didYouKnow: 'Självkörande bilar använder kameror och laser för att bygga en 3D-karta av världen runt omkring.'
    },
    {
        id: 'social',
        title: 'Sociala Medier',
        icon: Camera,
        color: 'bg-pink-100 text-pink-600',
        description: 'Filter som ger dig kaninöron eller smink använder AI för att hitta ditt ansikte. Flödet styrs också av AI som visar det du gillar.',
        examples: ['Ansiktsfilter', 'TikTok-flödet', 'Tagga vänner automatiskt'],
        didYouKnow: 'AI:n mäter exakt hur många sekunder du tittar på en video för att veta om den ska visa fler liknande.'
    },
    {
        id: 'vacuum',
        title: 'Robotdammsugare',
        icon: Sparkles,
        color: 'bg-slate-100 text-slate-600',
        description: 'Robotdammsugaren använder sensorer och AI för att rita en karta över ditt hem och planera den bästa städvägen.',
        examples: ['Undvika trappor', 'Hitta tillbaka till laddaren', 'Känna igen mattor'],
        didYouKnow: 'Vissa robotar kan "se" skillnad på en strumpa och en sladd på golvet!'
    },
    {
        id: 'health',
        title: 'Hälsa & Klockor',
        icon: Watch,
        color: 'bg-emerald-100 text-emerald-600',
        description: 'Smarta klockor använder AI för att tolka dina rörelser. Den förstår om du går, springer, simmar eller sover.',
        examples: ['Stegräknare', 'Sömnanalys', 'Upptäcka fall'],
        didYouKnow: 'AI:n letar efter mönster i din puls för att varna om något inte står rätt till.'
    }
];

interface AiServicesExplorerProps {
    onClose: () => void;
}

export function AiServicesExplorer({ onClose }: AiServicesExplorerProps) {
    const [selectedService, setSelectedService] = useState<AiService | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sv-SE';
            utterance.rate = 0.9;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopSpeaking = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col animate-in fade-in duration-300 font-fredoka">
            {/* Header */}
            <div className="bg-white p-4 flex items-center justify-between border-b border-slate-200 shadow-sm z-20">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <Search className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-slate-800 tracking-wide">AI finns överallt!</h2>
                        <p className="text-slate-500 font-medium text-sm">
                            Klicka på ikonerna för att upptäcka
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        stopSpeaking();
                        onClose();
                    }}
                    className="p-3 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 transition-all"
                >
                    <X className="w-7 h-7" />
                </button>
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-6 sm:p-8">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {AI_SERVICES.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-slate-100"
                        >
                            <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <service.icon className="w-10 h-10" strokeWidth={2} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">{service.title}</h3>
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                Klicka för info
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[10000] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 shadow-2xl animate-in zoom-in-95 duration-300 relative overflow-hidden border-4 border-white">
                        <div className={`absolute top-0 left-0 w-full h-4 ${selectedService.color.split(' ')[0]}`} />

                        <button
                            onClick={() => {
                                stopSpeaking();
                                setSelectedService(null);
                            }}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                            <X className="w-6 h-6 text-slate-500" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className={`w-24 h-24 rounded-3xl ${selectedService.color} flex items-center justify-center mb-6 shadow-lg animate-bounce`}>
                                <selectedService.icon className="w-12 h-12" strokeWidth={2} />
                            </div>

                            <h3 className="font-black text-3xl text-slate-800 mb-4">{selectedService.title}</h3>

                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                                {selectedService.description}
                            </p>

                            {/* Examples */}
                            <div className="w-full bg-slate-50 rounded-2xl p-5 mb-6 text-left">
                                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Exempel
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedService.examples.map((ex, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white rounded-lg text-sm font-bold text-slate-700 shadow-sm border border-slate-100">
                                            {ex}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Did You Know */}
                            <div className="w-full bg-yellow-50 rounded-2xl p-5 mb-8 text-left border border-yellow-100">
                                <h4 className="font-bold text-yellow-600 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4" />
                                    Visste du att?
                                </h4>
                                <p className="text-yellow-800 font-medium text-sm leading-relaxed">
                                    {selectedService.didYouKnow}
                                </p>
                            </div>

                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={() => speak(`${selectedService.title}. ${selectedService.description} Visste du att? ${selectedService.didYouKnow}`)}
                                    className={`
                                        flex-1 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
                                        ${isSpeaking
                                            ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-400'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }
                                    `}
                                >
                                    <Volume2 className={`w-6 h-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                    Lyssna
                                </button>
                                <button
                                    onClick={() => {
                                        stopSpeaking();
                                        setSelectedService(null);
                                    }}
                                    className="flex-1 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
                                >
                                    Jag förstår!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
