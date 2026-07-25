export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    title: "Jude Anders",
  });

  eleventyConfig.addGlobalData("buildTime", () => Date.now());

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.ignores.add("apple.com/**");
  eleventyConfig.addPassthroughCopy("apple.com/**");
  eleventyConfig.ignores.add("gems/**");
  eleventyConfig.ignores.add("bin/**");
  eleventyConfig.ignores.add("cache/**");
  eleventyConfig.ignores.add("extensions/**");
  eleventyConfig.ignores.add("specifications/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
}
