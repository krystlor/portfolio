require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/x",
  plugins: ["gatsby-plugin-sass"],
};
