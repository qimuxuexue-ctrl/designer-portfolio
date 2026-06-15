# Localization workflow

The website uses English as the source and fallback language.

## Runtime language packs

Only reviewed, publishable copy belongs in these files:

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

## Editing a sentence

Use the same stable key in all three language files:

```ts
"home.hero.subtitle": "English final copy"
```

```ts
"home.hero.subtitle": "中文正式文案"
```

```ts
"home.hero.subtitle": "日本語の確定コピー"
```

Keys describe the function and location of copy. Do not use the sentence itself
as a key.

## Adding new copy

1. Add the English source to `locales/en.ts`.
2. Add draft translations to `copy-review.csv`.
3. Review and localize the Chinese and Japanese versions.
4. Mark the row as `final`.
5. Copy only the final text into `zh.ts` and `ja.ts`.
6. Check the page at desktop and mobile sizes.

If a translated key is missing, the website falls back to English.

## Copy status

Use these statuses in `copy-review.csv`:

- `draft`: machine translation or unfinished copy
- `review`: being checked or localized
- `final`: approved for the runtime language pack

The website does not read `copy-review.csv`. It is an editorial workspace only,
so drafts cannot accidentally appear on the live site.

## Project copy

Project names and slugs stay in `data/projects.ts`. English project copy also
stays there as the source content.

Chinese and Japanese project descriptions are maintained separately:

```text
locales/projects/zh.ts
locales/projects/ja.ts
```

Use the project slug, such as `cove-naturals`, as the stable project identifier.
