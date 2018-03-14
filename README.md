<h1 align="center"> MyWebPack </h1>
<h3 align="center"> Quick start a project with Webpack 4, Bootstrap 4, Font Awesome 5 and Animate.css </h3>
<p align="center">

[![GitHub release](https://img.shields.io/github/release/GlBj/MyWebPack.svg)](https://github.com/GlBj/MyWebPack)
[![GitHub last commit](https://img.shields.io/github/last-commit/GlBj/MyWebPack.svg)](https://github.com/GlBj/MyWebPack/commits/master)
[![Build Status](https://travis-ci.org/GlBj/MyWebPack.svg?branch=master)](https://travis-ci.org/GlBj/MyWebPack)
[![Build Status](https://scrutinizer-ci.com/g/GlBj/MyWebPack/badges/build.png?b=master)](https://scrutinizer-ci.com/g/GlBj/MyWebPack/build-status/master)
[![dependencies Status](https://david-dm.org/GlBj/MyWebPack/status.svg)](https://david-dm.org/GlBj/MyWebPack)
[![devDependencies Status](https://david-dm.org/GlBj/MyWebPack/dev-status.svg)](https://david-dm.org/GlBj/MyWebPack?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/GlBj/MyWebPack.svg)](https://greenkeeper.io/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/GlBj/MyWebPack/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/GlBj/MyWebPack/?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ecdc0916f3024e9c94064f08661549d2)](https://www.codacy.com/app/GlBj/MyWebPack?utm_source=github.com&utm_medium=referral&utm_content=GlBj/MyWebPack&utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/1f0a70b84567c6694d4b/maintainability)](https://codeclimate.com/github/GlBj/MyWebPack/maintainability)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

#### Installation

```
git clone https://github.com/GlBj/MyWebPack.git cd MyWebPack && npm install
Or... if U use ssh
git clone git@github.com:GlBj/MyWebPack.git cd MyWebPack && npm install
```

#### Build options

```
npm run build:dev
npm run build:prod (Build and minify)
```

#### Start the server

```
npm run start:dev
npm run start:prod (minify)
```

#### Font Awesome 5

Icons to be used has to be set in fontawesome.js. By default only a few examples is enabled.

###### src/js/fontawesome.js

```
...
import faCogs from '@fortawesome/fontawesome-free-solid/facogs'
import faEdit from '@fortawesome/fontawesome-free-regular/faedit'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

fontawesome.library.add(faCogs, faEdit, faFacebook)
...
```

And to show them just add this in your html

###### src/index.html

```
...
<i class="fas fa-cogs"></i>
<i class="far fa-edit"></i>
<i class="fab fa-facebook"></i>
...
```
