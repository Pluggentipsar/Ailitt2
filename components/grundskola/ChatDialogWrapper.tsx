"use client";

import { ChatDialog } from "@/components/grundskola/ChatDialog";
import { DialogueLine } from "@/lib/grundskola-data";

interface ChatDialogWrapperProps {
    dialogue: DialogueLine[];
    imageSrc?: string;
    targetId: string;
}

export function ChatDialogWrapper({ dialogue, imageSrc, targetId }: ChatDialogWrapperProps) {
    return (
        <ChatDialog
            dialogue={dialogue}
            imageSrc={imageSrc}
            onComplete={() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        />
    );
}
