# Image assets

Store all website images in this folder so they live in GitHub with the rest of the project.

## Folder structure

- `brand/` → logos, icons, identity assets
- `hero/` → homepage hero images
- `use-cases/` → section cards for use cases
- `benefits/` → section cards for benefits

## Naming convention

Use lowercase kebab-case file names:

- ✅ `organic-cotton.jpg`
- ✅ `corporate-gifts.webp`
- ❌ `Image 1.PNG`

## How to reference in components

For files inside `public/images`, use root-relative URLs:

```tsx
<img src="/images/hero/organic-cotton.jpg" alt="Organic cotton" />
```

## Suggested workflow

1. Add image file to the right subfolder.
2. Commit the file to GitHub.
3. Reference it using `/images/...` in your component.
4. Optionally compress before commit (WebP/JPG for photos, SVG/PNG for logos).
