/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8f5f5",
          "200": "#f6f6f6",
        },
        gray1: "#7e7e7e",
        black1: "#000",
        gold: "#ffd61a",
        darkgray: {
          "100": "#b3b2ae",
          "200": "#a5a297",
        },
        darkslategray: {
          "100": "#333",
          "200": "#33322e",
        },
        white: "#fff",
        dimgray: "#666046",
        darkkhaki: "#998b4e",
        goldenrod: "#ccb13c",
        black: "#131315",
        palegoldenrod: "#fff2b8",
        khaki: "#ffed9f",
        slategray: "rgba(104, 124, 148, 0.05)",
        "gray-100": "#ececec",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "17xl": "36px",
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
