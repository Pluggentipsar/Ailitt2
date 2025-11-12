import Link from "next/link";
import { notFound } from "next/navigation";
import { allModules } from "contentlayer/generated";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { ModuleContent } from "@/components/module/ModuleContent";
import {
  ModuleQuickNav,
  type ModuleQuickNavItem,
} from "@/components/module/ModuleQuickNav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ModuleActions } from "@/components/module/ModuleActions";
import { getSubjectColors } from "@/lib/subject-colors";

type ModuleRouteParams = {
  subject: string;
  course: string;
  slug?: string[];
};

type ModulePageProps = {
  params: Promise<ModuleRouteParams>;
};

type ModuleNavConfig = {
  parentTitle: string;
  heading: string;
  items: ModuleQuickNavItem[];
};

const MODULE_NAV_CONFIGS: Record<string, ModuleNavConfig> = {
  "skriftlig-framstallning": {
    parentTitle: "Modul 2: Skriftlig framställning och textbearbetning",
    heading: "Modul 2 · Skriftlig framställning",
    items: [
      {
        slug: "skriftlig-framstallning",
        label: "Del 1–2",
        title: "Översikt & målbild",
        href: "/amnen/svenska/svenska-2/skriftlig-framstallning",
      },
      {
        slug: "process",
        label: "Del 3",
        title: "AI i skrivprocessens faser",
        href: "/amnen/svenska/svenska-2/process",
      },
      {
        slug: "genrer",
        label: "Del 4–5",
        title: "Genrer – PM & argumentation",
        href: "/amnen/svenska/svenska-2/genrer",
      },
      {
        slug: "sprak-kallor",
        label: "Del 6–8",
        title: "Språk, källor och respons",
        href: "/amnen/svenska/svenska-2/sprak-kallor",
      },
      {
        slug: "bedomning",
        label: "Del 9–11",
        title: "Bedömning och uppgifter",
        href: "/amnen/svenska/svenska-2/bedomning",
      },
    ],
  },
  "litteratur-litteraturhistoria": {
    parentTitle: "Modul 3: Litteratur och litteraturhistoria",
    heading: "Modul 3 · Litteratur och litteraturhistoria",
    items: [
      {
        slug: "litteratur-litteraturhistoria",
        label: "Del 1–2",
        title: "Översikt & mål",
        href: "/amnen/svenska/svenska-2/litteratur-litteraturhistoria",
      },
      {
        slug: "tolkning",
        label: "Del 3–4",
        title: "AI och tolkningens gränser",
        href: "/amnen/svenska/svenska-2/litteratur-litteraturhistoria/tolkning",
      },
      {
        slug: "epoker",
        label: "Del 5.1–5.10",
        title: "Alla litterära epoker",
        href: "/amnen/svenska/svenska-2/litteratur-litteraturhistoria/epoker",
      },
      {
        slug: "arbetsformer",
        label: "Del 5.11–5.13",
        title: "Arbetsformer & uppgifter",
        href: "/amnen/svenska/svenska-2/litteratur-litteraturhistoria/arbetsformer",
      },
    ],
  },
};

export async function generateStaticParams() {
  return allModules.map((module) => {
    const parts = module._raw.flattenedPath.split("/");
    const rawSlugParts = parts.slice(2);
    const slugParts =
      rawSlugParts[rawSlugParts.length - 1] === "page"
        ? rawSlugParts.slice(0, -1)
        : rawSlugParts;
    return {
      subject: parts[0],
      course: parts[1],
      slug: slugParts,
    };
  });
}

