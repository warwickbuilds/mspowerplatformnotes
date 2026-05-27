---
title: Copilot Studio Overview
description: A practitioner's overview of Microsoft Copilot Studio.
---

## What is Copilot Studio?

Copilot Studio (formerly Power Virtual Agents) is Microsoft's low-code tool for building custom AI-powered chatbots and copilots. As of 2024 it has been rebuilt around generative AI with deep integration into the Microsoft 365 Copilot ecosystem.

## Key Concepts

| Concept | Description |
|---|---|
| **Topic** | A conversation branch triggered by an intent |
| **Generative answers** | AI-generated responses grounded on your data sources |
| **Actions** | Call Power Automate flows, connectors, or HTTP endpoints |
| **Knowledge** | Documents, URLs, or Dataverse data the copilot can reason over |
| **Channel** | Where the copilot is published (Teams, web, custom) |

## Practitioner Notes

- **Generative answers** are powerful but need guardrails — always set a confidence threshold and a fallback topic
- Classic topics (trigger phrase-based) still have their place for compliance-sensitive or structured processes
- Publishing to **Teams** is the easiest channel — no web embedding complexity
- Use **entity extraction** in topics rather than free-text confirmation — more reliable
- Test coverage: the built-in test chat is good for smoke testing; use the **Analytics** tab in production to find abandonment points

## Common Gotchas

- Copilot Studio licencing is per-message in production — estimate volume carefully before go-live
- Authentication configuration for end-user identity (SSO) requires Azure AD app registration — not a 5-minute task
- Conversation language is set at creation and cannot be changed — plan for multi-language upfront if needed
