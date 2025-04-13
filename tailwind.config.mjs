/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-8px)' },
          '80%': { transform: 'translateX(8px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease',
      },
      screens: {
        'xs': '370px', 
      },
      boxShadow: {
        'custom': '4px 4px 4px rgba(0, 0, 0, 0.25)', 
        'custom-deep': '8px 8px 8px rgba(0, 0, 0, 0.25)', 
      },
      dropShadow: {
        'custom': '4px 4px 4px rgba(0, 0, 0, 0.25)', 
        'custom-deep': '8px 8px 8px rgba(0, 0, 0, 0.25)', 
      },
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
        background: '#FFFFFF',
        black: {
          DEFAULT: '#1E1C1C',
          transparent70: "rgba(0, 0, 0, 0.7)",
          transparent30: "rgba(0, 0, 0, 0.3)",
        },
        white:{
          DEFAULT: '#FFFFFF',
          transparent70: "rgba(255, 255, 255, 0.7)",
          transparent30: "rgba(255, 255, 255, 0.3)",
        },
      
        'outrageous-orange': {
          '50': '#fff3ed',
          '100': '#ffe4d4',
          '200': '#ffc4a8',
          '300': '#ff9b71',
          '400': '#ff6030',
          '500': '#fe3e11',
          '600': '#ef2407',
          '700': '#c61608',
          '800': '#9d140f',
          '900': '#7e1410',
          '950': '#440607',
        },
        brown: {
          DEFAULT: '#411A06',
          hover: '#6E2907',
        },
      
        orange: {
          lighter: 'rgba(255,88,0,0.40)',
          bubble: "#FFF3E0",
        },
      
        cream: {
          DEFAULT: 'rgba(255,222,165,1)',
          lighter: 'rgba(255,212,144,0.28)',
        },
        yellow: {
          DEFAULT: '#F8B800',
        },



        gray: {
          light: '#F4F4F4', // Fono pilka spalva (pvz., kortelės ar sekcijų fonai)
          medium: '#D1D1D1', // Rėmeliams arba tekstams mažesnio kontrasto elementuose
          dark: '#8A8A8A', // Tamsi pilka, tinkama ikonoms arba tekstams
        },
      
        green: {
          light: '#E8F5E9', // Šviesiai žalia, gali tikti kaip akcentų fono spalva
          DEFAULT: '#66BB6A', // Akcentinė spalva užsakymo sėkmei ar pranešimams
          dark: '#388E3C', // Tamsiai žalia, tinkama mygtukams ar aktyviems elementams
        },
      
        red: {
          DEFAULT: '#E53935', // Pavojaus ar klaidos spalva
          light: '#FFEBEE', // Šviesiai raudona (pvz., įspėjimo fonas)
        },
      
        blue: {
          DEFAULT: '#1E88E5', // Akcentams arba nuorodoms
          light: '#BBDEFB', // Fonams, kurie išryškina informacinius blokus
          dark: '#1565C0', // Tamsiai mėlyna – patikimumo arba svarbių nuorodų akcentas
        },
      },
      fontFamily: {
        display: ['"Signika Negative"', 'sans-serif'],  
        body: ['"Arimo"', 'sans-serif'],  
      },
      fontSize: {
        h1: 'var(--font-size-h1)',
        h2: 'var(--font-size-h2)',
        h3: 'var(--font-size-h3)',
        h4: 'var(--font-size-h4)',
        p: 'var(--font-size-body)',
        btn: 'var(--font-size-btn)',
      },
    },
  },
  plugins: [],
};
