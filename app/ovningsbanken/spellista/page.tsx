import { Suspense } from "react";
import type { Metadata } from "next";
import { BankSpellistaRunner } from "@/components/ovningsbanken/BankSpellistaRunner";

export const metadata: Metadata = {
  title: "Spellista · AI-övningsbanken",
  description: "En sekventiell genomgång av valda övningar.",
};

export default function SpellistaPage() {
  return (
    <Suspense fallback={null}>
      <BankSpellistaRunner />
    </Suspense>
  );
}
