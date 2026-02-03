
# Rework Hero Section's AuditInput Component

## Overview
Redesign the AuditInput component within the Hero section to have only 3 service options, improved mobile responsiveness, and enhanced visual effects with soft hue color oscillation inside the card (in addition to the existing flashlight effect).

---

## Changes Summary

### 1. Reduce Options to 3
Remove the current 4 options and replace with:
- **My High-Ticket Sales** (Diamond icon)
- **My Best-Selling Products** (Package icon) 
- **My Services** (Briefcase/Settings icon)

### 2. Mobile-First Layout Optimization
- Single column layout on mobile (stack options vertically)
- 3-column grid on tablet/desktop for the options
- Larger touch targets on mobile (min 48px height)
- Increased padding and spacing for mobile
- Full-width CTA button with proper mobile sizing

### 3. Soft Hue Color Oscillation Inside Card
Add a slow, flowing background gradient animation inside the card that shifts between pink, violet, and orange hues:
- Very slow animation (12-15 seconds per cycle)
- Subtle opacity (8-12%) so it doesn't overwhelm content
- Smooth fade transitions between colors
- Works independently of the flashlight effect

### 4. Keep Flashlight Effect
The existing cursor-following flashlight glow will remain functional, layered on top of the oscillating background.

---

## Technical Details

### File Modified
`src/components/landing/AuditInput.tsx`

### New Options Array
```typescript
const options = [
  { id: "high-ticket", label: "My High-Ticket Sales", icon: "💎" },
  { id: "products", label: "My Best-Selling Products", icon: "📦" },
  { id: "services", label: "My Services", icon: "⚙️" },
];
```

### New CSS Animation (inside component)
```css
@keyframes hueOscillation {
  0%, 100% {
    background: radial-gradient(ellipse at 30% 20%, 
      hsl(330 100% 60% / 0.1), transparent 50%),
      radial-gradient(ellipse at 70% 80%, 
      hsl(280 80% 60% / 0.08), transparent 50%);
  }
  33% {
    background: radial-gradient(ellipse at 60% 30%, 
      hsl(280 80% 60% / 0.1), transparent 50%),
      radial-gradient(ellipse at 30% 70%, 
      hsl(25 100% 55% / 0.08), transparent 50%);
  }
  66% {
    background: radial-gradient(ellipse at 40% 70%, 
      hsl(25 100% 55% / 0.1), transparent 50%),
      radial-gradient(ellipse at 70% 30%, 
      hsl(330 100% 60% / 0.08), transparent 50%);
  }
}
```

### Mobile Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
  {/* Option buttons with proper touch sizing */}
</div>
```

### Combined Background Layers
1. **Base layer**: Card background color
2. **Oscillation layer**: Slow-fading color gradient animation
3. **Flashlight layer**: Cursor-tracking radial gradient (on hover)

---

## Visual Behavior

| Screen Size | Options Layout | Spacing |
|-------------|----------------|---------|
| Mobile (<640px) | 1 column, stacked | Larger padding, 56px button height |
| Tablet (640-1024px) | 3 columns | Medium padding |
| Desktop (>1024px) | 3 columns | Standard padding |

The color oscillation will create a subtle, living effect inside the card - colors will slowly drift and fade between pink, violet, and orange zones, giving the module a premium "breathing" aesthetic without being distracting.
