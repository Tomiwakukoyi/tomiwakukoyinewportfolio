// craco.config.js
// Create React App Configuration Override (CRACO)."
// CRACO allows you to customize the
// configuration of Create React App (CRA) without ejecting
// from it. It's especially useful when you want to modify
// various settings, such as webpack, Babel, PostCSS, etc.,
// while keeping the benefits of CRA's default configuration.
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
