"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useNotes } from "@/hooks/useNotes";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { ShareButton } from "@/components/ui/ShareButton";
import { NotesButton } from "@/components/ui/NotesButton";
import {
  Bookmark as BookmarkIcon,
  NotebookPen,
  GraduationCap,
  List,
  FileText,
  Sparkles,
} from "lucide-react";

import type { Bookmark } from "@/lib/bookmark-types";
import type { Note } from "@/lib/note-types";

const TAB_OPTIONS = [
  {
    id: "bookmarks" as const,
    label: "Bokmärken",
    icon: BookmarkIcon,
    description: "Alla moduler, sektioner och lektioner du sparat för snabb åtkomst.",
  },
  {
    id: "notes" as const,
    label: "Anteckningar",
    icon: NotebookPen,
    description: "Dina egna reflektioner och lektionsidéer kopplade till innehållet.",
  },
];

type BookmarkFilter = "all" | "module" | "section" | "activity";
type NoteFilter = "all" | "section" | "activity";

export default function SavedPage() {
  const { bookmarks, isInitialized: bookmarksReady } = useBookmarks();
  const { notes, isInitialized: notesReady } = useNotes();
  const isInitialized = bookmarksReady && notesReady;

  const [activeTab, setActiveTab] = useState<"bookmarks" | "notes">("bookmarks");
  const [bookmarkFilter, setBookmarkFilter] = useState<BookmarkFilter>("all");
  const [noteFilter, setNoteFilter] = useState<NoteFilter>("all");

  const filteredBookmarks = bookmarkFilter === "all"
    ? bookmarks
    : bookmarks.filter((bookmark) => bookmark.type === bookmarkFilter);

  const filteredNotes = noteFilter === "all"
    ? notes
    : notes.filter((note) => note.type === noteFilter);

  const groupedBookmarks = useMemo(() => groupBookmarks(filteredBookmarks), [filteredBookmarks]);
  const groupedNotes = useMemo(() => groupNotes(filteredNotes), [filteredNotes]);

  if (!isInitialized) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-gray-600">
        Laddar dina sparade resurser...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero bookmarks={bookmarks.length} notes={notes.length} />

      <div className="container mx-auto px-4 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {TAB_OPTIONS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <p className="mb-10 text-sm text-gray-600 max-w-2xl">
          {TAB_OPTIONS.find((tab) => tab.id === activeTab)?.description}
        </p>

        {activeTab === "bookmarks" ? (
          <BookmarksPanel
            groupedBookmarks={groupedBookmarks}
            bookmarks={bookmarks}
            bookmarkFilter={bookmarkFilter}
            setBookmarkFilter={setBookmarkFilter}
          />
        ) : (
          <NotesPanel
            groupedNotes={groupedNotes}
            notes={notes}
            noteFilter={noteFilter}
            setNoteFilter={setNoteFilter}
          />
        )}
      </div>
    </div>
  );
}

