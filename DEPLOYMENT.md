# AlfaStack Deployment Guide

## 🚀 Vercel Deployment

### Prerequisites

- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Git repository connected to Vercel

### Quick Deploy

1. **Connect to Vercel Dashboard**

   ```bash
   vercel login
   ```

2. **Deploy directly from CLI**

   ```bash
   vercel --prod
   ```

3. **Or connect via GitHub/GitLab**
   - Push code to your repository
   - Connect repository in Vercel dashboard
   - Automatic deployments on every push

### Environment Setup

Create a `.env.local` file for local development:

```env
NODE_ENV=development
VITE_API_URL=http://localhost:8080
```

For production, set these in Vercel dashboard:

```env
NODE_ENV=production
```

### Build Configuration

The project uses:

- **Build Command**: `npm run build:vercel`
- **Output Directory**: `dist/spa`
- **Install Command**: `npm install`
- **Dev Command**: `npm run dev`

### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificates are auto-generated

## 🛠️ Alternative Deployments

### Netlify

1. Connect repository to Netlify
2. Build settings:
   - Build command: `npm run build:client`
   - Publish directory: `dist/spa`
3. Add environment variables in dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# Serve static files
npm run preview
```

## 📁 Project Structure (Refactored)

```
client/
├── components/
│   ├── animations/
│   │   ├── GlitchText.tsx
│   │   ├── ParallaxText.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── FloatingParticles.tsx
│   │   └── index.ts
│   └── sections/
│       ├── HeroSection.tsx
│       ├── WhoWeAreSection.tsx
│       ├── TransformationModelSection.tsx
│       ├── TechStackSection.tsx
│       ├── ContactSection.tsx
│       └── index.ts
├── pages/
│   ├── Index.tsx (main page)
│   └── NotFound.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── App.tsx
└── global.css
```

## 🎨 Component Features

### Animation Components

- **GlitchText**: RGB separation glitch effects with rainbow mode
- **ParallaxText**: Smooth parallax scrolling with customizable speed
- **MagneticButton**: Mouse-following magnetic interactions
- **FloatingParticles**: Multi-colored particle system

### Section Components

- **HeroSection**: Main landing with animated background and CTAs
- **WhoWeAreSection**: Company introduction with parallax effects
- **TransformationModelSection**: 4-step process with animated timeline
- **TechStackSection**: Technology showcase with hover effects
- **ContactSection**: Interactive contact form with animations

## 🔧 Development

### Local Development

```bash
npm install
npm run dev
```

### Type Checking

```bash
npm run typecheck
```

### Build Testing

```bash
npm run build
npm run preview
```

## 🎯 Performance Optimizations

- **Code Splitting**: Components are modular and lazy-loadable
- **Animation Optimization**: Hardware-accelerated transforms
- **CSS Variables**: Dynamic theming with HSL color system
- **Image Optimization**: Responsive images and lazy loading
- **Bundle Size**: Optimized imports and tree-shaking

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📞 Support

For deployment issues:

1. Check build logs in Vercel dashboard
2. Verify environment variables
3. Test locally with `npm run build`
4. Contact support if issues persist
