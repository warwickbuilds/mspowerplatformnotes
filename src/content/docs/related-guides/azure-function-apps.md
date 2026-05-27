---
title: Azure Function Apps
description: Guidance for using Azure Function Apps with Power Platform solutions.
---

## Why Use Function Apps

Azure Function Apps are useful when Power Platform needs custom server-side logic, integrations, or compute beyond native connector capabilities.

## Common Patterns

- HTTP-triggered endpoints called from Power Automate
- Queue or event-driven processing for asynchronous workloads
- Scheduled jobs for background maintenance tasks
- Integration adapters for legacy or line-of-business systems

## Practitioner Notes

- Keep functions small, single-purpose, and observable
- Use managed identity for service-to-service auth where possible
- Separate configuration by environment using app settings and Key Vault references
- Add correlation IDs so flow runs can be traced end to end

## Operational Concerns

- Plan for cold starts on consumption plans
- Set clear timeout and retry policies across Function and Flow boundaries
- Monitor with Application Insights and alert on failure rates
