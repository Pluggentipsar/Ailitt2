import { grundskolaModules } from "@/lib/grundskola-data";
import { ModuleContentWrapper } from "@/components/grundskola/ModuleContentWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        grade: string;
        partId: string;
    }>;
}

export function generateStaticParams() {
    const params = [];
    for (const grade of ['ak-1-3', 'ak-4-6']) {
        for (const module of grundskolaModules) {
            params.push({ grade, partId: module.id });
        }
    }
    return params;
}

export default async function ModulePartPage({ params }: PageProps) {
    const { grade, partId } = await params;
    const module = grundskolaModules.find((m) => m.id === partId);

    if (!module) {
        notFound();
    }

    const gradeLabel = grade === 'ak-1-3' ? 'Lågstadiet' : 'Mellanstadiet';

    // Map module IDs to generated images
    const imageSrc =
        module.id === 'berattelsen-om-ai' ? '/chapter_0_maja_gnista.png' :
            module.id === 'vad-ar-ai' ? '/chapter_1_gnista_inside.png' :
                module.id === 'anvanda-ai' ? '/chapter_2_super_cat.png' :
                    module.id === 'kritiskt-granska' ? '/chapter_3_kiosk.png' :
                        module.id === 'etik' ? '/chapter_4_leo_maja.png' :
                            module.id === 'manniska-och-maskin' ? '/chapter_5_sara.png' :
                                module.id === 'framtid-och-samhalle' ? '/chapter_6_safari.png' :
                                    module.id === 'min-tankar-trappa' ? '/chapter_7_stairs.png' :
                                        undefined;

    const isAk13 = grade === 'ak-1-3';



    if (isAk13) {
        return (
            <div className="min-h-screen bg-transparent overflow-x-hidden">
                {/* Immersive Hero Section */}
                <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                    </div>

                    {/* Navigation (Floating) */}
                    <div className="absolute top-0 left-0 right-0 z-50 p-6">
                        <Link
                            href={`/grundskola/${grade}`}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full text-purple-900 font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Tillbaka
                        </Link>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center pb-20">
                        <div className="mb-6 animate-fade-in-down">
                            <span className="inline-block bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-purple-800 font-bold tracking-wider shadow-sm border border-purple-100">
                                {gradeLabel} • {module.title}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-fredoka font-bold text-purple-900 mb-6 drop-shadow-sm animate-fade-in">
                            {module.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-nunito text-purple-900/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                            {module.description}
                        </p>
                    </div>
                </div>

                {/* Floating Content Card */}
                <div className="relative z-20 container mx-auto px-4 -mt-32 mb-20">
                    <ModuleContentWrapper
                        module={module}
                        grade={grade}
                        imageSrc={imageSrc}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link
                        href={`/grundskola/${grade}`}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Tillbaka till {gradeLabel}
                    </Link>
                    <div className="text-sm font-semibold text-gray-900">
                        {module.title}
                    </div>
                    <div className="w-20" /> {/* Spacer for centering */}
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                        <span className="uppercase tracking-wider">{gradeLabel}</span>
                        <span>•</span>
                        <span>{module.title}</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                        {module.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        {module.description}
                    </p>
                </header>

                {/* Main Content Area */}
                <ModuleContentWrapper
                    module={module}
                    grade={grade}
                    imageSrc={imageSrc}
                />
            </div>
        </div>
    );
}
