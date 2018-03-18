<h1 align="center"> MyWebPack </h1>
<h3 align="center"> <b>Quick start</b> a project with Webpack 4, Bootstrap 4, Font Awesome 5 and Animate.css </h>
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

</p>

<p align="center">
  <img src="https://github.com/GlBj/MyWebPack/blob/master/src/images/screenshot.jpg?raw=true)" alt="ScreenShot image"/>
</p>

# Why?

The goal for this reporisity is to have a good and quick starting platform to develop websites with the latest versions of webpack 4, bootstrap 4 and font awesome 5. With not too complicated configurations.

# Installation

### Before You Begin!

Make sure you have installed all of the following prerequisites on your development machine:

* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Install

The installation takes around 5 min. It all depends on the hardware and internet
speed you are have.

```
git clone git@github.com:GlBj/MyWebPack.git && cd MyWebPack && npm install
```

# Usage

## Build options

```
npm run build:dev
npm run build:prod (Build and minify)
```

## Start the development server

Starts the server and open http://localhost:3000 in your default web browser.

```
npm run server
```

# Configuration

## Font Awesome 5

Icons you like to use has to be set in fontawesome.js. By default only a few examples is enabled.

#### src/js/fontawesome.js

```
const fontawesome = require("@fortawesome/fontawesome");
const faGithub = require("@fortawesome/fontawesome-free-brands/faGithub");
const faCogs = require("@fortawesome/fontawesome-free-solid/facogs");
const faEdit = require("@fortawesome/fontawesome-free-regular/faedit");
const faFacebook = require("@fortawesome/fontawesome-free-brands/faFacebook");

fontawesome.library.add(faGithub, faCogs, faEdit, faFacebook);
```

And to show them just add this in your html

#### src/index.html

```
<i class="fas faGithub"></i>
<i class="fas fa-cogs"></i>
<i class="far fa-edit"></i>
<i class="fab fa-facebook"></i>
...
```

## Bootstrap 4

Description is coming soon..

 Animate

Description is coming soon..

# Demo website

You can find a live website here ( [sajt.online](https://sajt.online/) ) where this repositorie are used.

# To-do list

I will add more features and updates when I have time. Contributors are more
then welcome.

- [ ] Add purgecss to minimize the outputted css file.
- [ ] Add some more useful demo content in index.html and index.js.
- [ ] Split the configuration for development and production using webpack-merge.
- [ ] Update this README.md. Maybe move some to doc files.
- [x]  ~~Add ESLint for better debugging.~~
- [x] ~~Update the website.~~ Last updated 18 March 2018 (v.1.5.0)
- [ ] And a lot more…

[@GlBj](https://github.com/GlBj)
