# Specification

## Summary
**Goal:** Add the uploaded brand logo to the app header and fix the Memberships “Select Plan” button so it reliably opens the correct plan page in a new tab.

**Planned changes:**
- Add `logo big.png` as a static frontend asset and render it in the main AppShell header alongside the brand name, keeping the current dark luxury styling and responsive layout.
- Update the Memberships page so “Select Plan” opens the correct external plan URL in a new browser tab/window while preserving the existing membership selection persistence and current-plan UI behavior, including the existing login prompt flow for signed-out users.

**User-visible outcome:** The header shows the LE GOURMAND logo next to the brand name, and selecting a membership plan opens the appropriate plan page in a new tab without breaking existing membership selection or sign-in behavior.
