const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // Copy the 'img/' directories 
  eleventyConfig.addPassthroughCopy("src/img");

  // Filters
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });
  eleventyConfig.addFilter("postDatePretty", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk"
  };
};