# Localization workflow

The website uses English as the default and fallback language.

## Language packs

```text
locales/
  en.ts
  zh.ts
  ja.ts
  projects/
    zh.ts
    ja.ts
```

General interface and page copy lives in `en.ts`, `zh.ts`, and `ja.ts`.
Long project translations live in `locales/projects/`.

## Working process

1. Add new English source copy with a stable functional key.
2. Machine-translate all new copy into the Chinese and Japanese language packs.
3. Browse the deployed website in each language.
4. When a phrase needs improvement, update only its matching key in the relevant
   language pack.

No sentence-by-sentence approval table is required. The language packs always
contain the current live copy: machine translation first, then selective manual
localization whenever a specific phrase is flagged.

If a translated key is missing, the website falls back to English.

## Editing a phrase

Use the same stable key in every language file:

```ts
"home.hero.subtitle": "English copy"
```

Keys describe the function and location of copy. Do not use the sentence itself
as a key, so wording can change without changing component code.

Some display text may intentionally stay identical in every language. For
example, `home.recent` and `home.projects` always render `RECENT PROJECTS`.

## Project copy

Project names and slugs stay in `data/projects.ts`. English project copy also
stays there as the source content.

Chinese and Japanese project descriptions are maintained in:

```text
locales/projects/zh.ts
locales/projects/ja.ts
```

Use the project slug, such as `cove-naturals`, as the stable project identifier.
