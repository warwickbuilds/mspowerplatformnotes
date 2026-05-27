---
title: How to Contribute
description: How to contribute notes, links, and corrections to MS Power Platform Notes.
---

Contributions are welcome and encouraged. The process is a standard GitHub fork-and-PR workflow.

## Prerequisites

- A GitHub account
- Basic familiarity with Markdown
- (Optional) Node.js and npm if you want to preview locally

## Steps

### 1. Fork the repository

Go to the [GitHub repository](https://github.com/YOUR_GITHUB_USERNAME/power-platform-notes) and click **Fork**.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_FORK/power-platform-notes.git
cd power-platform-notes
npm install
```

### 3. Create a branch

```bash
git checkout -b my-contribution
```

### 4. Make your changes

All content lives in `src/content/docs/`. Edit existing `.md` files or add new ones. Follow the existing structure and frontmatter format.

### 5. Preview locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to preview your changes.

### 6. Commit and push

```bash
git add .
git commit -m "Add note about X in Power Apps"
git push origin my-contribution
```

### 7. Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**. Describe what you changed and why.

## Guidelines

- Keep notes factual and practical — link to official docs where relevant
- Prefer short, scannable entries over long prose
- One topic per PR where possible — makes review easier
- No promotional or vendor-sponsored content

## Questions?

Open a [GitHub Discussion](https://github.com/YOUR_GITHUB_USERNAME/power-platform-notes/discussions) or raise an issue.
