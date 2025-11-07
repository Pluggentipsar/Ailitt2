"use client";

import { useNotes } from "@/hooks/useNotes";
import { NotesButton } from "@/components/ui/NotesButton";
import Link from "next/link";
import { FileText, List, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function NotesPage() {
  const { notes, isInitialized } = useNotes();
  const [filter, setFilter] = useState<"all" | "section" | "activity">("all");

  const filteredNotes = filter === "all"
    ? notes
    : notes.filter(n => n.type === filter);

  const groupedByModule = filteredNotes.reduce((acc, note) => {
    if (!acc[note.moduleId]) {
      acc[note.moduleId] = {
        moduleTitle: note.moduleTitle,
        moduleUrl: note.moduleUrl,
        subject: note.subject,
        course: note.course,
        notes: [],
      };
    }
    acc[note.moduleId].notes.push(note);
    return acc;
  }, {} as Record<string, {
    moduleTitle: string;
    moduleUrl: string;
    subject?: string;
    course?: string;
    notes: typeof notes;
  }>);

  if (!isInitialized) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-gray-600">Laddar...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 animate-fade-in-down">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Mina Anteckningar
        </h1>
        <p className="text-lg text-gray-600">
          Här hittar du alla dina sparade anteckningar för sektioner och lektioner.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-base ${
            filter === "all"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Alla ({notes.length})
        </button>
        <button
          onClick={() => setFilter("section")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-base ${
            filter === "section"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <List className="inline h-4 w-4 mr-1" />
          Sektioner ({notes.filter(n => n.type === "section").length})
        </button>
        <button
          onClick={() => setFilter("activity")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-base ${
            filter === "activity"
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <FileText className="inline h-4 w-4 mr-1" />
          Lektioner ({notes.filter(n => n.type === "activity").length})
        </button>
      </div>

      {/* Notes list */}
      {filteredNotes.length === 0 ? (
        <div className="py-12 text-center animate-fade-in">
          <FileText className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <p className="text-gray-600">
            {filter === "all"
              ? "Du har inga anteckningar ännu. Börja utforska moduler och skriv anteckningar för det som intresserar dig!"
              : `Du har inga anteckningar för ${filter === "section" ? "sektioner" : "lektioner"}.`
            }
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedByModule).map(([moduleId, data], index) => (
            <div
              key={moduleId}
              className="rounded-lg border border-gray-200 bg-white p-6 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: 'backwards' }}
            >
              {/* Module header */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <Link
                    href={data.moduleUrl}
                    className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {data.moduleTitle}
                  </Link>
                  {data.subject && data.course && (
                    <p className="mt-1 text-sm text-gray-600">
                      {data.subject} / {data.course}
                    </p>
                  )}
                </div>
              </div>

              {/* Notes within this module */}
              <div className="space-y-4">
                {data.notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-md border border-gray-200 bg-gray-50 p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {note.type === "section" && <List className="h-4 w-4 text-gray-400" />}
                        {note.type === "activity" && <FileText className="h-4 w-4 text-gray-400" />}
                        <Link
                          href={
                            note.type === "section"
                              ? `${note.moduleUrl}#${note.sectionId}`
                              : `${note.moduleUrl}#${note.activityId}`
                          }
                          className="font-medium text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {note.type === "section"
                            ? note.sectionTitle
                            : note.activityTitle}
                        </Link>
                      </div>
                      <NotesButton
                        note={{
                          type: note.type,
                          moduleId: note.moduleId,
                          moduleTitle: note.moduleTitle,
                          moduleUrl: note.moduleUrl,
                          sectionId: note.sectionId,
                          sectionTitle: note.sectionTitle,
                          activityId: note.activityId,
                          activityTitle: note.activityTitle,
                          subject: note.subject,
                          course: note.course,
                        }}
                        size="sm"
                      />
                    </div>
                    <div className="text-sm text-gray-600 whitespace-pre-wrap pl-6">
                      {note.content}
                    </div>
                    <div className="mt-2 text-xs text-gray-400 pl-6">
                      Uppdaterad: {new Date(note.updatedAt).toLocaleDateString('sv-SE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
