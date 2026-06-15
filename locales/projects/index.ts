import { jaProjects } from "@/locales/projects/ja";
import { zhProjects } from "@/locales/projects/zh";
import type {
  Language,
  ProjectTranslationMap
} from "@/locales/types";

export const projectTranslations: Record<
  Exclude<Language, "en">,
  ProjectTranslationMap
> = {
  zh: zhProjects,
  ja: jaProjects
};
