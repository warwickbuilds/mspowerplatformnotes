---
title: Power Automate Overview
description: A practitioner's overview of Microsoft Power Automate.
---

## Flow Types

| Type | Description |
|---|---|
| **Automated cloud flow** | Triggered by an event (e.g. new email, row created) |
| **Instant cloud flow** | Triggered manually or from Power Apps |
| **Scheduled cloud flow** | Runs on a schedule (cron-style) |
| **Desktop flow** | RPA — automates legacy desktop/web UI |
| **Process flow** | Stage-gated business process guidance |

## Practitioner Notes

- Use **scopes** to group related actions — makes error handling and readability much better
- Set `Configure run after` on every critical action — the default ("succeeded only") hides failures silently
- Avoid `Apply to each` nesting beyond 2 levels — performance degrades significantly; restructure with `Select` + `Filter array`
- Use **solution-aware flows** from the start if you ever need to move between environments
- Flow history retention is 28 days by default — export to Log Analytics if you need audit trails

## Error Handling Pattern

```
Scope: Try
  [your actions here]
Scope: Catch (runs after = has failed)
  Send notification or log error
  Terminate (Failed)
```

## Common Gotchas

- `Parse JSON` schema must match exactly — generate it from a sample payload, not by hand
- Throttling on SharePoint connector is aggressive — add delays in high-volume loops
- HTTP connector requires Premium licence — check connector tier before designing a flow
