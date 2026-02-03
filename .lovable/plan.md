
# Redesign MoneyLeakSection: The "HOW" Process Section

## Overview
Transform the current "3 Ways You're Losing Easy Money" section from a problem-focused layout into a solution-focused "HOW" section inspired by peec.ai's "Key Features" design. This will showcase Aisearche's process in a clean, step-by-step format with visual indicators and interactive elements.

---

## Design Approach (Inspired by peec.ai)

The new section will follow peec.ai's pattern of:
1. Clean, minimal layout with generous whitespace
2. Step-by-step feature walkthrough
3. Large typography with supporting visuals
4. Interactive mock UI elements showing the product in action
5. Alternating left/right layout for visual rhythm

---

## New Section Structure

### Header
- Section tag: "HOW IT WORKS"
- Main headline: "Turn AI Search Insights Into New Customers"
- Subheadline: Brief value proposition

### 3 Key Steps (replacing the 3 "leaks")

| Step | Title | Description | Visual Element |
|------|-------|-------------|----------------|
| 01 | **Scan Your Presence** | We analyze how AI platforms currently see (or don't see) your business | Mock audit scan interface with live status indicators |
| 02 | **Translate for AI** | We structure your content so AI reads it as trusted facts | Knowledge graph/entity visualization |
| 03 | **Monitor & Scale** | Track your AI visibility weekly and discover new revenue opportunities | Growth chart with trending metrics |

---

## Technical Implementation

### File Modified
`src/components/landing/MoneyLeakSection.tsx`

### Layout Changes
- Full-width alternating rows (image left/text right, then swap)
- Each step in its own container with generous padding
- Large step numbers with gradient treatment
- Glass-morphism cards for the visual elements
- Scroll-triggered animations using Intersection Observer

### Visual Elements for Each Step

**Step 1 - Scan Interface Mock:**
```text
+----------------------------------+
|  Audit in Progress...      [Live]|
|  --------------------------------|
|  [*] robots.txt accessible       |
|  [*] Structured data found       |
|  [!] Pricing not machine-readable|
|  [x] AI crawl blocked            |
+----------------------------------+
```

**Step 2 - Knowledge Graph:**
```text
+----------------------------------+
|  Entity Mapping            [Live]|
|  --------------------------------|
|  Business --> Services --> Price |
|      |           |               |
|   Location    Reviews            |
+----------------------------------+
```

**Step 3 - Growth Metrics:**
```text
+----------------------------------+
|  Weekly Performance        [Live]|
|  --------------------------------|
|  AI Visibility    +38%    ↗      |
|  Brand Mentions   156     ↗      |
|  Intent Signals   24 new         |
+----------------------------------+
```

### Animations
- Step numbers count up on scroll (reuse useCountUp hook from WakeUpSection)
- Cards fade in with slight slide-up effect
- Live status indicators pulse gently
- Progress lines between steps animate on scroll

### Mobile Responsiveness
- Stacked layout on mobile (visual above text)
- Full-width cards with proper padding
- Smaller typography scales appropriately

---

## Color Scheme
- Pink (#F62682) for primary accents and step numbers
- Violet for secondary highlights
- Orange for success indicators and CTAs
- Dark glass-morphism backgrounds
- No blue anywhere

---

## Code Structure

```typescript
const steps = [
  {
    number: "01",
    title: "Scan Your Presence",
    description: "We analyze how AI platforms currently see your business...",
    visual: <ScanVisual />, // Internal component
  },
  // ... steps 02, 03
];

export function MoneyLeakSection() {
  return (
    <section>
      {/* Header */}
      {/* Steps with alternating layout */}
      {steps.map((step, index) => (
        <div className={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}>
          {/* Visual */}
          {/* Content */}
        </div>
      ))}
    </section>
  );
}
```

---

## Visual Hierarchy

1. Section badge and headline (centered)
2. Step 01 - Full width row with scan interface
3. Step 02 - Full width row (reversed) with knowledge graph
4. Step 03 - Full width row with metrics dashboard
5. Connecting visual elements between steps (vertical line with dots)
