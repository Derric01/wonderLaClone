# 🎢 Wonderla Clone - Iconic Rides Carousel

> **⚠️ DISCLAIMER: This project is created for educational and study purposes only. It is not affiliated with or endorsed by Wonderla Holidays Limited. All Wonderla trademarks, logos, and brand names are the property of their respective owners. This is a technical demonstration project to showcase modern React development skills and is not intended for commercial use.**

A beautiful, responsive carousel component built for Wonderla's "Our Iconic Rides" section. This project showcases modern React development with TypeScript, featuring smooth animations, auto-scroll functionality, and responsive design.

## 🚀 Live Demo

**[View Live Demo on Vercel](https://wonderla-clone-frontend.vercel.app)** *(will be available after deployment)*

## ✨ Features

### Core Features
- **Responsive Carousel**: Displays 4 ride cards with smooth horizontal scrolling
- **Category Navigation**: Switch between Land, Water, and Kids rides
- **Auto-scroll**: Automatic carousel progression with pause on hover
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Navigation Controls**: Previous/Next arrows and pagination dots

### Technical Highlights
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **ShadCN UI** components for consistent design
- **Framer Motion** for smooth animations
- **Responsive Design** that works on all devices
- **Performance Optimized** with proper component structure

### UI/UX Features
- **Wonderla Color Scheme**: Authentic blue and yellow branding
- **Hover Effects**: Interactive card scaling and image zoom
- **Loading Animations**: Cards animate in from bottom on initial load
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Mobile Responsive**: Optimized for mobile and tablet viewing

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wonderla-clone-frontend.git
   cd wonderla-clone-frontend/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy: Y
   - Which scope: (select your account)
   - Link to existing project: N
   - Project name: wonderla-clone-frontend
   - Directory: ./frontend
   - Override settings: N

4. **Your app will be live at**: `https://your-app-name.vercel.app`

### Alternative: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect your GitHub repo at [netlify.com](https://netlify.com)

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx      # Reusable button component
│   │   │   └── card.tsx        # Reusable card component
│   │   ├── RideCard.tsx        # Individual ride card
│   │   └── RideCarousel.tsx    # Main carousel component
│   ├── data/
│   │   └── rides.ts            # Ride data and categories
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── types/
│   │   └── ride.ts             # TypeScript interfaces
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Adding New Rides

Edit `src/data/rides.ts`:

```typescript
{
  id: 'new-ride',
  title: 'New Ride',
  location: 'Location',
  description: 'Ride description...',
  image: 'https://your-image-url.jpg',
  category: 'land' // or 'water' or 'kids'
}
```

### Modifying Colors

Update `tailwind.config.js`:

```javascript
wonderla: {
  blue: '#1E3A8A',
  yellow: '#FCD34D',
  // Add your custom colors
}
```

### Animation Timing

Modify animations in `RideCarousel.tsx`:

```typescript
// Auto-scroll interval
const interval = setInterval(() => {
  // Change 4000 to your preferred timing (milliseconds)
}, 4000);
```

## 📱 Responsive Design

- **Desktop**: Shows 4 cards in viewport
- **Tablet**: Responsive grid with proper spacing
- **Mobile**: Optimized for touch navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Component-based** architecture

## 🎯 Performance

- **Lazy Loading**: Images load progressively
- **Optimized Animations**: 60fps smooth animations
- **Bundle Size**: Optimized with Vite
- **SEO Ready**: Proper meta tags and structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚖️ Legal Disclaimer

**This project is created purely for educational and portfolio demonstration purposes.** 

- **Not for Commercial Use**: This project is not intended for commercial use or distribution
- **Educational Purpose**: Created to demonstrate modern React development skills and techniques
- **No Affiliation**: Not affiliated with, endorsed by, or connected to Wonderla Holidays Limited
- **Trademark Notice**: All Wonderla trademarks, logos, and brand elements are property of Wonderla Holidays Limited
- **Fair Use**: This project falls under fair use for educational and technical demonstration purposes
- **No Copyright Infringement Intended**: All content is used for educational purposes only

If you are a representative of Wonderla and have concerns about this project, please contact the repository owner.

## 🙏 Acknowledgments

- [Wonderla](https://wonderla.com) for design inspiration
- [ShadCN UI](https://ui.shadcn.com) for component library
- [Framer Motion](https://framer.com/motion) for animations
- [Tailwind CSS](https://tailwindcss.com) for styling

---

**Built with ❤️ for Educational Purposes - Modern React Development Showcase**

*Showcasing modern React development with TypeScript, animations, and responsive design.*
