import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        activity: {
          none: "#fff7ed",
          little: "#fed7aa",
          moderate: "#fb923c",
          more: "#f97316",
          high: "#ea580c",
          "very-high": "#9a3412",
        },

        primary: "hsl(var(--color-primary))",
        "primary-dark": "hsl(var(--color-primary-dark))",
        "primary-light": "hsl(var(--color-primary-light))",

        accent: "hsl(var(--color-accent))",
        "accent-dark": "hsl(var(--color-accent-dark))",

        background: "hsl(var(--color-background))",
        border: "hsl(var(--color-border))",
        "button-text-primary": "hsl(var(--color-button-text-primary))",

        foreground: "hsl(var(--color-foreground))",
        "foreground-light": "hsl(var(--color-foreground-light))",
        "foreground-extra-light": "hsl(var(--color-foreground-extra-light))",

        "neutral-green": "hsl(var(--color-neutral-green))",
        "neutral-green-light": "hsl(var(--color-neutral-green-light))",
        "neutral-green-dark": "hsl(var(--color-neutral-green-dark))",

        "neutral-red": "hsl(var(--color-neutral-red))",
        "neutral-red-light": "hsl(var(--color-neutral-red-light))",
        "neutral-red-dark": "hsl(var(--color-neutral-red-dark))",

        "neutral-gray": "hsl(var(--color-neutral-gray))",
        "neutral-gray-light": "hsl(var(--color-neutral-gray-light))",
        "neutral-gray-dark": "hsl(var(--color-neutral-gray-dark))",
      },
      maxWidth: {
        website: "1360px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
      addVariant("child-focus", "& > *:focus")
      addVariant("child-active", "& > *:active")
      addVariant("child-disabled", "& > *:disabled")
    }),
  ],
}
export default config
