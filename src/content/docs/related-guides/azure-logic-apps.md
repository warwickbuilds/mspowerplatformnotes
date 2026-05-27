---
title: Azure Logic Apps
description: Practical notes for designing resilient Azure Logic Apps alongside Power Automate.
---

## Where Logic Apps Fit

Azure Logic Apps are often chosen for enterprise integration workloads requiring advanced control over networking, deployment, and throughput.

## Design Considerations

- Choose Consumption vs Standard based on scaling and runtime needs
- Define clear trigger contracts and payload schemas
- Use integration accounts where B2B or EDI capabilities are required
- Externalize environment-specific settings via parameters

## Practitioner Notes

- Keep workflows modular and avoid oversized single pipelines
- Implement robust retry, dead-letter, and exception branches
- Use tracked properties and diagnostics for observability
- Align naming and ownership conventions across integration teams

## Logic Apps and Power Automate

- Use Power Automate for business-user-centric automation
- Use Logic Apps for platform-grade integrations and heavy integration workloads
- Combine both when citizen development and central integration teams share responsibilities
