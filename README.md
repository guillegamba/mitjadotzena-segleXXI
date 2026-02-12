<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1CypKJ0vkvtBKwEc4FBOZTxVvUyjYcMCA

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Manage images directly in GitHub

This repo is prepared to host image assets locally under `public/images/`.

- Folder guide: `public/images/README.md`
- Migration checklist: `public/images/migration-map.md`

When you add images there, reference them in components with root-relative URLs, for example:

```tsx
<img src="/images/hero/organic-cotton.jpg" alt="Organic cotton" />
```
