module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {},
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6366F1",
          secondary: "#1E293B",
          accent: "#32c930",
          neutral: "#FFFFFF",
          "base-100": "#F1F5F9",
          "base-200": "#1E293B",
          "text-base-100": "#1E293B",
          "text-base-200": "#F1F5F9",
          info: "#C7D2FE",
          success: "#82E3C9",
          warning: "#9D6106",
          error: "#F76475",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
