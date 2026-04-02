<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Design System Specification

## 1. Overview & Creative North Star: "The Kinetic Monolith"

This design system is a departure from standard automation templates. We are moving away from "generic industrial" and into a realm of **Kinetic Monolithism**. This aesthetic reflects the heavy-duty precision of robotics through massive, authoritative typography and a layout that feels engineered rather than merely designed.

**The Creative North Star:** We treat the digital canvas like an industrial control room—sophisticated, high-contrast, and deeply layered. We break the template look by utilizing **intentional asymmetry** (e.g., headers offset from content blocks), **overlapping tech-lines**, and a hierarchy that emphasizes the physical "weight" of the machinery through tonal depth and stark color shifts.

---

## 2. Colors: Industrial Depth & Signal Highlighting

Our palette is grounded in deep obsidian blacks and mechanical greys, punctuated by a high-visibility "Signal Yellow."

- **Primary & High-Visibility:** The `primary_fixed` (`#e1ed00`) is our "Hazard/Signal" color. It is used sparingly to draw the eye to critical conversion points or active machine states.

- **Secondary & Error:** The `secondary` (`#ffb4a8`) and `on_secondary` tones provide a subtle industrial red, reserved for safety warnings or high-priority alerts.

- **Surface Hierarchy:**

- **Background (`#131313`):** The base floor of the factory.

- **Surface-Container-Low (`#1b1b1b`):** Recessed panels.

- **Surface-Container-Highest (`#353535`):** Raised interactive consoles.

### The "No-Line" Rule

To maintain a high-end, bespoke feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For instance, a Service Card section using `surface_container_low` should sit directly on a `background` canvas.

### Glass & Texture

For floating "HUD" (Heads-Up Display) elements, use **Glassmorphism**. Apply `surface_variant` at 60% opacity with a `backdrop-blur` of 12px. This creates a high-tech "lens" effect over moving imagery or robotic components.

---

## 3. Typography: Authoritative Engineering

We utilize a pairing of **Space Grotesk** for machine-like precision in headlines and **Inter** for data-heavy readability.

- **Display & Headline (Space Grotesk):** Use `display-lg` (3.5rem) for hero statements. These should be tight-tracked (-2%) to feel like a stamped metal plate.

- **Body & Labels (Inter):** Use `body-md` for technical descriptions. The clean, geometric nature of Inter ensures that even dense spec-sheets remain legible.

- **Hierarchy Logic:** Large, aggressive headline scales communicate the power of the robotics, while smaller, high-contrast labels (`label-md`) provide the refined "instruction manual" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "soft" for an industrial system. We achieve depth through **Tonal Layering**.

- **The Layering Principle:** Depth is "stacked." Place a `surface_container_highest` card on a `surface_container_low` background. The shift in grey-value creates a natural lift.

- **Ambient HUD Shadows:** When an element must float (like a configuration modal), use a diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should be tinted with the `surface_tint` to keep it integrated with the dark theme.

- **The "Ghost Border" Fallback:** If a container requires definition against a similar tone, use the `outline_variant` token at **15% opacity**. This creates a "hairline" suggestion of a border without breaking the sleek, modern aesthetic.

---

## 5. Components

### Buttons

- **Primary (The Signal):** Background `primary_fixed` (`#e1ed00`), Text `on_primary_fixed` (`#1b1d00`). Sharp corners (`rounded-sm`: 0.125rem).

- **Secondary (The Frame):** Background `transparent`, "Ghost Border" of `primary_fixed` at 20%.

- **Interaction:** On hover, primary buttons should "glow" using a subtle outer shadow of the same color.

### Service Cards & Feature Grids

- **Construction:** Use `surface_container_low`. Forbid divider lines.

- **Spacing:** Use `spacing-8` (2rem) for internal padding to allow the technical content to "breathe."

- **Visual Hook:** Include a small "Index Number" in the top-right of each card (e.g., 01, 02) using `label-sm` in `primary_fixed` to mimic industrial part numbering.

### Input Fields

- **State:** Resting state uses `surface_container_high`.

- **Focus:** The indicator should be a bottom-border-only highlight in `primary_fixed` (`#e1ed00`), creating a "scanning" line effect.

### Robust Footer

- **Structure:** Use `surface_container_lowest`.

- **Layout:** Organize by "Machine Zones" (e.g., Solutions, Technology, Company). Use `title-sm` for headers in all-caps to maintain the high-tech, authoritarian feel.

---

## 6. Do’s and Don’ts

### Do:

- **Use Intentional Asymmetry:** Align text to the left but allow robotic imagery to bleed off the right edge of the grid.

- **Leverage Verticality:** Use large gaps (`spacing-24`) between sections to create an editorial, premium feel.

- **Mix Weights:** Pair a `display-lg` (Bold) headline with a `body-sm` (Regular) caption immediately below it for high-contrast sophistication.

### Don’t:

- **No Rounded Corners:** Avoid `rounded-xl` or `full`. The robotics world is precise and angular; stick to `none` or `sm`.

- **No Standard Grey Shadows:** Never use a default #000000 shadow on a dark background; it looks muddy. Use tonal shifts.

- **No "Blue" Links:** Never use standard browser-blue. All interactive triggers must use the `primary_fixed` yellow or `primary` white.

---

## 7. Spacing & Grid System

The grid is a 12-column industrial framework, but content should rarely span all 12 columns.

- **The "Power Column":** Shift your main copy to columns 2 through 8, leaving columns 9 through 12 for "technical metadata"—small labels, SKU numbers, or secondary stats that reinforce the "ROBOTY4U" technical prowess.

- **Vertical Rhythm:** Use `spacing-10` (2.5rem) for component grouping and `spacing-20` (5rem) for section breaks.
<!-- END:nextjs-agent-rules -->
