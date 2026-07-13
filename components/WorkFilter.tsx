"use client";

import { useMemo, useState } from "react";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/data/projects";

type FilterGroupKey = keyof Project["filters"];

const filterGroups: Array<{
  key: FilterGroupKey;
  label: Record<"en" | "zh" | "ja", string>;
}> = [
  { key: "colors", label: { en: "Color", zh: "颜色", ja: "カラー" } },
  { key: "services", label: { en: "Service", zh: "服务", ja: "サービス" } },
  { key: "industries", label: { en: "Industry", zh: "行业", ja: "業種" } },
  { key: "formats", label: { en: "Format", zh: "形式", ja: "形式" } },
  { key: "tones", label: { en: "Tone", zh: "气质", ja: "トーン" } }
];

const uiText = {
  en: {
    open: "Find work",
    title: "Narrow the work",
    result: "projects match",
    search: "Show work",
    reset: "Reset",
    close: "Close",
    empty: "No projects match yet. Try fewer filters.",
    clear: "Clear filters"
  },
  zh: {
    open: "筛选作品",
    title: "筛选作品",
    result: "个作品符合",
    search: "查看结果",
    reset: "重置",
    close: "关闭",
    empty: "暂时没有符合的作品，少选几个条件试试。",
    clear: "清除筛选"
  },
  ja: {
    open: "作品を探す",
    title: "ちょうどよく絞り込む",
    result: "件の作品",
    search: "検索する",
    reset: "リセット",
    close: "閉じる",
    empty: "条件に合う作品がまだありません。条件を少なくしてみてください。",
    clear: "条件をクリア"
  }
};

const colorDots: Record<string, string> = {
  Orange: "#D65F38",
  Green: "#19C7A1",
  Cream: "#F4EDE3",
  Blue: "#3C63C8",
  Pink: "#D7A8C2",
  White: "#FFFFFF",
  Red: "#D65F38",
  Gold: "#F8D44D",
  Neutral: "#DFDED6",
  Brown: "#826F5B",
  Black: "#171717",
  Yellow: "#F8D44D"
};

type SelectedFilters = Partial<Record<FilterGroupKey, string[]>>;

function getSelectedCount(selectedFilters: SelectedFilters) {
  return Object.values(selectedFilters).reduce((total, values) => total + (values?.length ?? 0), 0);
}

function projectMatches(project: Project, selectedFilters: SelectedFilters) {
  return filterGroups.every(({ key }) => {
    const selectedValues = selectedFilters[key] ?? [];

    if (selectedValues.length === 0) {
      return true;
    }

    return selectedValues.some((value) => project.filters[key].includes(value));
  });
}

