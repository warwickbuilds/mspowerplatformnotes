---
title: Power Platform Overview
description: A practitioner's overview of the Microsoft Power Platform.
---

## What is Power Platform?

Microsoft Power Platform is a suite of low-code/no-code tools for building applications, automating processes, and analysing data. It sits on top of the Microsoft 365 and Azure ecosystems.

## Core Products

| Product | Purpose |
|---|---|
| **Power Apps** | Build custom apps (canvas and model-driven) |
| **Power Automate** | Automate workflows and processes |
| **Power BI** | Data visualisation and reporting |
| **Power Pages** | Build external-facing websites |
| **Copilot Studio** | Build custom AI copilots / chatbots |

> This site focuses primarily on Power Apps, Power Automate, and Copilot Studio.

## Key Concepts

### Dataverse
The underlying data platform. Structured, relational storage that integrates natively with all Power Platform products. Preferred over SharePoint lists for anything beyond simple scenarios.

### Connectors
Pre-built integrations to hundreds of external services (Microsoft 365, Salesforce, ServiceNow, etc.). Available in Standard and Premium tiers.

### Environments
Isolated containers for apps, flows, and data. Use separate environments for Development, Test, and Production.

### Licensing
Licensing is complex and changes frequently. Always verify against the [official licensing guide](https://aka.ms/powerplatformlicensing). Key distinction: Standard connectors are included in M365 plans; Premium connectors and Dataverse require standalone Power Apps/Automate licences.

## Practitioner Notes

- The Admin Centre is your control panel — [admin.powerplatform.microsoft.com](https://admin.powerplatform.microsoft.com)
- Enable the **Centre of Excellence (CoE) Starter Kit** early in any enterprise rollout
- Governance and DLP (Data Loss Prevention) policies should be set before broad adoption
