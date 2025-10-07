# GustyCube Portfolio Website - Development Guidelines

## General Guidelines

* Use **Tailwind CSS v4** for all styling - avoid inline styles or custom CSS files unless absolutely necessary
* Implement **responsive designs** using Tailwind's mobile-first approach (default, then `sm:`, `md:`, `lg:` breakpoints)
* Utilize **Flexbox and Grid** layouts by default - only use absolute positioning when necessary (e.g., decorative elements)
* Keep components **small and focused** - extract reusable logic into separate files
* Use **TypeScript** for type safety - always define proper types for props and state
* Implement **animations using Motion (Framer Motion)** for smooth, performant transitions
* Follow the **dark mode first** design approach - the site uses dark theme by default

## Component Structure

### Component Organization
* Place all components in `/src/components/` directory
* UI components (shadcn/ui) go in `/src/components/ui/`
* Keep related components together (e.g., form components, layout components)
* Export named functions, not default exports for better refactoring

### Component Patterns
* Use functional components with hooks (no class components)
* Implement motion animations using Motion's declarative API
* Structure components with clear sections:
  - Imports at top
  - Type definitions
  - Constants and data arrays
  - Main component function
  - Helper functions at bottom if needed

## Design System

### Color Palette
* Primary: Used for key CTAs, accents, and brand elements
* Background: Dark theme with gradients (`from-background via-background/95`)
* Muted: For secondary text and less emphasized content
* Card: For elevated surfaces and containers
* Use semantic color tokens: `text-primary`, `bg-card`, `text-muted-foreground`

### Typography
* Headings: Use responsive sizing with Tailwind classes
  - Large headings: `text-3xl md:text-4xl lg:text-5xl`
  - Medium headings: `text-2xl md:text-3xl`
* Body text: Base size with `text-muted-foreground` for secondary content
* Code/mono: Use `font-mono` for technical content

### Spacing
* Use consistent spacing: `py-20 px-6` for sections
* Container: `container mx-auto max-w-4xl` for content width
* Card spacing: `p-6` for card content
* Gaps: `gap-4`, `gap-6`, `space-y-6` for consistent spacing between elements

## Animation Guidelines

### Motion Variants
* Use consistent animation patterns across the site
* Standard fade-in: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`
* Stagger children animations with `staggerChildren` in container variants
* Duration: Typically `0.6s` for smooth animations
* Easing: `ease: "easeOut"` for natural motion
* Use `viewport={{ once: true }}` to prevent re-triggering on scroll

### Performance
* Keep animations smooth - avoid animating too many elements at once
* Use `transform` and `opacity` for better performance
* Implement `lazy loading` or conditional rendering for complex animations

## Component Library Usage

### shadcn/ui Components
* Use existing UI components from `/src/components/ui/` when available
* Common components: Card, Button, Badge, Alert
* Maintain consistent styling with the `cn()` utility for class merging

### Card Component Pattern
```tsx
<Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Button Variants
* Primary: Default button for main actions
* Outline: `variant="outline"` for secondary actions
* Sizes: `size="sm"`, `size="default"`, `size="lg"`

## Icons

* Use **Lucide React** for all icons
* Import icons individually: `import { Icon } from 'lucide-react'`
* Standard icon size in cards: `h-6 w-6`
* Icon in buttons: `h-5 w-5` with appropriate margin

## Layout Patterns

### Section Layout
```tsx
<section className="py-20 px-6">
  <div className="container mx-auto max-w-4xl">
    <motion.div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Section Title</h2>
      <p className="text-xl md:text-2xl text-muted-foreground">Description</p>
    </motion.div>
    {/* Section content */}
  </div>
</section>
```

### Grid Layout
* Projects/Cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
* Contact methods: `grid grid-cols-1 md:grid-cols-3 gap-6`
* Adjust grid columns based on content needs

## Best Practices

### Accessibility
* Use semantic HTML elements
* Include proper ARIA labels where needed
* Maintain keyboard navigation support
* Test with screen readers when adding interactive elements

### Performance
* Use React hooks efficiently (useEffect, useState, useMemo)
* Avoid unnecessary re-renders
* Lazy load heavy components when possible
* Optimize images and assets

### Code Quality
* Keep functions small and focused
* Use meaningful variable and function names
* Add comments only when logic is complex
* Follow existing code style and patterns
* Run builds to catch TypeScript errors before committing

### Styling
* Use Tailwind utility classes in a logical order: layout → spacing → sizing → colors → effects
* Group related utilities together
* Break very long className strings into template literals if needed
* Leverage `cn()` utility for conditional classes

## Meta Tags and SEO

* Update meta tags when adding new routes/pages
* Use structured data (JSON-LD) for better SEO
* Include descriptive titles and descriptions
* Optimize for social media sharing (Open Graph tags)

## File Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   ├── Hero.tsx      # Section components
│   └── ...
├── utils/            # Utility functions
├── styles/           # Global styles if needed
├── guidelines/       # AI guidelines
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Testing and Validation

* Build the project before committing: `npm run build`
* Test responsive design at different breakpoints
* Verify animations work smoothly
* Check dark mode compatibility
* Validate TypeScript types compile without errors
