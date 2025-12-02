import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Code, Cpu, Globe, Heart, Shield, Sparkles } from "lucide-react";
import { ModulePart } from "@/lib/grundskola-data";

interface ModuleCardProps {
    module: ModulePart;
    grade: string;
    index: number;
}

const icons = {
    'berattelsen-om-ai': BookOpen,
    'vad-ar-ai': Cpu,
    'anvanda-ai': Sparkles,
    'etik': Shield,
    'kritiskt-granska': Brain,
    'manniska-och-maskin': Heart,
    'framtid-och-samhalle': Globe,
};

export function ModuleCard({ module, grade, index }: ModuleCardProps) {
    const Icon = icons[module.id as keyof typeof icons] || BookOpen;

    const colors = [
        'from-blue-500 to-cyan-400',
        'from-purple-500 to-pink-400',
        'from-green-500 to-emerald-400',
        'from-orange-500 to-amber-400',
        'from-red-500 to-rose-400',
        'from-indigo-500 to-violet-400',
        'from-teal-500 to-cyan-400',
    ];

    const isAk13 = grade === 'ak-1-3';

    // Custom themes for Ak 1-3 based on the mockup
    const ak13Themes = [
        { // 1. Berättelsen om AI (Peach/Orange)
            bg: 'bg-gradient-to-b from-[#FF9A9E] to-[#FECFEF]',
            shadow: 'shadow-[0_10px_20px_rgba(255,154,158,0.4)]',
            border: 'border-[#FFD1D1]',
            button: 'bg-[#FF9A9E]/20 text-[#D65D62]'
        },
        { // 2. Vad är AI? (Cyan/Blue)
            bg: 'bg-gradient-to-b from-[#4FACFE] to-[#00F2FE]',
            shadow: 'shadow-[0_10px_20px_rgba(79,172,254,0.4)]',
            border: 'border-[#BAE6FF]',
            button: 'bg-[#4FACFE]/20 text-[#0075B8]'
        },
        { // 3. Använda AI (Pink/Purple)
            bg: 'bg-gradient-to-b from-[#F68084] to-[#A6C0FE]', // Adjusted to match pinkish-purple
            shadow: 'shadow-[0_10px_20px_rgba(246,128,132,0.4)]',
            border: 'border-[#FFD3D5]',
            button: 'bg-[#F68084]/20 text-[#C24D51]'
        },
        { // 4. Kritiskt granska (Yellow/Gold)
            bg: 'bg-gradient-to-b from-[#FFD200] to-[#F7971E]',
            shadow: 'shadow-[0_10px_20px_rgba(255,210,0,0.4)]',
            border: 'border-[#FFEBA3]',
            button: 'bg-[#FFD200]/20 text-[#B38800]'
        },
        { // 5. Etik (Orange/Peach)
            bg: 'bg-gradient-to-b from-[#FF9966] to-[#FF5E62]',
            shadow: 'shadow-[0_10px_20px_rgba(255,153,102,0.4)]',
            border: 'border-[#FFCCB3]',
            button: 'bg-[#FF9966]/20 text-[#CC5200]'
        },
        { // 6. Människa & maskin (Purple)
            bg: 'bg-gradient-to-b from-[#E0C3FC] to-[#8EC5FC]',
            shadow: 'shadow-[0_10px_20px_rgba(224,195,252,0.4)]',
            border: 'border-[#F2E6FF]',
            button: 'bg-[#E0C3FC]/20 text-[#8A4FBD]'
        },
        { // 7.5 AI är inte en kompis (Red/Warning)
            bg: 'bg-gradient-to-b from-[#FF512F] to-[#DD2476]',
            shadow: 'shadow-[0_10px_20px_rgba(221,36,118,0.4)]',
            border: 'border-[#FFC3A0]',
            button: 'bg-[#FF512F]/20 text-[#DD2476]'
        },
        { // 7. Framtid & samhälle (Green/Teal)
            bg: 'bg-gradient-to-b from-[#43E97B] to-[#38F9D7]',
            shadow: 'shadow-[0_10px_20px_rgba(67,233,123,0.4)]',
            border: 'border-[#C2FFD8]',
            button: 'bg-[#43E97B]/20 text-[#219653]'
        },
        { // 8. Min Tankar-trappa (Red/Pink)
            bg: 'bg-gradient-to-b from-[#FF758C] to-[#FF7EB3]',
            shadow: 'shadow-[0_10px_20px_rgba(255,117,140,0.4)]',
            border: 'border-[#FFC2CD]',
            button: 'bg-[#FF758C]/20 text-[#D43F5E]'
        },
    ];

    const theme = isAk13 ? ak13Themes[index % ak13Themes.length] : null;
    const gradient = !isAk13 ? colors[index % colors.length] : '';

    return (
        <Link
            href={`/grundskola/${grade}/${module.id}`}
            className={`group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2
                ${isAk13
                    ? `rounded-[2.5rem] ${theme?.bg} ${theme?.shadow} border-4 ${theme?.border} hover:scale-[1.02]`
                    : 'bg-white rounded-2xl shadow-lg hover:shadow-xl'
                }
            `}
        >
            {isAk13 ? (
                // New 3D Layout for Ak 1-3
                <div className="p-6 flex flex-col h-full relative z-10">
                    {/* Custom Image Header for Ak 1-3 */}
                    <div className="bg-white/30 backdrop-blur-md rounded-3xl p-4 mb-4 border border-white/40 shadow-sm flex flex-col items-center text-center">
                        <div className="relative w-full aspect-square mb-3 rounded-2xl overflow-hidden shadow-inner bg-white/50">
                            <img
                                src={module.cardImage || `/del${index + 1}.png`}
                                alt={module.title}
                                className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="font-fredoka font-bold text-gray-800 text-lg leading-tight">
                            <span className="text-sm opacity-75 block mb-1">Del {index + 1}</span>
                            <span className="text-xl">{module.title}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="font-nunito text-white/90 font-bold text-sm mb-6 leading-relaxed drop-shadow-sm flex-1">
                        {module.description}
                    </p>

                    {/* Button */}
                    <div className={`mt-auto self-start px-6 py-3 rounded-full font-fredoka font-bold text-sm flex items-center gap-2 bg-white text-gray-800 shadow-lg transition-transform group-hover:scale-105`}>
                        Starta äventyret
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            ) : (
                // Original Layout for Older Grades
                <>
                    <div className={`relative h-32 bg-gradient-to-br ${gradient} p-6`}>
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-20" />
                        <div className="absolute -bottom-6 right-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                        <div className="relative z-10 flex items-center justify-center bg-white/90 shadow-sm backdrop-blur-sm h-12 w-12 rounded-xl">
                            <Icon className="h-6 w-6 text-gray-900" />
                        </div>
                        <div className="absolute bottom-4 left-6 text-white font-bold opacity-90">
                            Del {index + 1}
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-2 font-bold transition-colors text-xl text-gray-900 group-hover:text-blue-600">
                            {module.title}
                        </h3>
                        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                            {module.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-semibold transition-all text-blue-600 group-hover:gap-3">
                            <span>Öppna del</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </>
            )}
        </Link>
    );
}
