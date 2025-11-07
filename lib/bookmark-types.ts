export type BookmarkType = "module" | "section" | "activity";

export interface Bookmark {
  id: string; // Unique ID for the bookmark
  type: BookmarkType;
  moduleId: string;
  moduleTitle: string;
  moduleUrl: string;

  // Optional fields for sections and activities
  sectionId?: string;
  sectionTitle?: string;

  activityId?: string;
  activityTitle?: string;

  // Metadata
  createdAt: number;
  subject?: string;
  course?: string;
}

export function generateBookmarkId(
  type: BookmarkType,
  moduleId: string,
  sectionId?: string,
  activityId?: string
): string {
  const parts = [type, moduleId];
  if (sectionId) parts.push(sectionId);
  if (activityId) parts.push(activityId);
  return parts.join(":");
}

export function parseBookmarkId(id: string): {
  type: BookmarkType;
  moduleId: string;
  sectionId?: string;
  activityId?: string;
} {
  const parts = id.split(":");
  return {
    type: parts[0] as BookmarkType,
    moduleId: parts[1],
    sectionId: parts[2],
    activityId: parts[3],
  };
}