export async function generateMetadata({ params }: ModulePageProps) {
  const resolvedParams = await params;
  const requestedSlug = resolvedParams.slug ?? [];
  const module = allModules.find((m) => {
    const parts = m._raw.flattenedPath.split("/");
    const rawSlugParts = parts.slice(2);
    const slugParts =
      rawSlugParts[rawSlugParts.length - 1] === "page"
        ? rawSlugParts.slice(0, -1)
        : rawSlugParts;
    return (
      parts[0] === resolvedParams.subject &&
      parts[1] === resolvedParams.course &&
      slugParts.length === requestedSlug.length &&
      slugParts.every((segment, index) => segment === requestedSlug[index])
    );
  });

  if (!module) {
    return {
      title: "Modul hittades inte",
    };
  }

  return {
    title: `${module.title} | AI-litt`,
    description: module.description,
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const resolvedParams = await params;
  const requestedSlug = resolvedParams.slug ?? [];
  const module = allModules.find((m) => {
    const parts = m._raw.flattenedPath.split("/");
    const rawSlugParts = parts.slice(2);
    const slugParts =
      rawSlugParts[rawSlugParts.length - 1] === "page"
        ? rawSlugParts.slice(0, -1)
        : rawSlugParts;
    return (
      parts[0] === resolvedParams.subject &&
      parts[1] === resolvedParams.course &&
      slugParts.length === requestedSlug.length &&
      slugParts.every((segment, index) => segment === requestedSlug[index])
    );
  });

  if (!module) {
    notFound();
  }

  const colors = getSubjectColors(module.subject);
  const courseLabel = module.course?.toLowerCase() ?? "";
  const heroVariant = courseLabel.includes("svenska 1")
    ? "svenska1"
    : courseLabel.includes("svenska 2")
      ? "svenska2"
      : "default";

  const heroStyles =
    heroVariant === "svenska1"
      ? {
          backgroundImage:
            "linear-gradient(135deg, rgba(20,184,166,0.92) 0%, rgba(6,182,212,0.9) 55%, rgba(15,118,110,0.9) 100%), url(/svenska.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : heroVariant === "svenska2"
        ? {
            backgroundImage:
              "linear-gradient(125deg, rgba(15,23,42,0.95) 0%, rgba(30,64,175,0.92) 45%, rgba(59,130,246,0.9) 100%), url(/svenska.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : { background: colors.gradient };

  const slugParts = requestedSlug;
  const moduleSlug =
    module.slug ??
    (slugParts.length ? slugParts[slugParts.length - 1] : "");
  const navConfigEntry = Object.entries(MODULE_NAV_CONFIGS).find(
    ([rootSlug, config]) =>
      rootSlug === slugParts[0] ||
      config.items.some((item) => item.slug === moduleSlug) ||
      module.parent === config.parentTitle
  );
  const quickNavConfig = navConfigEntry?.[1];
  const shouldShowQuickNav = Boolean(quickNavConfig);


  const focusPillPresets: Record<string, string[]> = {
    "retorik-muntlig-framstallning": [
      "Retorikens sex delar",
      "AI som talcoach",
      "Publikanalys & ethos",
    ],
    "skriftlig-framstallning": [
      "Processlogg & stil",
      "AI-stödd skrivkraft",
      "Källkritik i text",
    ],
    process: [
      "Planera · producera · bearbeta",
      "AI som processmotor",
      "Transparens & loggbok",
    ],
    genrer: [
      "PM & argumentation",
      "Struktur + stilgrepp",
      "AI som responspartner",
    ],
    "sprak-kallor": [
      "Språkprecision",
      "Källkritik & referenser",
      "Etik i AI-stött skrivande",
    ],
    bedomning: [
      "Matriser & progression",
      "Formativ AI-respons",
      "Uppgiftsbank",
    ],
    "litteratur-litteraturhistoria": [
      "Läsning & tolkning",
      "Epoker & idéströmningar",
      "AI som litterär spegel",
    ],
    tolkning: [
      "Närläsning vs AI",
      "Karaktärsfördjupning",
      "Etiska perspektiv",
    ],
    epoker: [
      "Från antiken till nutid",
      "Idéströmningar & samhälle",
      "AI som historieberättare",
    ],
    arbetsformer: [
      "Kreativt skrivande",
      "Samtal & muntlig analys",
      "Uppgiftsbank",
    ],
  };

  const focusPills =
    heroVariant === "svenska2"
      ? focusPillPresets[moduleSlug] ??
        [module.subject, module.course].filter(Boolean)
      : [module.subject, module.course].filter(Boolean);

  const quickStats = [
    {
      label: "Tidsåtgång",
      value: module.time ?? "Flexibel planering",
      hint: "Skapa 2–3 lektionsblock",
    },
    {
      label: "Arbetsform",
      value: module.groupSize ?? "Valfri struktur",
      hint: "Växla mellan tal & labb",
    },
    {
      label: "AI-litteracitet",
      value: `${module.ai_literacy_ids?.length ?? 0} nycklar`,
      hint: "Ur AI-litt-ramverket",
    },
  ];

  const breadcrumbItems = [
    { href: "/amnen", label: "Ämnen" },
    { href: `/amnen/${resolvedParams.subject}`, label: module.subject },
    {
      href: `/amnen/${resolvedParams.subject}/${resolvedParams.course}`,
      label: module.course,
    },
    { label: module.title },
  ];

  return (
    <>
      <ScrollProgress />
      <div className="relative isolate bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-gradient-to-b from-cyan-100/70 via-transparent to-transparent blur-3xl"
        />
        <div className="container mx-auto px-4 pb-16 pt-10">
          <nav
            className="mb-8 flex flex-wrap items-center gap-1 text-sm text-gray-600 animate-fade-in"
            aria-label="Breadcrumb"
          >
            {breadcrumbItems.map((item, index) => (
              <span key={`${item.label}-${index}`} className="flex items-center gap-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900">{item.label}</span>
                )}
                {index < breadcrumbItems.length - 1 && (
                  <span aria-hidden="true" className="text-gray-400">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>

          <header
            className="relative mb-12 overflow-hidden rounded-[32px] shadow-4 ring-1 ring-white/30 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            <div className="relative isolate p-8 md:p-12" style={heroStyles}>
              <div className="absolute inset-0 bg-pattern opacity-10" />
              {heroVariant === "svenska2" && (
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
                  <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_55%)] mix-blend-screen" />
                </div>
              )}

              <div className="relative flex flex-col gap-10 lg:flex-row">
                <div className="flex-1 text-white">
                  <div className="mb-6 flex flex-wrap gap-3">
                    {focusPills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <h1 className="mb-4 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
                    {module.title}
                  </h1>

                  <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                    {module.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {module.time && <MetaBadge type="time" value={module.time} variant="light" />}
                    {module.groupSize && (
                      <MetaBadge type="group" value={module.groupSize} variant="light" />
                    )}
                  </div>
                </div>

                <div className="w-full max-w-full rounded-3xl border border-white/25 bg-white/90 p-6 text-slate-900 shadow-3 backdrop-blur lg:max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    AI + Retorik
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    Snabb överblick
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Fördjupa ethos och muntlig förmåga med guidat AI-stöd i varje fas av partes.
                  </p>
                  <dl className="mt-6 space-y-4">
                    {quickStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-3"
                      >
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                            {stat.label}
                          </dt>
                          <dd className="text-lg font-semibold text-slate-900">{stat.value}</dd>
                        </div>
                        <span className="text-xs font-medium text-slate-500">{stat.hint}</span>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      AI-litteracitet
                    </p>
                    <AiLiteracyBadgeList ids={module.ai_literacy_ids} />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="relative z-10 -mt-4 mb-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={`overview-${stat.label}`}
                className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-2"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.hint}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-teal-50/70 p-5 shadow-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Snabbåtkomst
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Spara, dela eller skriv ut modulen
              </p>
              <div className="mt-4 rounded-2xl border border-white/60 bg-white/80 p-3">
                <ModuleActions
                  moduleId={module._id}
                  title={module.title}
                  url={module.url}
                  description={module.description}
                  subject={module.subject}
                  course={module.course}
                />
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-6xl rounded-[32px] border border-slate-100 bg-white/95 px-4 py-8 shadow-3 md:px-8 md:py-12">
            {shouldShowQuickNav && quickNavConfig && (
              <ModuleQuickNav
                heading={quickNavConfig.heading}
                currentSlug={moduleSlug}
                items={quickNavConfig.items}
                className="mb-10"
              />
            )}
            <ModuleContent module={module} />
          </section>
        </div>
      </div>
    </>
  );
}
