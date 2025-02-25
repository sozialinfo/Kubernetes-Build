import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kubernetes Build",
  description: "The Mint System collection of Helm Charts.",
  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
