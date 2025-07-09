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

To get started with Pehtheme Hugo, follow these steps:

1. Install Hugo and create a new site. For detailed instructions, refer to [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/).

2. Add Pehtheme Hugo to your project:

    ```bash
    $ git clone https://github.com/fauzanmy/pehtheme-hugo.git
    ```

3. Simply copy the following 2 folders and 1 content from the `exampleSite` directory to the root of your project:

    ```bash
    exampleSite/
    ├── assets/
    ├── content/
    └── hugo.toml
    ``` 

4. Start Hugo:

    ```bash
    hugo server
    ```

```bash
# instal deps
npm install
# server
npm run dev
# build
npm run build
```

## Configuration

```bash
config/
```

You can configure the following settings for your Hugo project
 by adding or modifying these lines in your config file `hugo.toml`:

summaryLength = 20 # (approximately 160 characters for 20 words)

[services]
  [services.googleAnalytics]
    id = 'G-MEASUREMENT_ID' # (Your GA-4 analytics code)

  [services.disqus]
    shortname = 'shortname' # (Your Disqus shortname)

[pagination]
  pagerSize = 10 # (Set the desired number of home posts per page)

## Custom Theme

### Ensure you have NodeJS installed on your desktop.

    ```bash
        ├── package.json
        ├── postcss.config.js
        └── tailwind.config.js
    ``` 

### Run the following command to install necessary dependencies:

    ```bash
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
