"use client";

import { useLocalStorage } from "./useLocalStorage";
import { Bookmark, BookmarkType, generateBookmarkId } from "@/lib/bookmark-types";

export function useBookmarks() {
  const [bookmarks, setBookmarks, isInitialized] = useLocalStorage<Bookmark[]>(
    "ai-litt-bookmarks-v2",
    []
  );

  const addBookmark = (bookmark: Omit<Bookmark, "id" | "createdAt">) => {
    const id = generateBookmarkId(
      bookmark.type,
      bookmark.moduleId,
      bookmark.sectionId,
      bookmark.activityId
    );

    const newBookmark: Bookmark = {
      ...bookmark,
      id,
      createdAt: Date.now(),
    };

    setBookmarks((prev) => {
      // Don't add duplicates
      if (prev.some((b) => b.id === id)) {
        return prev;
      }
      return [...prev, newBookmark];
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const toggleBookmark = (bookmark: Omit<Bookmark, "id" | "createdAt">) => {
    const id = generateBookmarkId(
      bookmark.type,
      bookmark.moduleId,
      bookmark.sectionId,
      bookmark.activityId
    );

    const exists = bookmarks.some((b) => b.id === id);

    if (exists) {
      removeBookmark(id);
    } else {
      addBookmark(bookmark);
    }
  };

  const isBookmarked = (
    type: BookmarkType,
    moduleId: string,
    sectionId?: string,
    activityId?: string
  ) => {
    const id = generateBookmarkId(type, moduleId, sectionId, activityId);
    return bookmarks.some((b) => b.id === id);
  };

  const getBookmarksByType = (type: BookmarkType) => {
    return bookmarks.filter((b) => b.type === type);
  };

  const getBookmarksByModule = (moduleId: string) => {
    return bookmarks.filter((b) => b.moduleId === moduleId);
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    isBookmarked,
    getBookmarksByType,
    getBookmarksByModule,
    clearBookmarks,
    isInitialized,
  };
}
