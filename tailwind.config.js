module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#38BDF8',
        },
        yellow: {
          light: '#FAB560',
        },
      },
      extend: {
        colors: {
          'regal-blue': '#243c5a',
          'my-orange': '#FAB560'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
