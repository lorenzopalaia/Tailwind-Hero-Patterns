const patternsFile = require("./patterns");
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const generatePatternUtilities = ({ matchUtilities, addUtilities, theme }) => {
  const patterns = patternsFile;

  const basePatternUtilities = {};
  patterns.forEach((pattern) => {
    basePatternUtilities[`.pattern-${pattern.name}`] = {
      backgroundImage: pattern.svg,
    };
  });
  addUtilities(basePatternUtilities);

  patterns.map((pattern) => {
    matchUtilities(
      {
        [`pattern-${pattern.name}`]: (value) => ({
          backgroundImage: pattern.svg.replace(/currentColor/g, value),
          backgroundPosition: "center",
        }),
      },
      {
        values: flattenColorPalette(theme("colors")),
        type: "color",
      }
    );
  });

  patterns.map((pattern) => {
    matchUtilities(
      {
        [`pattern-${pattern.name}-scale`]: (value) => ({
          backgroundSize: `${value * pattern.size.width}px ${value * pattern.size.height}px`,
        }),
      },
      {
        values: theme("scale"),
        type: "number",
      }
    );
  });
};

const patternsPlugin = plugin(generatePatternUtilities);

module.exports = patternsPlugin;