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
