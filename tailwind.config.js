/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        'first-page': '#FEFCF9',
        'loading-color': '#FF4F62',
        'hourColor': '#FDC5C547'
      },
      fontFamily: {
        IRANSansX: ['IRANSansX']
      },
      fontSize: {
        10:'10px',
        8:'8px'
      },
      boxShadow: {
        educationShadow: '3px 8px 22px -11px #3232327d',
        hourChecked: '0px 9px 17px 0px #F86F6F42'
      },
      spacing: {
        150: '600px',
        '320': '310px'
      },
    },
  },
  plugins: [],
}

