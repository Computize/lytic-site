import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green': "#9bbc5a",
        'primary-blue': '#91caee',
        'secondary-green': "#758d33",
        'background-green': "#ccdcaa",
        'background-dark-gray': '#232323',
        'primary-gray': 'rgb(255,255,255,.3)',
        'background-light-gray': '#F3F3F3',
      },
    },
    animation: {
      'slide-right': 'slide-right 1s forwards'
    },
    keyframes: {
      'slide-right': {
        '100%': {
          transform: 'translateX(50.66%)',
        },
      },
    }
  },
  plugins: [],
};
export default config;
