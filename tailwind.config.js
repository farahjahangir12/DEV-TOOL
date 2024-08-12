/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    
    extend: {
     colors:
     {
      black:'#141010',
      white:'#fcfefe',
      purple:"#680747",
      pink:"#c3195d",
     },
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

     lineheight:{
      md:'1.4'
     },

     fontsize:{
      md:'2.5rem',
      lg:'4rem'
     },

     fontweight:{
      sm:'200',
      md:'400',
      lg:'600',
      xl:'800'
     },

    
    },

    
  },
  plugins: [],
}

