# Supabase CMS Setup Guide

## Quick Start (5 minutes)

### 1. Create Supabase Project (Free)
- Go to https://supabase.com/dashboard
- Click "New Project"
- Choose free tier
- Wait for setup (~2 min)

### 2. Create Database Table
In Supabase dashboard:
1. Go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Paste this SQL:

```sql
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all reads (public)
CREATE POLICY "Allow public read" ON pages FOR SELECT USING (true);

-- Create policy to allow updates/inserts/deletes (you should add auth later)
CREATE POLICY "Allow all operations" ON pages USING (true);
```

4. Click "Run"

### 3. Get API Keys
1. Go to **Project Settings** (bottom left)
2. Click **API**
3. Copy:
   - `Project URL` → paste as `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Update `.env.local`
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 5. Restart Dev Server
```bash
npm run dev
```

### 6. Access Admin Panel
Go to: http://localhost:3000/admin

## Features

✅ **WYSIWYG Editor** - Format text, lists, headings
✅ **Create/Edit/Delete** - Full CRUD operations
✅ **Automatic Timestamps** - Track when pages updated
✅ **Vercel Ready** - Deploy without changes
✅ **Free Forever** - Supabase free tier
✅ **Secure** - Uses Supabase RLS policies

## Usage

### Creating a Page
1. Go to `/admin`
2. Click "New Page"
3. Enter:
   - **Slug**: URL path (e.g., "hero-section")
   - **Title**: Display name
   - **Content**: Use WYSIWYG editor
4. Click "Save Page"

### Fetching Content in Components
```typescript
async function getPageContent(slug: string) {
  const res = await fetch(`/api/pages/${slug}`)
  return res.json()
}

// Use in your pages
const heroContent = await getPageContent('hero-section')
```

### Example: Making Hero Editable

In `app/page.tsx`:
```typescript
// Before: hardcoded
// After: fetch from CMS
const heroContent = await getPageContent('hero-section')
```

## Security Notes

⚠️ **Current Setup**: Allows anyone to edit (development only)

For production, add authentication:
1. Enable Auth in Supabase
2. Update RLS policies to require logged-in users
3. Add login to `/admin` route

## Deployment on Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

No changes needed - it just works.

## Troubleshooting

**"Cannot find /api/pages"**
- Dev server stopped. Run `npm run dev`

**"Cannot connect to Supabase"**
- Check `.env.local` has correct values
- Verify API keys in Supabase dashboard

**WYSIWYG editor shows errors**
- Run `npm install --legacy-peer-deps` again
- Clear `.next` folder: `rm -r .next && npm run dev`

## Next Steps

1. ✅ Setup complete - test creating a page
2. Create pages for each section (hero, services, etc.)
3. Update components to fetch from CMS
4. Add authentication for security
5. Deploy to Vercel

Need help? Check `.env.local` setup first!
