"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { Module } from "contentlayer/generated";
import { ActivityBlock } from "@/components/ui/ActivityBlock";
import { extractHeadings } from "@/lib/toc-utils";
import { TableOfContents } from "@/components/navigation/TableOfContents";
import { MobileTOCDrawer } from "@/components/navigation/MobileTOCDrawer";
import { SectionActions } from "@/components/ui/SectionActions";
import { useMemo, createContext, useContext } from "react";

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
  const H2WithActions = ({ children, ...props }: any) => {
    const context = useContext(ModuleContext);
    const title = typeof children === "string" ? children : "";
    const id = context.headingIdMap.get(title) || "";

    return (
      <div className="group relative">
        <h2 id={id} {...props}>
          {children}
        </h2>
        {title && id && (
          <div className="absolute -right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-base">
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
    // h3 doesn't need IDs since they're not in TOC
  };

  return (
    <ModuleContext.Provider value={moduleContext}>
      <div className="mx-auto flex max-w-7xl gap-8">
        {/* Main content */}
        <article className="flex-1 max-w-4xl">
          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <MDXContent components={mdxComponents} />
          </div>
        </article>

        {/* Desktop TOC - sticky sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>

      {/* Mobile TOC - floating action button */}
      <MobileTOCDrawer headings={headings} />
    </ModuleContext.Provider>
  );
}
