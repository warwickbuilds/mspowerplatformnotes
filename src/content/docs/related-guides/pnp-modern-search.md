---
title: PnP Modern Search
description: Practitioner notes for implementing and maintaining PnP Modern Search web parts.
---

## What It Is

PnP Modern Search is a set of SPFx web parts that provide flexible, configurable search experiences in SharePoint Online.

## Typical Components

- Search Box web part for query input
- Search Results web part with templating options
- Search Filters web part for faceted navigation
- Search Verticals for scoped result sets

## Practitioner Notes

- Start with a small set of result types and filters, then expand based on analytics
- Keep templates maintainable and document custom Handlebars logic
- Use managed properties consistently across filters and result cards
- Validate multilingual behavior and fallback content early

## Operational Guidance

- Track web part versions and test upgrades in non-production first
- Document page-level dependencies between connected web parts
- Monitor performance when adding many filters or complex templates
