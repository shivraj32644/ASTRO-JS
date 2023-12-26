/** @type {import('tailwindcss').Config} */
const brandLight = '#EADDC7';
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#C29340",
        brandLight:"#EADDC7",
        brandDark: "#AF9362",
        lighter: "#FFFDFA",
        light: "#F1ECE5",
        subTextColor: "#8e8e8e",
        primaryColor: "#222222",
        secondaryColor: "#555555",
        thirdColor: "#757575",
        fourthColor: "#393939",
        darkGray: "#333",
        lightGray: "#555",
        lighterGray: "#777",
        disabled: "#D2D2D2",
        disabledInput: "#F5F5F5",
        disabledText: "#9F9F9F",
        inputBorder: "#FFD488",
        brandError: "#F56B63",
        profileDropdownBg: "#EFEFEF",
        navColor: "#2F2F2F",
        navLinkMobile: "#515151",
        successcolor: "#209E52",
        errorcolor: "#EA4646",
        dropdownText: "#272727",
        chartFirst: "#c5a265",
        chartSecond: "#EADF83",
        chartThird: "#706698",
        lighterBorder: "#EDD5AB",
        disabledLightBorder: "#DADADA",
        lightBorder: "#E2D2B4",
        dashBorder: "#9A9A9A",
        btnDisableBg: "#f2f2f2",
        btnDisableBorder: "#f3f3f3",
        progressColor: "#5c537c",
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        't-lg':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        't-xl':
          '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        enter: 'enter 200ms ease-out',
        leave: 'leave 200ms ease-in',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      borderColor: {
        DEFAULT: brandLight,
      },
      backgroundImage: {
        'split-white-light-left':
          'linear-gradient(to left, #F1ECE5 70% , white 30%);',
        'split-white-light-bottom':
          'linear-gradient(to bottom, #F1ECE5 70% , white 30%);',
        'split-white-light-left-60':
          'linear-gradient(to left, white 60% , #F1ECE5 40%)',
        'split-white-light-left-40':
          'linear-gradient(to left, white 40% , #F1ECE5 40%)',
      },
    },
  },
  
};
