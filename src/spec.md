# Specification

## Summary
**Goal:** Expand the Products catalog with the user-provided gourmet items and ensure each new item has its own distinct placeholder image while keeping existing cart behavior unchanged.

**Planned changes:**
- Add new product entries to `frontend/src/data/products.ts` for: Beluga caviar; Jamón ibérico de bellota; Duck foie gras; Premium saffron threads; Manuka honey UMF 20+; Specialty microlot coffee; Silver Needle white tea; Madagascar Bourbon vanilla; Alba white truffle; Smoked sea salt flakes; Traditional Balsamic Vinegar of Modena DOP; Black truffle oil; Artisanal bronze-cut pasta; Aged Carnaroli rice; Wild berry gourmet jam; French whole-grain mustard; Natural fermentation artisanal panettone.
- Ensure each new product includes all required `Product` fields (`id`, `name`, `description`, `price`, `imageSrc`, `altText`) and uses a unique, stable `id` across the full catalog.
- Add a unique placeholder image asset for each newly added product under `frontend/public/assets/generated/` and reference it via `/assets/generated/...` in `imageSrc`.
- Keep the existing Products page rendering pattern and cart interactions intact so new products can be added/removed and totaled like existing products.

**User-visible outcome:** The Products screen shows the original items plus the added gourmet products, each with its own image, and users can add/remove these new products in the cart with totals updating normally.
