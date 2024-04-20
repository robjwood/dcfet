const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // Copy allow the following directories to be copied to the output folder 
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");

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