export function WorkFilter({ projects }: { projects: Project[] }) {
  const { language, t } = useLanguage();
  const text = uiText[language];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const filterOptions = useMemo(() => {
    return filterGroups.map((group) => {
      const counts = new Map<string, number>();

      projects.forEach((project) => {
        project.filters[group.key].forEach((value) => {
          counts.set(value, (counts.get(value) ?? 0) + 1);
        });
      });

      return {
        ...group,
        options: Array.from(counts.entries()).map(([value, count]) => ({ value, count }))
      };
    });
  }, [projects]);

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectMatches(project, selectedFilters)),
    [projects, selectedFilters]
  );
  const selectedCount = getSelectedCount(selectedFilters);

  function toggleFilter(groupKey: FilterGroupKey, value: string) {
    setSelectedFilters((current) => {
      const values = current[groupKey] ?? [];
      const nextValues = values.includes(value)
        ? values.filter((currentValue) => currentValue !== value)
        : [...values, value];

      return {
        ...current,
        [groupKey]: nextValues
      };
    });
  }

  function resetFilters() {
    setSelectedFilters({});
  }

  return (
    <main className="relative">
      <Marquee />

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-[46vh] z-40 hidden -translate-y-1/2 items-center gap-3 rounded-l-full bg-sunYellow py-4 pl-5 pr-4 text-titleBlue shadow-[0_14px_40px_rgba(23,23,23,0.16)] transition hover:bg-titleBlue hover:text-white md:inline-flex"
        aria-label={text.open}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          {text.open}
        </span>
        <span className="relative h-7 w-7 rounded-full border-[3px] border-current after:absolute after:-bottom-1 after:-right-1 after:h-3 after:w-[3px] after:rotate-[-45deg] after:bg-current" />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sunYellow text-titleBlue shadow-[0_14px_40px_rgba(23,23,23,0.18)] md:hidden"
        aria-label={text.open}
      >
        <span className="relative h-7 w-7 rounded-full border-[3px] border-current after:absolute after:-bottom-1 after:-right-1 after:h-3 after:w-[3px] after:rotate-[-45deg] after:bg-current" />
      </button>

      <section className="flex flex-col gap-0 overflow-hidden px-4 pb-24 pt-14 md:px-8 md:pb-40 md:pt-16">
        <h1 className="mx-auto mb-0 max-w-[calc(100vw-1.5rem)] text-center font-display text-[clamp(3.25rem,18vw,5.5rem)] font-black uppercase leading-[0.76] text-titleBlue md:max-w-5xl md:text-[7.35rem] md:leading-[0.72] lg:text-[8.55rem]">
          {t("home.recent")}
          <br />
          {t("home.projects")}
        </h1>

        {filteredProjects.length > 0 ? (
          <div className="mx-auto grid max-w-[1040px] gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={index % 2 === 0 && index > 1 ? "md:mt-7" : undefined}
              >
                <ProjectCard project={project} variant="portfolio" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-16 max-w-xl text-center">
            <p className="text-lg font-semibold text-ink/70">{text.empty}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 bg-titleBlue px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-ink"
            >
              {text.clear}
            </button>
          </div>
        )}
      </section>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-paper text-ink" role="dialog" aria-modal="true">
          <div className="flex min-h-[100dvh] flex-col">
            <div className="flex items-center justify-between border-b border-ink/15 px-5 py-5 md:px-12">
              <div className="flex items-center gap-4">
                <span className="relative h-7 w-7 rounded-sm bg-ink before:absolute before:left-1/2 before:top-full before:-ml-2 before:border-x-[8px] before:border-t-[12px] before:border-x-transparent before:border-t-ink" />
                <h2 className="font-display text-2xl uppercase leading-none text-titleBlue md:text-4xl">
                  {text.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs font-black uppercase tracking-[0.2em] text-ink transition hover:text-titleBlue"
              >
                {text.close}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-36">
              <div className="mx-auto max-w-6xl divide-y divide-ink/15 px-5 md:px-12">
                {filterOptions.map((group) => (
                  <section key={group.key} className="py-8 md:py-10">
                    <h3 className="mb-5 text-xl font-black uppercase tracking-[0.04em] text-ink">
                      {group.label[language]}
                    </h3>
                    <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                      {group.options.map((option) => {
                        const checked = selectedFilters[group.key]?.includes(option.value) ?? false;

                        return (
                          <label
                            key={option.value}
                            className="flex cursor-pointer items-center gap-3 text-base font-black transition hover:text-titleBlue"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleFilter(group.key, option.value)}
                              className="h-5 w-5 accent-titleBlue"
                            />
                            {group.key === "colors" ? (
                              <span
                                className="h-4 w-4 rounded-full border border-ink/20"
                                style={{ backgroundColor: colorDots[option.value] ?? "#DFDED6" }}
                                aria-hidden="true"
                              />
                            ) : null}
                            <span>
                              {option.value} ({option.count})
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="fixed inset-x-0 bottom-0 border-t border-white/15 bg-ink px-5 py-4 text-white md:px-12">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
                <div className="bg-white px-4 py-3 font-black text-ink md:px-8">
                  <span className="text-xs uppercase tracking-[0.14em]">
                    {filteredProjects.length} {text.result}
                  </span>
                  {selectedCount > 0 ? (
                    <span className="ml-3 text-xs text-titleBlue">({selectedCount})</span>
                  ) : null}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-black uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
                  >
                    {text.reset}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-sunYellow px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-titleBlue transition hover:bg-white md:px-12"
                  >
                    {text.search}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
