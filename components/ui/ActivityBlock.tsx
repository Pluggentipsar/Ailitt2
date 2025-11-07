"use client";

import React, { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { ActivityActions } from "@/components/ui/ActivityActions";
import { ModuleContext } from "@/components/module/ModuleContent";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/toc-utils";

interface ActivityBlockProps {
  title: string;
  time?: string;
  groupSize?: string;
  literacyIds?: number[];
  type?: string;
  children: React.ReactNode;
  className?: string;
}

export function ActivityBlock({
  title,
  time,
  groupSize,
  literacyIds = [],
  type,
  children,
  className,
}: ActivityBlockProps) {
  const context = useContext(ModuleContext);
  const activityId = slugify(title);

  return (
    <div id={activityId} className={cn("my-8 rounded-xl border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50/30 p-6 shadow-md hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group", className)}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="activity" className="border-none">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <AccordionTrigger className="hover:no-underline py-0 group/trigger">
                  <div className="flex items-center gap-3">
                    {/* Icon indicator */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-md group-hover/trigger:scale-110 transition-transform">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900 group-hover/trigger:text-primary-600 transition-colors">
                        {title}
                      </h3>
                      {type && (
                        <span className="mt-1 inline-flex items-center rounded-full bg-gradient-to-r from-primary-100 to-cyan-100 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm">
                          {type}
                        </span>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
              </div>
              <div className="ml-2">
                <ActivityActions
                  bookmark={{
                    type: "activity",
                    moduleId: context.moduleId,
                    moduleTitle: context.moduleTitle,
                    moduleUrl: context.moduleUrl,
                    activityId,
                    activityTitle: title,
                    subject: context.subject,
                    course: context.course,
                  }}
                  activityId={activityId}
                  title={title}
                  url={context.moduleUrl}
                  size="sm"
                />
              </div>
            </div>

            {/* Metadata badges */}
            <div className="flex flex-wrap gap-2">
              {time && <MetaBadge type="time" value={time} />}
              {groupSize && <MetaBadge type="group" value={groupSize} />}
            </div>

            {/* AI Literacy badges */}
            {literacyIds.length > 0 && (
              <AiLiteracyBadgeList ids={literacyIds} />
            )}
          </div>

          <AccordionContent className="pt-6">
            <div className="rounded-lg bg-white/50 p-6 prose prose-base max-w-none border border-primary-100/50">
              {children}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
