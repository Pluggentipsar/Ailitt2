import React from 'react';

export default async function GradeLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ grade: string }>;
}) {
    const { grade } = await params;
    const isAk13 = grade === 'ak-1-3';

    return (
        <div className="relative min-h-screen">
            {isAk13 && (
                <div className="fixed inset-0 z-[-1]">
                    <img
                        src="/ak1-3-bg.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay to ensure text readability if needed */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                </div>
            )}
            {children}
        </div>
    );
}
