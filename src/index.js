const patterns = require("./patterns");
const plugin = require("tailwindcss/plugin");

const flattenColorPaletteModule = require("tailwindcss/lib/util/flattenColorPalette");
const flattenColorPalette =
  (flattenColorPaletteModule && flattenColorPaletteModule.default) ||
  flattenColorPaletteModule;

const patternsPlugin = plugin(({ matchUtilities, addUtilities, theme }) => {
  const basePatternUtilities = Object.fromEntries(
    patterns.map((pattern) => [
      `.pattern-${pattern.name}`,
      { backgroundImage: pattern.svg },
    ])
  );

  addUtilities(basePatternUtilities);

  const colors = flattenColorPalette(theme("colors") ?? {});

  patterns.forEach((pattern) => {
    matchUtilities(
      {
        [`pattern-${pattern.name}`]: (value) => ({
          backgroundImage: pattern.svg.replace(/currentColor/g, value),
          backgroundPosition: "center",
        }),
      },
      {
        values: colors,
        type: "color",
      }
    );

    matchUtilities(
      {
        [`pattern-${pattern.name}-scale`]: (value) => {
          const numericValue = Number(value);
          const resolvedValue = Number.isFinite(numericValue)
            ? numericValue
            : 1;

          return {
            backgroundSize: `${resolvedValue * pattern.size.width}px ${
              resolvedValue * pattern.size.height
            }px`,
          };
        },
      },
      {
        values: theme("scale") ?? {},
        type: "number",
      }
    );
  });
});

module.exports = patternsPlugin;
