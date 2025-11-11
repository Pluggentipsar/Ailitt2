"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { Module } from "contentlayer/generated";
import { ActivityBlock } from "@/components/ui/ActivityBlock";
import { extractHeadings } from "@/lib/toc-utils";
import { TableOfContents } from "@/components/navigation/TableOfContents";
import { MobileTOCDrawer } from "@/components/navigation/MobileTOCDrawer";
import { SectionActions } from "@/components/ui/SectionActions";
import { useMemo, createContext, useContext } from "react";
import {
  TaskDetails,
  TaskCard,
  TaskDeck,
  UppgiftsbankHighlights,
} from "@/components/uppgiftsbank/UppgiftsbankUI";
import { TalbankenItem } from "@/components/talbank/TalbankenItem";
import {
  TalbankenBoard,
  TalbankenCard,
  TalbankenTimeline,
  TalbankenTimelineItem,
  TalbankenUsage,
} from "@/components/talbank/TalbankenLayout";
import { cn } from "@/lib/utils";

interface ModuleContentProps {
  module: Module;
}

// Context to share module info and heading ID map
export const ModuleContext = createContext<{
  moduleId: string;
  moduleTitle: string;
  moduleUrl: string;
  subject?: string;
  course?: string;
  headingIdMap: Map<string, string>;
}>({
  moduleId: "",
  moduleTitle: "",
  moduleUrl: "",
  headingIdMap: new Map(),
});

export function ModuleContent({ module }: ModuleContentProps) {
  const headings = extractHeadings(module.body.raw);

  // Create a map of heading text -> id for quick lookup
  const headingIdMap = useMemo(() => {
    const map = new Map<string, string>();
    headings.forEach((heading) => {
      map.set(heading.text, heading.id);
    });
    return map;
  }, [headings]);

  const moduleContext = useMemo(
    () => ({
      moduleId: module._id,
      moduleTitle: module.title,
      moduleUrl: module.url,
      subject: module.subject,
      course: module.course,
      headingIdMap,
    }),
    [module, headingIdMap]
  );

  const MDXContent = useMDXComponent(module.body.code);

  // Custom H2 component with section actions
  const H2WithActions = ({ children, className, ...props }: any) => {
    const context = useContext(ModuleContext);
    const title = typeof children === "string" ? children : "";
    const id = context.headingIdMap.get(title) || "";

    return (
      <div className="group relative scroll-mt-28">
        <h2
          id={id}
          {...props}
          className={cn(
            "relative mb-8 mt-12 flex flex-col text-3xl font-semibold tracking-tight text-slate-900 lg:text-[2.15rem]",
            "before:absolute before:-left-4 before:top-6 before:h-10 before:w-10 before:-translate-x-full before:rounded-full before:bg-teal-500/10 before:blur-2xl before:content-['']",
            "after:mt-4 after:h-1.5 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-teal-400 after:via-cyan-400 after:to-blue-500 after:content-[''] lg:after:w-28",
            className
          )}
        >
          <span className="relative z-10">{children}</span>
          <span
            aria-hidden="true"
            className="mt-3 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          />
        </h2>
        {title && id && (
          <div className="absolute -right-3 top-3 opacity-0 transition-opacity duration-base group-hover:opacity-100">
            <SectionActions
              bookmark={{
                type: "section",
                moduleId: context.moduleId,
                moduleTitle: context.moduleTitle,
                moduleUrl: context.moduleUrl,
                sectionId: id,
                sectionTitle: title,
                subject: context.subject,
                course: context.course,
              }}
              sectionId={id}
              title={title}
              url={context.moduleUrl}
              size="sm"
            />
          </div>
        )}
      </div>
    );
  };

  // Komponenter som kan användas i MDX
  const mdxComponents = {
    ActivityBlock,
    h2: H2WithActions,
    UppgiftsbankHighlights,
    TaskCard,
    TaskDeck,
    details: TaskDetails,
    TalbankenItem,
    TalbankenBoard,
    TalbankenUsage,
    TalbankenCard,
    TalbankenTimeline,
    TalbankenTimelineItem,
  };

  return (
    <ModuleContext.Provider value={moduleContext}>
      <div className="mx-auto flex max-w-6xl gap-10 lg:gap-16">
        {/* Main content */}
        <article className="min-w-0 flex-1">
          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <MDXContent components={mdxComponents} />
          </div>
        </article>

        {/* Desktop TOC - sticky sidebar */}
        <aside className="hidden w-72 flex-shrink-0 lg:block">
          <div className="sticky top-28">
            <TableOfContents
              headings={headings}
              className="static top-0"
            />
          </div>
        </aside>
      </div>

      {/* Mobile TOC - floating action button */}
      <MobileTOCDrawer headings={headings} />
    </ModuleContext.Provider>
  );
}
