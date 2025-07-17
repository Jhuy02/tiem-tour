import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      lg: {
        min: '1024px',
      },
      xlg: {
        max: '1024px',
      },
      xsm: {
        max: '639px',
      },
      tablet: {
        min: '640px',
        max: '1024px',
      },
    },
    extend: {
      fontFamily: {
        dvnLuckiestGuy: ['var(--font-dvn-luckiest-guy)'],
        nvnMotherland: ['var(--font-nvn-motherland)'],
        tripSans: ['var(--font-trip-sans)'],
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.absolute-center': {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2':
            {},
        },
        '.absolute-x-center': {
          '@apply absolute left-1/2 -translate-x-1/2': {},
        },
        '.absolute-y-center': {
          '@apply absolute top-1/2 -translate-y-1/2': {},
        },
        '.text-edit-pc14': {
          '@apply font-trip-sans text-[0.875rem] tracking-[0.00219rem] font-normal leading-[1.5] text-[#303030]': {},
        },
        '.text-edit-pc16b': {
          '@apply font-trip-sans text-[1rem] tracking-[0.0025rem] font-extrabold leading-[1.3] text-[#303030]': {},
        },
      })
    }),
  ],
}
export default config
