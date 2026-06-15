import { en } from "@/locales/en";
import { ja } from "@/locales/ja";
import type { Dictionary, Language } from "@/locales/types";
import { zh } from "@/locales/zh";

export const dictionaries: Record<Language, Dictionary> = {
  en,
  zh,
  ja
};
