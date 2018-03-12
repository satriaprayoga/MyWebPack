# MyWebPack

[![GitHub release](https://img.shields.io/github/release/GlBj/MyWebPack.svg)](https://github.com/GlBj/MyWebPack)
[![Build Status](https://travis-ci.org/GlBj/MyWebPack.svg?branch=master)](https://travis-ci.org/GlBj/MyWebPack)
[![Greenkeeper badge](https://badges.greenkeeper.io/GlBj/MyWebPack.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/GlBj/MyWebPack/status.svg)](https://david-dm.org/GlBj/MyWebPack)
[![devDependencies Status](https://david-dm.org/GlBj/MyWebPack/dev-status.svg)](https://david-dm.org/GlBj/MyWebPack?type=dev)

[![Webite shields.io](https://img.shields.io/website-up-down-brightgreen-red/http/shields.io.svg)](https://sajt.online/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/GlBj/MyWebPack/blob/master/LICENSE)

### Quick start a project with Webpack 4, Bootstrap 4, Font Awesome 5 and Animate.css

#### Installation

```
git clone git@github.com:GlBj/MyWebPack.git
cd MyWebPack && npm install
```

#### Build options

```
npm run dev     (Build the assets)
npm run build    (Build the assets and minify them)
npm run start   (start the development server on port 8080 and open chrome)
```

#### Font Awesome 5

Icons to be used has to be set in index.js. By default only a few examples is enabled.

###### src/index.js

```
...
import faCogs from '@fortawesome/fontawesome-free-solid/facogs'
import faEdit from '@fortawesome/fontawesome-free-regular/faedit'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

fontawesome.library.add(faCogs, faEdit, faFacebook)
...
```

And to show them just add them in the index.html

###### src/index.html

```
...
<i class="fas fa-cogs"></i>
<i class="far fa-edit"></i>
<i class="fab fa-facebook"></i>
...
```

### Screenshot from the demo site https://sajt.online

<p align="center">
  <img src="https://github.com/GlBj/MyWebPack/blob/master/src/images/screenshot.jpg?raw=true)" alt="ScreenShot image"/>
</p>
