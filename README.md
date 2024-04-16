<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lorenzopalaia/tailwind-hero-patterns">
    <img src="repo_assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Tailwind Hero Patterns</h3>

  <p align="center">
    All heropatterns.com patterns as TailwindCSS classes
    <br />
    <a href="https://github.com/lorenzopalaia/tailwind-hero-patterns"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lorenzopalaia/tailwind-hero-patterns">View Demo</a>
    ·
    <a href="https://github.com/lorenzopalaia/tailwind-hero-patterns/issues">Report Bug</a>
    ·
    <a href="https://github.com/lorenzopalaia/tailwind-hero-patterns/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#pattern">Pattern</a></li>
        <li><a href="#scale">Scale</a></li>
        <li><a href="#full-example">Full Example</a></li>
      </ul>  
    </li>
    <li><a href="#patterns">Patterns</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Preview][product-preview]](https://example.com)

All heropatterns.com patterns as TailwindCSS classes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Node][Node.js]][Node-url]
<br />
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Install NPM package:

   ```sh
   npm install tailwind-hero-patterns
   ```

2. Add the plugin to your `tailwind.config.js` file:

   ```js
   plugins: [
    require('tailwind-hero-patterns'),
    ...
   ]
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Pattern

Follow the schema `pattern-{name}-{color}/{opacity}`, where:

* `name` is the pattern name
* `color` refers to any possible color of Tailwind's palette
* `opacity` controls pattern's opacity from 0 to 100%

For example:

```html
   <div class="pattern-jigsaw-red-500/50">
    ...
   </div>
   ```

### Scale

To scale the pattern follow the schema `pattern-{name}-scale-{percent}`, where:

* `percent` follows the same rules as Tailwind's scaling options

For example:

```html
   <div class="pattern-jigsaw-scale-50">
    ...
   </div>
   ```

If you prefer to use a custom scaling multiplier then follow the schema `pattern-{name}-scale-[multiplier]`.

For example:

```html
   <div class="pattern-jigsaw-scale-[1.5]">
    ...
   </div>
   ```

### Full Example

The following example will generate a red jigsaw pattern with 50% opacity and scaled by 1.5 multiplier on a blue background:

```html
   <div class="bg-blue-400 pattern-jigsaw-red-500/50 pattern-jigsaw-scale-[1.5]">
    ...
   </div>
   ```


_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Patterns

Here's the full list of available patterns. Check [Hero Patterns](https://heropatterns.com) to choose your favourite pattern.

`jigsaw`, `ripples`, `topography`, `texture`, `hub`, `architect`, `voxel`, `crosses`, `graph`, `squares`, `falling-triangles`, `pies`, `hexagons`, `zig-zag-2`, `autumn`, `temple`, `death-star`, `overlapping-hexagons`, `stars`, `bamboo`, `floor`, `cork-screw`, `kiwi`, `lips`, `checkered`, `x-equals`, `bevel-circle`, `brick-wall`, `fancy-rectangles`, `heavy-rain`, `overlapping-circles`, `plus`, `plus-connected`, `volcano-lamp`, `wiggle`, `bubbles`, `cage`, `connections`, `current`, `diagonal-stripes`, `flipped-diamonds`, `houndstooth`, `leaf`, `lines-in-motion`, `moroccan`, `morphing-diamonds`, `rails`, `rain`, `squares-in-squares`, `stripes`, `tic-tac-toe`, `zig-zag`, `aztec`, `bank-note`, `boxes`, `circles-and-squares`, `circuit-board`, `curtain`, `clouds`, `eyes`, `tiles`, `groovy`, `intersecting-circles`, `melt`, `overlapping-diamonds`, `wood`, `pixel`, `polka`, `signal`, `slanted`, `lines-diagonal-right`, `lines-diagonal-left`, `lines-horizontal`, `lines-vertical`, `sprinkles`, `waves`, `hive`, `squiggles`, `triangles`, `grid`, `zebra`, `overcast`, `piano-man`, `dominoes`, `stamp-collection`, `church-on-sunday`, `i-like-food`, `lisbon`, `random-shapes`, `steel-beams`, `anchors-away`, `floating-cogs`, `glamorous`, `skulls`, `wallpaper`, `yyy`, `happy-intersection`

<!-- ROADMAP -->

## Roadmap

- [ ] Replace current scaling class with `pattern-scale-{percent}` / `pattern-scale-[multiplier]`

See the [open issues](https://github.com/lorenzopalaia/tailwind-hero-patterns/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Lorenzo Palaia - lorenzopalaia53@gmail.com

Project Link: [https://github.com/lorenzopalaia/tailwind-hero-patterns](https://github.com/lorenzopalaia/tailwind-hero-patterns)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/lorenzopalaia/tailwind-hero-patterns.svg?style=for-the-badge
[contributors-url]: https://github.com/lorenzopalaia/tailwind-hero-patterns/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lorenzopalaia/tailwind-hero-patterns.svg?style=for-the-badge
[forks-url]: https://github.com/lorenzopalaia/tailwind-hero-patterns/network/members
[stars-shield]: https://img.shields.io/github/stars/lorenzopalaia/tailwind-hero-patterns.svg?style=for-the-badge
[stars-url]: https://github.com/lorenzopalaia/tailwind-hero-patterns/stargazers
[issues-shield]: https://img.shields.io/github/issues/lorenzopalaia/tailwind-hero-patterns.svg?style=for-the-badge
[issues-url]: https://github.com/lorenzopalaia/tailwind-hero-patterns/issues
[license-shield]: https://img.shields.io/github/license/lorenzopalaia/tailwind-hero-patterns.svg?style=for-the-badge
[license-url]: https://github.com/lorenzopalaia/tailwind-hero-patterns/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lorenzopalaia
[product-preview]: repo_assets/preview.png
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/