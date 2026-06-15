import type { Project } from "@/data/projects";

export type Language = "en" | "zh" | "ja";
export type Dictionary = Record<string, string>;

export type ProjectTranslation = Pick<
  Project,
  | "category"
  | "summary"
  | "sector"
  | "context"
  | "challenge"
  | "conceptTitle"
  | "concept"
  | "outcome"
  | "quote"
  | "services"
>;

export type ProjectTranslationMap = Record<string, ProjectTranslation>;
