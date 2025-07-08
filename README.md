# Wingman Dashboard

A modern, responsive dashboard built with Next.js 15, Tailwind CSS v4, and React 19. This project implements a pixel-perfect design based on Figma specifications with a focus on user experience and performance.

## 🚀 Features

### Core Dashboard

- **At Glance Section** - Real-time statistics with trend indicators
- **Insights Section** - Interactive charts and forecasts using Recharts
- **Orders Management** - Responsive table with sorting and pagination
- **Responsive Design** - Mobile-first approach with adaptive layouts

### Navigation & Layout

- **Sidebar Navigation** - Collapsible sidebar with active state indicators
- **Top Navigation Bar** - Mobile-responsive navbar with hamburger menu
- **Mobile Drawer** - Touch-friendly mobile navigation
- **Route-based Navigation** - Next.js App Router integration

### Error Handling & Loading States

- **Global Error Boundaries** - Graceful error handling with recovery options
- **Loading States** - Skeleton loaders and loading spinners
- **Special Pages** - 404, error, and loading pages
- **Error Recovery** - Retry mechanisms and fallback UI

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Charts**: Recharts
- **Icons**: Custom SVG icons
- **State Management**: React hooks
- **Responsive**: Mobile-first design
- **Package Manager**: pnpm (with npm fallback)

## 📁 Project Structure

```structure
wingman-coding-challenge/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with sidebar/navbar
│   ├── page.tsx                 # Dashboard home page
│   ├── loading.tsx              # Global loading state
│   ├── error.tsx                # Global error handling
│   ├── not-found.tsx            # 404 page
│   ├── globals.css              # Global styles
│   └── favicon.ico              # Site favicon
├── components/                   # React components
│   ├── shared/                  # Reusable components
│   │   ├── LayoutWrapper.tsx    # Client-side layout wrapper
│   │   ├── LoadingSpinner.tsx   # Loading spinner component
│   │   ├── PageLayout.tsx       # Page layout wrapper
│   │   ├── Skeleton.tsx         # Skeleton loading components
│   │   ├── StatsCard.tsx        # Statistics card component
│   │   ├── Sidebar.tsx          # Main sidebar component
│   │   └── Navbar.tsx           # Top navigation bar
│   └── dashboard/               # Dashboard-specific components
│       ├── AtGlance.tsx         # Statistics cards
│       ├── Insights.tsx         # Charts and forecasts
│       └── Orders.tsx           # Orders table
├── data/                        # Data and types
│   ├── mock/                    # Mock data
│   │   ├── AtGlance.data.ts    # Statistics data
│   │   ├── Insights.data.ts    # Chart data
│   │   ├── Orders.data.ts      # Orders data
│   │   ├── Navbar.data.ts      # Navigation data
│   │   └── SideMobilebar.data.ts # Mobile sidebar data
│   └── api/                     # API routes (if needed)
├── types/                       # TypeScript types
│   ├── sidebar.type.ts          # Sidebar type definitions
│   └── navbar.type.ts           # Navbar type definitions
├── public/                      # Static assets
│   ├── svg/                     # SVG icons
│   └── image/                   # Image assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
└── eslint.config.mjs            # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dchobarkar/wingman-coding-challenge
   cd wingman-coding-challenge
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The dashboard is fully responsive with the following breakpoints:

- **Mobile (< 768px)**: Sidebar hidden, hamburger menu, card-based layouts
- **Tablet (768px - 1024px)**: Collapsed sidebar, optimized table columns
- **Desktop (> 1024px)**: Full sidebar, complete table view

## 🧪 Development

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

### Performance

- Next.js Image optimization
- Code splitting with dynamic imports
- Optimized bundle sizes
- Responsive image loading
- Turbopack for faster development

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 📦 Available Scripts

```bash
# Development
pnpm dev           # Start development server with Turbopack
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Made with ❤️ by Darshan Jitendra Chobarkar

## 💡 Author

Built by [Darshan Chobarkar](https://github.com/dchobarkar)  
LinkedIn: [https://www.linkedin.com/in/dchobarkar/](https://www.linkedin.com/in/dchobarkar/)
