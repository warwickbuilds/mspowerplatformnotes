---
title: Power Apps Overview
description: A practitioner's overview of Microsoft Power Apps.
---

## Canvas Apps vs Model-Driven Apps

| | Canvas Apps | Model-Driven Apps |
|---|---|---|
| **Design** | Pixel-level control | Component-based, driven by data |
| **Data source** | Any connector | Dataverse only |
| **Best for** | Task-specific tools, custom UX | Complex data-centric apps |
| **Mobile** | Responsive (manual) | Responsive (automatic) |

## Practitioner Notes

- Canvas apps degrade in performance beyond ~500 items in a collection — use `Delegation` aware functions and server-side filtering
- Use **named formulas** (introduced 2023) to replace global variables where possible — cleaner and more performant
- Component libraries allow reuse across apps but have limitations with output properties — test carefully
- App checker warnings are worth fixing — many are genuine performance issues, not just style

## Formula Tips

- Prefer `Filter()` + `LookUp()` over `Search()` for delegable queries against large Dataverse tables
- `Concurrent()` runs formulas in parallel — use on `OnStart` to reduce load time
- Keep `OnStart` lean — move logic to screen `OnVisible` where possible

## Common Gotchas

- Default mode for new apps is **Tablet** — switch to **Phone** or **Responsive** early, not after building
- SharePoint list delegation limit is 2,000 items (not 500) but `Filter` on non-indexed columns still breaks — index your columns
- Environment variables are the right way to manage connection references across environments
