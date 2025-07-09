const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h5',
        'alert-link',
        'container-xxl',
        'container-fluid',
        'offcanvas-backdrop',
        'img-fluid',
        'lazyloaded',
        'lazyload',
        'blur-up',
        'figcaption',
        ...whitelister([
          // './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}