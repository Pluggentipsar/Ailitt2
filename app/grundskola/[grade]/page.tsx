import { grundskolaModules } from "@/lib/grundskola-data";
import { ModuleCard } from "@/components/grundskola/ModuleCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        grade: string;
    };
}

export function generateStaticParams() {
    return [
        { grade: 'ak-1-3' },
        { grade: 'ak-4-6' },
    ];
}

export default function GradeDashboard({ params }: PageProps) {
    const { grade } = params;

    if (grade !== 'ak-1-3' && grade !== 'ak-4-6') {
        notFound();
    }

    const title = grade === 'ak-1-3' ? 'Lågstadiet (Åk 1-3)' : 'Mellanstadiet (Åk 4-6)';
    const description = grade === 'ak-1-3'
        ? 'Här får du lära känna AI genom berättelser och lek.'
        : 'Här dyker vi djupare i hur AI fungerar och påverkar oss.';

    const isAk13 = grade === 'ak-1-3';

    if (isAk13) {
        return (
            <div className="min-h-screen bg-transparent overflow-x-hidden">
                {/* Immersive Dashboard Hero */}
                <div className="relative pb-10 pt-12 overflow-hidden min-h-[50vh]">
                    {/* Background Blobs (Subtle) */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
                        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Link
                            href="/grundskola"
                            className="inline-flex items-center gap-2 text-gray-600 bg-white/60 hover:bg-white/90 backdrop-blur-md px-6 py-3 rounded-full mb-8 transition-all hover:scale-105 shadow-sm font-bold font-nunito"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Tillbaka till översikten
                        </Link>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-fredoka font-bold text-gray-800 mb-6 drop-shadow-sm animate-fade-in tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl font-nunito text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Module Grid with 3D Tilt Effect */}
                <div className="container mx-auto px-4 -mt-20 pb-20 relative z-20">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 perspective-1000">
                        {grundskolaModules.map((module, index) => (
                            <div key={module.id} className="transform transition-transform hover:scale-105 hover:rotate-1 duration-300">
                                <ModuleCard
                                    module={module}
                                    grade={grade}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <Link
                        href="/grundskola"
                        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Tillbaka till översikten
                    </Link>

                    <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        {description}
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {grundskolaModules.map((module, index) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            grade={grade}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
