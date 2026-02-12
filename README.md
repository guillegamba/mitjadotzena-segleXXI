This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1CypKJ0vkvtBKwEc4FBOZTxVvUyjYcMCA

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Manage images directly in GitHub

This repo is prepared to host image assets locally under `public/images/`.

- Folder guide: `public/images/README.md`
- Migration checklist: `public/images/migration-map.md`

When you add images there, reference them in components with root-relative URLs, for example:

```tsx
<img src="/images/hero/organic-cotton.jpg" alt="Organic cotton" />
```
