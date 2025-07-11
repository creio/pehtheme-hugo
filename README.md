# Pehtheme Hugo

Pehtheme Hugo is an open-source Hugo theme inspired by [Material Design v3](https://m3.material.io/), lovingly crafted using Tailwind CSS.

![Preview Pehtheme Hugo](https://raw.githubusercontent.com/fauzanmy/pehtheme-hugo/main/images/tn.png?raw=true)

## Live Demo

Check out the live demo: [Pehtheme Hugo Live Demo](https://pehtheme-hugo.netlify.app/)

## Performance Testing

To assess the performance of your website using Pehtheme Hugo, utilize the PageSpeed Insights tool. Click the button below to run a PageSpeed Insights test:

[PageSpeed Insights Test](https://pagespeed.web.dev/analysis/https-pehtheme-hugo-netlify-app/7gv9zedw83?form_factor=mobile)

## Features

- Built with Tailwind CSS
- Featured posts displayed on the homepage (To showcase featured posts on the homepage, the Hugo theme uses `feature` tags data)
- Horizontal menus, content tags list
- No JavaScript dependencies
- Vanilla JS toggle button
- Two-column blog layout
- Sidebar with a list of recent posts
- Semantic HTML
- Sidebar Ads box

## Installation

To get started with [Pehtheme Hugo](https://github.com/fauzanmy/pehtheme-hugo), follow these steps:

Install Hugo and create a new site. For detailed instructions, refer to [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/).

## Configuration

```bash
config/
```

## Custom Theme

### Ensure you have NodeJS installed on your desktop v20.19.3.

```bash
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

### Run the following command to install necessary dependencies:

```bash
# instal deps
npm install
```

### Customize the theme with Tailwind CSS using the following command:

```bash
npm run dev:generate
```

### To build the website, execute the command:

```bash
npm run build:generate
```

## Start Hugo

```bash
# server
npm run dev
# build
npm run build
```
