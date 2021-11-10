module.exports = function (eleventyConfig) {

  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addWatchTarget("./src/_includes/");

  // set input and output folder
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    },
  };
}
