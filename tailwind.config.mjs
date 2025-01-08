/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '55': '0.55', 
        '60': '0.6', 
        '65': '0.65', 
        '70': '0.7', 
        '75': '0.75', 
        '80': '0.80', 
        '85': '0.85', 
      },
      colors: {
        background: "var(--background)", 
        black: "var(--black)", 
        white: "var(--white)", 
        foregroundBrown: "var(--brown-foreground)", 
        foregroundBrownHover: "var(--brown-foreground-hover)", 
        primary: "var(--primary)", 
        lightOrange: "var(--info-bar-background)", 
        lightYellow: "var(--navbar-background)", 
        lighterYellow: "var(--details-background)",
        yellow: "var(--special-icon)",
        
      },
      fontFamily: {
        display: ['"ADLaM Display"', 'sans-serif'],  
        body: ['"Arimo"', 'sans-serif'],  
      },
      fontSize: {
        h1: 'var(--font-size-h1)',
        h2: 'var(--font-size-h2)',
        h3: 'var(--font-size-h3)',
        p: 'var(--font-size-body)',
        btn: 'var(--font-size-btn)',
      },
    },
  },
  plugins: [],
};
