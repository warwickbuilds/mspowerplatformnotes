---
title: ShareGate Migration
description: Practical guidance for planning and executing ShareGate migrations to Microsoft 365.
---

## When to Use ShareGate

ShareGate is commonly used to migrate SharePoint content between on-premises and Microsoft 365 tenants, or to restructure content across sites.

## Migration Checklist

- Confirm information architecture before migrating (sites, libraries, metadata)
- Clean up stale content and permissions first
- Map users and groups to current Entra ID identities
- Run pilot migrations on representative content sets
- Schedule cutover windows with clear content freeze periods

## Practitioner Notes

- Permissions are often the biggest risk area, validate inheritance and unique permissions post-migration
- Preserve and verify managed metadata term sets before moving heavily tagged content
- Use incremental runs to reduce downtime before final cutover
- Keep a rollback plan with clear owner sign-off criteria

## Validation

- Compare source and target item counts
- Spot-check version history and modified by fields
- Validate page layouts, web parts, and broken links
- Test key business workflows after content lands in target
