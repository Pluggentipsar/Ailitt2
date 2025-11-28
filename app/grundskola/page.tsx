import Link from "next/link";
import { ArrowRight, GraduationCap, School } from "lucide-react";

export default function GrundskolaHub() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 p-3">
                        <School className="h-8 w-8 text-blue-600" />
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        AI-litteracitet för <span className="text-blue-600">grundskolan</span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
                        Ett digitalt läromedel för att utforska och förstå AI. Välj din årskurs för att komma igång.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
                        {/* Åk 1-3 Card */}
                        <Link
                            href="/grundskola/ak-1-3"
                            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-blue-200"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-6 rounded-2xl bg-blue-100 p-4 transition-transform duration-300 group-hover:scale-110">
                                    <span className="text-3xl font-bold text-blue-600">1-3</span>
                                </div>
                                <h2 className="mb-3 text-2xl font-bold text-gray-900">Lågstadiet</h2>
                                <p className="mb-6 text-center text-gray-600">
                                    Upptäck AI genom sagor, lek och enkla övningar.
                                </p>
                                <div className="flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-3 transition-all">
                                    <span>Starta äventyret</span>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </Link>

                        {/* Åk 4-6 Card */}
                        <Link
                            href="/grundskola/ak-4-6"
                            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-indigo-200"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-6 rounded-2xl bg-indigo-100 p-4 transition-transform duration-300 group-hover:scale-110">
                                    <span className="text-3xl font-bold text-indigo-600">4-6</span>
                                </div>
                                <h2 className="mb-3 text-2xl font-bold text-gray-900">Mellanstadiet</h2>
                                <p className="mb-6 text-center text-gray-600">
                                    Utforska tekniken, etiken och framtiden med AI.
                                </p>
                                <div className="flex items-center gap-2 font-semibold text-indigo-600 group-hover:gap-3 transition-all">
                                    <span>Börja utforska</span>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
