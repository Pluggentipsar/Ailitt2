"use client";

import { useBookmarks } from "@/hooks/useBookmarks";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { ShareButton } from "@/components/ui/ShareButton";
import Link from "next/link";
import { Bookmark as BookmarkIcon, FileText, List, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function BookmarksPage() {
  const { bookmarks, isInitialized } = useBookmarks();
  const [filter, setFilter] = useState<"all" | "module" | "section" | "activity">("all");

  const filteredBookmarks = filter === "all"
    ? bookmarks
    : bookmarks.filter(b => b.type === filter);

  const groupedByModule = filteredBookmarks.reduce((acc, bookmark) => {
    if (!acc[bookmark.moduleId]) {
      acc[bookmark.moduleId] = {
        moduleTitle: bookmark.moduleTitle,
        moduleUrl: bookmark.moduleUrl,
        subject: bookmark.subject,
        course: bookmark.course,
        bookmarks: [],
      };
    }
    acc[bookmark.moduleId].bookmarks.push(bookmark);
    return acc;
  }, {} as Record<string, {
    moduleTitle: string;
    moduleUrl: string;
    subject?: string;
    course?: string;
    bookmarks: typeof bookmarks;
  }>);

  if (!isInitialized) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-gray-600">Laddar...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 animate-fade-in-down flex items-center gap-4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-purple-500 text-white shadow-lg">
              <BookmarkIcon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Mina Bokmärken
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Här hittar du alla dina sparade moduler, sektioner och lektioner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            filter === "all"
              ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md hover:shadow-lg scale-105"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 shadow-sm"
          }`}
        >
          Alla ({bookmarks.length})
        </button>
        <button
          onClick={() => setFilter("module")}
          className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            filter === "module"
              ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md hover:shadow-lg scale-105"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 shadow-sm"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          Moduler ({bookmarks.filter(b => b.type === "module").length})
        </button>
        <button
          onClick={() => setFilter("section")}
          className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            filter === "section"
              ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md hover:shadow-lg scale-105"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 shadow-sm"
          }`}
        >
          <List className="h-4 w-4" />
          Sektioner ({bookmarks.filter(b => b.type === "section").length})
        </button>
        <button
          onClick={() => setFilter("activity")}
          className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            filter === "activity"
              ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md hover:shadow-lg scale-105"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 shadow-sm"
          }`}
        >
          <FileText className="h-4 w-4" />
          Lektioner ({bookmarks.filter(b => b.type === "activity").length})
        </button>
      </div>

      {/* Bookmarks list */}
      {filteredBookmarks.length === 0 ? (
        <div className="py-20 text-center animate-fade-in">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 mb-6">
            <BookmarkIcon className="h-10 w-10" />
          </div>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            {filter === "all"
              ? "Du har inga bokmärken ännu. Börja utforska moduler och spara det som intresserar dig!"
              : `Du har inga bokmärkta ${filter === "module" ? "moduler" : filter === "section" ? "sektioner" : "lektioner"}.`
            }
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedByModule).map(([moduleId, data], index) => (
            <div
              key={moduleId}
              className="group rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 animate-fade-in-up hover:-translate-y-1"
              style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: 'backwards' }}
            >
              {/* Module header */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <Link
                    href={data.moduleUrl}
                    className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors group-hover:text-primary-600"
                  >
                    {data.moduleTitle}
                  </Link>
                  {data.subject && data.course && (
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <span className="text-primary-600 font-medium">{data.subject}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-600">{data.course}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <ShareButton
                    title={data.moduleTitle}
                    url={data.moduleUrl}
                    size="sm"
                  />
                </div>
              </div>

              {/* Bookmarks within this module */}
              <div className="space-y-3">
                {data.bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="group/item flex items-center justify-between rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 hover:border-primary-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        bookmark.type === "module" ? "bg-blue-100 text-blue-600 group-hover/item:bg-blue-200" :
                        bookmark.type === "section" ? "bg-green-100 text-green-600 group-hover/item:bg-green-200" :
                        "bg-purple-100 text-purple-600 group-hover/item:bg-purple-200"
                      }`}>
                        {bookmark.type === "module" && <GraduationCap className="h-4 w-4" />}
                        {bookmark.type === "section" && <List className="h-4 w-4" />}
                        {bookmark.type === "activity" && <FileText className="h-4 w-4" />}
                      </div>

                      <div>
                        <Link
                          href={
                            bookmark.type === "module"
                              ? bookmark.moduleUrl
                              : bookmark.type === "section"
                              ? `${bookmark.moduleUrl}#${bookmark.sectionId}`
                              : `${bookmark.moduleUrl}#${bookmark.activityId}`
                          }
                          className="font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {bookmark.type === "module"
                            ? bookmark.moduleTitle
                            : bookmark.type === "section"
                            ? bookmark.sectionTitle
                            : bookmark.activityTitle}
                        </Link>
                        <p className="text-xs text-gray-500 font-medium">
                          {bookmark.type === "module" && "Hela modulen"}
                          {bookmark.type === "section" && "Sektion"}
                          {bookmark.type === "activity" && "Lektion"}
                        </p>
                      </div>
                    </div>

                    <BookmarkButton
                      bookmark={bookmark}
                      size="sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
