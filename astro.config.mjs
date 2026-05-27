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
        { label: 'Awesome List', slug: 'index' },
        {
          label: 'Overviews',
          items: [
            { label: 'Power Platform', slug: 'overviews/power-platform' },
            { label: 'Power Apps', slug: 'overviews/power-apps' },
            { label: 'Power Automate', slug: 'overviews/power-automate' },
            { label: 'Copilot Studio', slug: 'overviews/copilot-studio' },
          ],
        },
        {
          label: 'Site',
          items: [
            { label: 'About', slug: 'about' },
            { label: 'How to Contribute', slug: 'contributing' },
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
        {
          tag: 'script',
          content: `if (!localStorage.getItem('starlight-theme')) { document.documentElement.setAttribute('data-theme', 'light'); localStorage.setItem('starlight-theme', 'light'); }`,
        },
      ],
    }),
  ],
});
