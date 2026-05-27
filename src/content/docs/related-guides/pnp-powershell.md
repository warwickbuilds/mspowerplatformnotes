---
title: PnP PowerShell
description: Real-world guidance for administering Microsoft 365 and SharePoint with PnP PowerShell.
---

## Overview

PnP PowerShell is a community-driven module for automating SharePoint Online and Microsoft 365 tasks.

## Common Use Cases

- Provisioning sites, lists, libraries, and fields
- Applying templates and site configuration at scale
- Reporting permissions and content inventory
- Automating governance and operational checks

## Practitioner Notes

- Use app-only auth for unattended jobs where possible
- Store secrets in Key Vault or secure CI/CD variable stores
- Build idempotent scripts that can rerun safely
- Add transcript logging and structured error handling for production runs

## Reliability Tips

- Implement retry logic for throttling and transient API errors
- Batch high-volume operations to reduce execution time
- Test scripts against realistic tenant data before rollout
