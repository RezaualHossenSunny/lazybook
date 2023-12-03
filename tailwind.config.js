export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']

      },
      colors: {
        'primary':'#32375C',
        'orange':'#FF5733 ',
         'overlay':'rgba(0, 0, 0, 0.41)',

      },
      container: {
       'container':'1356px'
      },
    },
  },
  plugins: [],
}

