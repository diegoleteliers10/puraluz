/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
    extend: {
      boxShadow: {
        'service-shadow': '0px 11px 26px -2px rgba(15,43,48,0.79);',   
        'inset-card': 'inset 0px 0px 13px 2px rgba(0,0,0,0.75)',
        'hero-image': '25px -25px 15px 0px rgba(227,227,227,0.7)'   
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundPosition: {
        'top-30': 'center 40%', // Personaliza según tus necesidades
      },
    },
	},
  darkMode: "class",
	plugins: [addVariablesForColors,nextui()],
}

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
