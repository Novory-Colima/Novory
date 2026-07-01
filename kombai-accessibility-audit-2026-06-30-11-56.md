# Accessibility Audit Report - Novory Website

**Date:** 2026-06-30
**URL:** http://localhost:4323/
**Engine:** axe-core 4.11.1

## Summary of Violations

### 1. Color Contrast (Serious)
Several elements failed the WCAG 2 AA minimum contrast ratio (4.5:1).

*   **Accent Buttons:** The "Agenda una asesoría" button had a contrast of 3.67:1.
*   **Form Labels:** Small uppercase labels had a contrast of 3.8:1.

**Fix Applied:**
*   Darkened the primary accent color from `#4F7DFF` to `#3d68ff` to achieve a 4.5:1 ratio with white text.
*   Updated form labels to use a higher contrast variable `--color-text-muted` (#8a94b0).

### 2. Heading Order (Moderate)
The semantic order of headings was inconsistent in some sections.

*   **Portfolio:** Cases were using `h4` while the section title was `h2`.
*   **About Section:** Subsections were using `h4`.
*   **Footer:** Column titles were using `h4`.

**Fix Applied:**
*   Promoted `h4` elements to `h3` where appropriate to maintain a logical hierarchy (H1 -> H2 -> H3).

## Status
All identified high-impact accessibility issues have been addressed in the latest code iteration.
