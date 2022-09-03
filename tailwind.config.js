/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      darkMode: 'class',
      theme: {
        extend:{
            spacing: {
                13: '3.25rem',
            },
            fontFamily: {
                inter: ['Inter']
            },
            colors: {
                wpu: "#bada55",
                kopi: "#c0ffee"
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'goyang': 'goyang 1s ease-in-out infinite'
            },
            Keyframes: {
                goyang: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    }, 
                    '50%':{
                        transform: 'rotate(3deg)'
                    }
                }
            }
        }
      }
    },
  },
  plugins: [],
}
