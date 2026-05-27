import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MS Power Platform Notes',
      description: 'A community contribution site to gather real world usage notes of Microsoft Power Platform — Power Apps, Power Automate, Copilot Studio.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/warwickbuilds/mspowerplatformnotes' },
      ],
      editLink: {
        baseUrl: 'https://github.com/warwickbuilds/mspowerplatformnotes/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome', slug: 'index' },
            { label: 'About This Site', slug: 'about' },
            { label: 'How to Contribute', slug: 'contributing' },
          ],
        },
        {
          label: 'Awesome List',
          items: [
            { label: 'Power Platform Resources', slug: 'awesome/power-platform' },
            { label: 'Power Apps', slug: 'awesome/power-apps' },
            { label: 'Power Automate', slug: 'awesome/power-automate' },
            { label: 'Copilot Studio', slug: 'awesome/copilot-studio' },
          ],
        },
        {
          label: 'Overviews',
          items: [
            { label: 'Power Platform Overview', slug: 'overviews/power-platform' },
            { label: 'Power Apps Overview', slug: 'overviews/power-apps' },
            { label: 'Power Automate Overview', slug: 'overviews/power-automate' },
            { label: 'Copilot Studio Overview', slug: 'overviews/copilot-studio' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Power Platform, Power Apps, Power Automate, Copilot Studio, Microsoft, low-code, notes',
          },
        },
      ],
    }),
  ],
});
