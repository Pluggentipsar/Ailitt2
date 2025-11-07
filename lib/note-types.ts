export type NoteType = "section" | "activity";

export interface Note {
  id: string;
  type: NoteType;
  moduleId: string;
  moduleTitle: string;
  moduleUrl: string;
  sectionId?: string;
  sectionTitle?: string;
  activityId?: string;
  activityTitle?: string;
  content: string;
  subject?: string;
  course?: string;
  createdAt: number;
  updatedAt: number;
}

export function generateNoteId(
  type: NoteType,
  moduleId: string,
  sectionId?: string,
  activityId?: string
): string {
  const parts = [type, moduleId];
  if (sectionId) parts.push(sectionId);
  if (activityId) parts.push(activityId);
  return parts.join(":");
}
