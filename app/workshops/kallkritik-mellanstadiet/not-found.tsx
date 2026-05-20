import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="font-display text-9xl text-stone-300 leading-none mb-2">
        ¯\_(ツ)_/¯
      </div>
      <h1 className="font-display text-4xl text-stone-900 mb-3">
        Den här aktiviteten finns inte
      </h1>
      <p className="text-stone-600 max-w-md mx-auto mb-6">
        Antingen har den döpts om, eller så är länken trasig. Gå tillbaka till
        sandlådan så kan du leta vidare.
      </p>
      <Link
        href="/workshops/kallkritik-mellanstadiet"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-workshop-canvas font-medium hover:bg-stone-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka till sandlådan
      </Link>
    </div>
  );
}
