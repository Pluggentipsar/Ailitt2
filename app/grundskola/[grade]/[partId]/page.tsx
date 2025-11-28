import { grundskolaModules } from "@/lib/grundskola-data";
import { TeacherInstructions } from "@/components/grundskola/TeacherInstructions";
import { ChatDialog } from "@/components/grundskola/ChatDialog";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessageCircle, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        grade: string;
        partId: string;
    };
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

export default function ModulePartPage({ params }: PageProps) {
    const { grade, partId } = params;
    const module = grundskolaModules.find((m) => m.id === partId);

    if (!module) {
        notFound();
    }

    const gradeLabel = grade === 'ak-1-3' ? 'Lågstadiet' : 'Mellanstadiet';

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
                <div className="space-y-16">

                    {/* Grade 1-3: Story Mode */}
                    {grade === 'ak-1-3' && module.story ? (
                        <section>
                            <div className="flex items-center justify-center gap-3 text-blue-600 mb-8">
                                <BookOpen className="h-8 w-8" />
                                <h2 className="text-3xl font-bold m-0">Berättelse</h2>
                            </div>
                            <ChatDialog
                                dialogue={module.story.dialogue}
                                imageSrc={
                                    // Map module IDs to generated images
                                    module.id === 'berattelsen-om-ai' ? '/chapter_0_maja_gnista.png' :
                                        module.id === 'vad-ar-ai' ? '/chapter_1_gnista_inside.png' :
                                            module.id === 'anvanda-ai' ? '/chapter_2_super_cat.png' :
                                                module.id === 'kritiskt-granska' ? '/chapter_3_kiosk.png' :
                                                    module.id === 'etik' ? '/chapter_4_leo_maja.png' :
                                                        module.id === 'manniska-och-maskin' ? '/chapter_5_sara.png' :
                                                            module.id === 'framtid-och-samhalle' ? '/chapter_6_safari.png' :
                                                                module.id === 'min-tankar-trappa' ? '/chapter_7_stairs.png' :
                                                                    undefined
                                }
                            />
                        </section>
                    ) : (
                        /* Grade 4-6: Standard Layout */
                        <>
                            {/* Section 1: Introduction/Story */}
                            <section className="prose prose-lg prose-blue mx-auto">
                                <div className="flex items-center gap-3 text-blue-600 mb-4 not-prose">
                                    <BookOpen className="h-6 w-6" />
                                    <h2 className="text-2xl font-bold m-0">Läs och lär</h2>
                                </div>
                                <p className="lead">
                                    Här kommer introduktionstexten att ligga. Den anpassas efter årskursen.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </section>

                            {/* Section 2: Video */}
                            <section className="rounded-2xl bg-gray-900 p-1">
                                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-800">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <PlayCircle className="mx-auto h-16 w-16 text-white/50" />
                                            <p className="mt-4 text-gray-400">Video kommer snart</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {/* Section 3: Exercises/Discussion (Shared or adapted) */}
                    <section className="rounded-2xl bg-blue-50 p-8 sm:p-12">
                        <div className="flex items-center gap-3 text-blue-800 mb-6">
                            <MessageCircle className="h-6 w-6" />
                            <h2 className="text-2xl font-bold">Diskutera och fundera</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <h3 className="mb-3 font-semibold text-gray-900">Fråga 1</h3>
                                <p className="text-gray-600">
                                    Här kommer en diskussionsfråga eller övning som passar till innehållet.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <h3 className="mb-3 font-semibold text-gray-900">Fråga 2</h3>
                                <p className="text-gray-600">
                                    En till fråga att fundera på tillsammans i klassen eller i mindre grupper.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Teacher Instructions */}
                    <TeacherInstructions>
                        <h3>Syfte och mål</h3>
                        <p>
                            Här beskrivs syftet med momentet och kopplingar till läroplanen.
                        </p>
                        <h3>Genomförande</h3>
                        <ul>
                            <li>Steg 1: Introducera ämnet...</li>
                            <li>Steg 2: {grade === 'ak-1-3' ? 'Läs berättelsen tillsammans...' : 'Titta på videon...'}</li>
                            <li>Steg 3: Diskutera frågorna...</li>
                        </ul>
                        <h3>Tips</h3>
                        <p>
                            Tänk på att anpassa nivån efter elevernas förkunskaper.
                        </p>
                    </TeacherInstructions>

                </div>
            </div>
        </div>
    );
}
