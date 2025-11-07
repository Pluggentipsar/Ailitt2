"use client";

import { useLocalStorage } from "./useLocalStorage";
import { Note, NoteType, generateNoteId } from "@/lib/note-types";

export function useNotes() {
  const [notes, setNotes, isInitialized] = useLocalStorage<Note[]>(
    "ai-litt-notes",
    []
  );

  const addNote = (note: Omit<Note, "id" | "createdAt" | "updatedAt">) => {
    const id = generateNoteId(
      note.type,
      note.moduleId,
      note.sectionId,
      note.activityId
    );

    const now = Date.now();
    const newNote: Note = {
      ...note,
      id,
      createdAt: now,
      updatedAt: now,
    };

    setNotes((current) => [...current.filter((n) => n.id !== id), newNote]);
  };

  const updateNote = (
    type: NoteType,
    moduleId: string,
    content: string,
    sectionId?: string,
    activityId?: string
  ) => {
    const id = generateNoteId(type, moduleId, sectionId, activityId);

    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? { ...note, content, updatedAt: Date.now() }
          : note
      )
    );
  };

  const removeNote = (
    type: NoteType,
    moduleId: string,
    sectionId?: string,
    activityId?: string
  ) => {
    const id = generateNoteId(type, moduleId, sectionId, activityId);
    setNotes((current) => current.filter((note) => note.id !== id));
  };

  const getNote = (
    type: NoteType,
    moduleId: string,
    sectionId?: string,
    activityId?: string
  ): Note | undefined => {
    const id = generateNoteId(type, moduleId, sectionId, activityId);
    return notes.find((note) => note.id === id);
  };

  const hasNote = (
    type: NoteType,
    moduleId: string,
    sectionId?: string,
    activityId?: string
  ): boolean => {
    const id = generateNoteId(type, moduleId, sectionId, activityId);
    return notes.some((note) => note.id === id);
  };

  const getNotesByType = (type: NoteType): Note[] => {
    return notes.filter((note) => note.type === type);
  };

  const getNotesByModule = (moduleId: string): Note[] => {
    return notes.filter((note) => note.moduleId === moduleId);
  };

  return {
    notes,
    addNote,
    updateNote,
    removeNote,
    getNote,
    hasNote,
    getNotesByType,
    getNotesByModule,
    isInitialized,
  };
}