function Hero({ bookmarks, notes }: { bookmarks: number; notes: number }) {
  const stats = [
    {
      label: "Bokmärken",
      value: bookmarks,
      hint: "Moduler, sektioner och lektioner",
    },
    {
      label: "Anteckningar",
      value: notes,
      hint: "Personliga kommentarer",
    },
  ];

  return (
    <div className="border-b border-gray-100 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-lg">
              <BookmarkIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-500">
                Sparade resurser
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Allt du vill återvända till
              </h1>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                Samla dina favoritmoduler och skriv egna anteckningar på samma plats. Perfekt när du planerar undervisning eller vill fortsätta där du slutade.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/90 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookmarksPanel({
  groupedBookmarks,
  bookmarks,
  bookmarkFilter,
  setBookmarkFilter,
}: {
  groupedBookmarks: Record<string, BookmarkGroup>;
  bookmarks: Bookmark[];
  bookmarkFilter: BookmarkFilter;
  setBookmarkFilter: (filter: BookmarkFilter) => void;
}) {
  const counts = {
    module: bookmarks.filter((b) => b.type === "module").length,
    section: bookmarks.filter((b) => b.type === "section").length,
    activity: bookmarks.filter((b) => b.type === "activity").length,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: `Alla (${bookmarks.length})` },
          { id: "module", label: `Moduler (${counts.module})`, icon: GraduationCap },
          { id: "section", label: `Sektioner (${counts.section})`, icon: List },
          { id: "activity", label: `Lektioner (${counts.activity})`, icon: FileText },
        ].map((chip) => (
          <button
            key={chip.id}
            onClick={() => setBookmarkFilter(chip.id as BookmarkFilter)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              bookmarkFilter === chip.id
                ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {chip.icon && <chip.icon className="h-4 w-4" />}
            {chip.label}
          </button>
        ))}
      </div>

      {Object.keys(groupedBookmarks).length === 0 ? (
        <EmptyState
          icon={BookmarkIcon}
          title="Inga bokmärken ännu"
          description="Spara moduler, sektioner eller aktiviteter när du hittar något du vill återkomma till."
          actionLabel="Utforska ämnen"
          actionHref="/amnen"
        />
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedBookmarks).map(([moduleId, data], index) => (
            <div
              key={moduleId}
              className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: "backwards" }}
            >
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <Link
                    href={data.moduleUrl}
                    className="text-2xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {data.moduleTitle}
                  </Link>
                  {data.subject && data.course && (
                    <p className="text-sm text-gray-500">
                      {data.subject} / {data.course}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {data.bookmarks.map((bookmark) => (
                  <BookmarkListItem key={bookmark.id} bookmark={bookmark} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NotesPanel({
  groupedNotes,
  notes,
  noteFilter,
  setNoteFilter,
}: {
  groupedNotes: Record<string, NoteGroup>;
  notes: Note[];
  noteFilter: NoteFilter;
  setNoteFilter: (filter: NoteFilter) => void;
}) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: `Alla (${notes.length})` },
          {
            id: "section",
            label: `Sektioner (${notes.filter((n) => n.type === "section").length})`,
            icon: List,
          },
          {
            id: "activity",
            label: `Lektioner (${notes.filter((n) => n.type === "activity").length})`,
            icon: FileText,
          },
        ].map((chip) => (
          <button
            key={chip.id}
            onClick={() => setNoteFilter(chip.id as NoteFilter)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              noteFilter === chip.id
                ? "bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {chip.icon && <chip.icon className="h-4 w-4" />}
            {chip.label}
          </button>
        ))}
      </div>

      {Object.keys(groupedNotes).length === 0 ? (
        <EmptyState
          icon={NotebookPen}
          title="Inga anteckningar ännu"
          description="Använd anteckningsknappen i modulerna för att samla tankar och lektionsidéer."
          actionLabel="Besök en modul"
          actionHref="/amnen"
        />
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedNotes).map(([moduleId, data], index) => (
            <div
              key={moduleId}
              className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: "backwards" }}
            >
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <Link
                    href={data.moduleUrl}
                    className="text-2xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {data.moduleTitle}
                  </Link>
                  {data.subject && data.course && (
                    <p className="text-sm text-gray-500">
                      {data.subject} / {data.course}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {data.notes.map((note) => (
                  <NoteListItem key={note.id} note={note} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BookmarkListItem({ bookmark }: { bookmark: Bookmark }) {
  const link = getBookmarkLink(bookmark);
  const description = getBookmarkDescription(bookmark);

  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href={link}
            className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
          >
            <BookmarkTypeIcon type={bookmark.type} />
            <span>{getBookmarkTitle(bookmark)}</span>
          </Link>
          <p className="pl-8 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <ShareButton title={bookmark.moduleTitle} url={link} size="sm" />
          <BookmarkButton
            bookmark={{
              type: bookmark.type,
              moduleId: bookmark.moduleId,
              moduleTitle: bookmark.moduleTitle,
              moduleUrl: bookmark.moduleUrl,
              sectionId: bookmark.sectionId,
              sectionTitle: bookmark.sectionTitle,
              activityId: bookmark.activityId,
              activityTitle: bookmark.activityTitle,
              subject: bookmark.subject,
              course: bookmark.course,
            }}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

function NoteListItem({ note }: { note: Note }) {
  const link = getNoteLink(note);
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <BookmarkTypeIcon type={note.type === "section" ? "section" : "activity"} />
          <Link
            href={link}
            className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
          >
            {note.type === "section" ? note.sectionTitle : note.activityTitle}
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
      <p className="mt-3 whitespace-pre-wrap text-sm text-gray-700">
        {note.content}
      </p>
      <p className="mt-2 text-xs text-gray-400">
        Uppdaterad {new Date(note.updatedAt).toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon: typeof BookmarkIcon;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link
        href={actionHref}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-primary-400 hover:text-primary-600"
      >
        <Sparkles className="h-4 w-4" />
        {actionLabel}
      </Link>
    </div>
  );
}

function BookmarkTypeIcon({ type }: { type: Bookmark["type"] }) {
  if (type === "module") {
    return <GraduationCap className="h-4 w-4 text-primary-500" />;
  }
  if (type === "section") {
    return <List className="h-4 w-4 text-primary-500" />;
  }
  return <FileText className="h-4 w-4 text-primary-500" />;
}

function getBookmarkLink(bookmark: Bookmark) {
  if (bookmark.type === "module") {
    return bookmark.moduleUrl;
  }
  if (bookmark.type === "section") {
    return bookmark.sectionId
      ? ${bookmark.moduleUrl}#
      : bookmark.moduleUrl;
  }
  return bookmark.activityId
    ? ${bookmark.moduleUrl}#
    : bookmark.moduleUrl;
}

function getBookmarkTitle(bookmark: Bookmark) {
  if (bookmark.type === "module") {
    return bookmark.moduleTitle;
  }
  if (bookmark.type === "section") {
    return bookmark.sectionTitle;
  }
  return bookmark.activityTitle;
}

function getBookmarkDescription(bookmark: Bookmark) {
  switch (bookmark.type) {
    case "module":
      return "Sparad modul";
    case "section":
      return "Sparad sektion";
    case "activity":
      return "Sparad aktivitet";
    default:
      return "";
  }
}

function getNoteLink(note: Note) {
  if (note.type === "section") {
    return note.sectionId ? ${note.moduleUrl}# : note.moduleUrl;
  }
  return note.activityId ? ${note.moduleUrl}# : note.moduleUrl;
}

type BookmarkGroup = {
  moduleTitle: string;
  moduleUrl: string;
  subject?: string;
  course?: string;
  bookmarks: Bookmark[];
};

type NoteGroup = {
  moduleTitle: string;
  moduleUrl: string;
  subject?: string;
  course?: string;
  notes: Note[];
};

function groupBookmarks(bookmarks: Bookmark[]): Record<string, BookmarkGroup> {
  return bookmarks.reduce<Record<string, BookmarkGroup>>((acc, bookmark) => {
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
  }, {});
}

function groupNotes(notes: Note[]): Record<string, NoteGroup> {
  return notes.reduce<Record<string, NoteGroup>>((acc, note) => {
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
  }, {});
}
