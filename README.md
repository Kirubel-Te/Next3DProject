# PrintForge - 3D Models Directory

PrintForge is a Next.js (App Router) project that showcases a 3D printing model directory. It includes a landing page, a models catalog with search and category filters, model detail pages, and an about page. Data is currently served from local JSON files, structured so it can be swapped for a real API later.

## Key Features

- Home page with a hero section and call-to-action.
- Models catalog with search and category navigation.
- Category-specific listing pages.
- Model detail pages with likes, category, and date added.
- Responsive navigation and layout styling using Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React (icons)

## Project Structure

```
app/
	layout.tsx           # Root layout, fonts, global nav
	globals.css          # Base styles and Tailwind setup
	Nav.tsx              # Sticky navigation bar
	page.tsx             # Home page
	3d-models/
		page.tsx           # Models catalog with search
		PageCard.tsx       # Model preview card
		CategoryNav.tsx    # Category nav (mobile + sidebar)
		[id]/page.tsx      # Model detail page
		category/[categoryName]/page.tsx  # Category listing page
	about/
		page.tsx           # About page
		mission/page.tsx   # Mission placeholder
	data/
		categories.json    # Categories data
		models.json        # Models data
	lib/
		categories.ts      # Category helpers
		models.ts          # Model helpers
	types/
		index.ts           # Shared types
public/
	hero-image 1.png     # Example hero image
	printforge-logo.svg  # Brand assets
```

## Routes

- `/` - Landing page
- `/3d-models` - Models catalog with search
- `/3d-models/[id]` - Model detail page
- `/3d-models/category/[categoryName]` - Category listing
- `/about` - About page
- `/about/mission` - Mission placeholder

## Data Layer

Models and categories are stored in JSON files under `app/data`. Helper functions in `app/lib` expose a simple API:

- `getAllModels()` and `getModelById()` in `app/lib/models.ts`
- `getAllCategories()` and `getCategoryBySlug()` in `app/lib/categories.ts`

These functions are intentionally async to make future migration to a database or API straightforward.

## Styling

Global styles live in `app/globals.css` and Tailwind CSS is used for layout and components. Google fonts are loaded in the root layout and applied to headings.

## Scripts

From the project root:

```
npm run dev     # Start local development
npm run build   # Build for production
npm run start   # Run the production build
npm run lint    # Lint with ESLint
```

## Notes

- Images on model cards currently use a placeholder image.
- Metadata in `app/layout.tsx` is still the default and can be updated to match the brand.

## Next Ideas (Optional)

- Replace JSON data with a real API or database.
- Add model upload flow and user profiles.
- Improve model detail pages with gallery, files, and download actions.
- Add tests for data helpers and route behavior.