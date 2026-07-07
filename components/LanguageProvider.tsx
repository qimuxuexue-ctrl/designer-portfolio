"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Project } from "@/data/projects";
import { dictionaries } from "@/locales";
import { projectTranslations } from "@/locales/projects";
import type { Language } from "@/locales/types";

export type { Language } from "@/locales/types";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  localizeProject: (project: Project) => Project;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isSupportedLanguage(value: string | null): value is Language {
  return value === "en" || value === "zh" || value === "ja";
}

function detectBrowserLanguage(): Language {
  const browserLanguages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  const normalizedLanguages = browserLanguages
    .filter(Boolean)
    .map((browserLanguage) => browserLanguage.toLowerCase());

  if (normalizedLanguages.some((browserLanguage) => browserLanguage.startsWith("zh"))) {
    return "zh";
  }

  if (normalizedLanguages.some((browserLanguage) => browserLanguage.startsWith("ja"))) {
    return "ja";
  }

  if (normalizedLanguages.some((browserLanguage) => browserLanguage.startsWith("en"))) {
    return "en";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("hinna-language");

    if (isSupportedLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
      return;
    }

    setLanguageState(detectBrowserLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      language === "zh" ? "zh-CN" : language === "ja" ? "ja" : "en";
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    function setLanguage(nextLanguage: Language) {
      setLanguageState(nextLanguage);
      window.localStorage.setItem("hinna-language", nextLanguage);
    }

    function t(key: string) {
      return dictionaries[language][key] ?? dictionaries.en[key] ?? key;
    }

    function localizeProject(project: Project): Project {
      if (language === "en") {
        return project;
      }

      const translation = projectTranslations[language][project.slug];
      return translation ? { ...project, ...translation } : project;
    }

    return { language, setLanguage, t, localizeProject };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function LocalizedText({ textKey }: { textKey: string }) {
  const { t } = useLanguage();
  return <>{t(textKey)}</>;
}

export function LocalizedProjectField({
  project,
  field
}: {
  project: Project;
  field: keyof Project;
}) {
  const { localizeProject } = useLanguage();
  const value = localizeProject(project)[field];

  return <>{typeof value === "string" ? value : ""}</>;
}

export function LocalizedProjectServices({ project }: { project: Project }) {
  const { localizeProject } = useLanguage();

  return (
    <>
      {localizeProject(project).services.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </>
  );
}

export function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const options: Array<{ value: Language; label: string }> = [
    { value: "en", label: "EN" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日本語" }
  ];

  return (
    <div
      className={`inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold tracking-[0.08em] ${
        inverse ? "text-white/55" : "text-ink/45"
      }`}
      aria-label="Language"
    >
      {options.map((option, index) => (
        <span key={option.value} className="inline-flex items-center gap-2">
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          <button
            type="button"
            onClick={() => setLanguage(option.value)}
            className={`transition ${
              language === option.value
                ? inverse
                  ? "text-white"
                  : "text-titleBlue"
                : inverse
                  ? "hover:text-white"
                  : "hover:text-titleBlue"
            }`}
            aria-pressed={language === option.value}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
