"use client";

import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Note, NoteType } from "@/lib/note-types";
import { useNotes } from "@/hooks/useNotes";

interface NotesButtonProps {
  note: Omit<Note, "id" | "createdAt" | "updatedAt" | "content">;
  size?: "sm" | "md";
  className?: string;
}

export function NotesButton({ note, size = "sm", className }: NotesButtonProps) {
  const { getNote, addNote, updateNote, removeNote, hasNote } = useNotes();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const existingNote = getNote(
    note.type,
    note.moduleId,
    note.sectionId,
    note.activityId
  );

  const hasNoteValue = hasNote(
    note.type,
    note.moduleId,
    note.sectionId,
    note.activityId
  );

  // Load existing note content when dialog opens
  useEffect(() => {
    if (open && existingNote) {
      setContent(existingNote.content);
    } else if (open && !existingNote) {
      setContent("");
    }
  }, [open, existingNote]);

  const handleSave = () => {
    if (content.trim()) {
      if (existingNote) {
        updateNote(
          note.type,
          note.moduleId,
          content,
          note.sectionId,
          note.activityId
        );
      } else {
        addNote({
          ...note,
          content,
        });
      }
    } else {
      // If content is empty, remove the note
      removeNote(note.type, note.moduleId, note.sectionId, note.activityId);
    }
    setOpen(false);
  };

  const handleDelete = () => {
    removeNote(note.type, note.moduleId, note.sectionId, note.activityId);
    setContent("");
    setOpen(false);
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
  };

  const getTitle = () => {
    switch (note.type) {
      case "section":
        return `Anteckningar för: ${note.sectionTitle}`;
      case "activity":
        return `Anteckningar för: ${note.activityTitle}`;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <button
                className={cn(
                  "group inline-flex items-center justify-center rounded-full transition-all duration-200 relative",
                  "hover:scale-110 active:scale-95",
                  hasNoteValue
                    ? "text-primary-600 hover:text-primary-700 bg-primary-50 hover:bg-primary-100 shadow-sm hover:shadow-md"
                    : "text-gray-400 hover:text-primary-600 hover:bg-primary-50",
                  sizeClasses[size],
                  className
                )}
                aria-label="Anteckningar"
              >
                <FileText
                  className={cn(
                    iconSizes[size],
                    "transition-all duration-200",
                    hasNoteValue && "fill-current drop-shadow-sm"
                  )}
                />
                {hasNoteValue && (
                  <div className="absolute inset-0 rounded-full bg-primary-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                )}
              </button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{hasNoteValue ? "Visa anteckningar" : "Lägg till anteckningar"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
          <DialogDescription>
            Skriv dina anteckningar här. De sparas automatiskt i din webbläsare.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Skriv dina anteckningar här..."
            className="w-full min-h-[200px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-400 resize-y transition-all duration-200 bg-white hover:border-gray-300"
          />
        </div>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <div>
              {existingNote && (
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Ta bort
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Avbryt
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Spara
              </button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
