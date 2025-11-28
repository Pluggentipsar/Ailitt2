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

    // Determine color theme based on index or id for visual variety
    const colors = [
        'from-blue-500 to-cyan-400',
        'from-purple-500 to-pink-400',
        'from-green-500 to-emerald-400',
        'from-orange-500 to-amber-400',
        'from-red-500 to-rose-400',
        'from-indigo-500 to-violet-400',
        'from-teal-500 to-cyan-400',
    ];

    const gradient = colors[index % colors.length];

    return (
        <Link
            href={`/grundskola/${grade}/${module.id}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Header with gradient and icon */}
            <div className={`relative h-32 bg-gradient-to-br ${gradient} p-6`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-20" />
                <div className="absolute -bottom-6 right-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-sm backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="absolute bottom-4 left-6 text-white font-bold opacity-90">
                    Del {index + 1}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {module.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-gray-600 leading-relaxed">
                    {module.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                    <span>Öppna del</span>
                    <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}
