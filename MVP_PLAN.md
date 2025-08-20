# MVP Launch Plan - Carlos Omaki Tennis

## Status: Ready for Content & Deploy
**Target: Launch TODAY**

## ✅ What's Already Done
- Website structure complete
- Bilingual support (PT/EN) working
- All sections implemented
- Images present in `/public/omaki/`
- GitHub repo created
- Vercel project linked

## 🎯 MVP Tasks (2 hours total)

### 1. Replace Placeholder Content (You're doing this)
**Files to update with real content:**
- Coach bio → `components/home/PhilosophySection.tsx`
- Testimonials → `components/home/ResultsSection.tsx`
- Press clippings → `components/home/PressSection.tsx`
- Programs details → `components/home/ProgramsSection.tsx`

### 2. Quick Fixes Before Deploy (30 min)

```bash
# Remove database/email dependencies for MVP
# 1. Simplify contact form to just show success message
# 2. Remove Prisma imports
# 3. Fix any TypeScript errors

npm run type-check
npm run build
```

### 3. Git Setup & Push (10 min)

```bash
# Initialize git and push
git init
git add .
git commit -m "Initial commit - MVP ready"
git branch -M main
git remote add origin https://github.com/renatodap/COT_website.git
git push -u origin main
```

### 4. Vercel Deploy (5 min)
- Already linked to GitHub
- Will auto-deploy on push
- Check deployment at vercel.com/dashboard

## 📝 Content Sections Needing Updates

### Philosophy Section
Current: Generic coaching philosophy
Needed: Carlos Omaki's specific methodology

### Results Section  
Current: Placeholder athlete names
Needed: Real athletes (Bia Haddad, Luisa Stefani, etc.)

### Press Section
Current: Generic press mentions
Needed: Real articles/interviews about Carlos

### Programs Section
Current: Basic program descriptions
Needed: Detailed training programs offered

## 🚀 Simplified Deployment

1. **You provide content** → I update files
2. **Type check** → `npm run type-check`
3. **Build test** → `npm run build`
4. **Push to GitHub** → Auto-deploys to Vercel
5. **Live website** → Check Vercel dashboard

## ⏰ Timeline
- **NOW**: You gather content
- **30 min**: I update all content
- **10 min**: Fix any issues
- **5 min**: Push to GitHub
- **Auto**: Vercel deploys
- **DONE**: Website live!

## 🎯 Success Criteria
✅ No placeholder text
✅ Builds without errors
✅ Deploys to Vercel
✅ Accessible via domain

---
**Note**: Email forms and database can be added post-launch. Focus on getting live first!