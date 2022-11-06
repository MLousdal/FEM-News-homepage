/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
    },
    extend: {
      // here's how to extend fonts if needed
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],
}
