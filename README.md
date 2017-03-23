# grunt-toolbox
A set of tools to handle everyday tasks for any front-end developer

# Pre Install
1. Make sure you have Node installed.
2. Make sure you have Grunt CLI installed globally.

# Install
Step 1: Clone the project.
```shell
git clone https://github.com/Taube/grunt-toolbox.git

```
Step 2: Install the project
```shell
cd grunt-toolbox
npm install
```
# IMPORTANT
To get Sharp working on Windows, please scroll to the bottom.
To get Webfont working, please follow the instructions in their Readme.md
https://github.com/sapegin/grunt-webfont

# Usage

Create 1x and 2x versions of your 3x retina images (incl. webp)
```shell
grunt retina
```
Create "smartcropped" versions of your Hero image (incl. webp)
```shell
grunt hero
```
Create fullscreen backdrops with overlay filter for desktop(landscape) and mobile(portrait) of a large image (incl. webp)
```shell
grunt backdrop
```
Generate an optimized SVG-spritesheet and Less/Sass-file from your random SVG-files to include in your app.
```shell
grunt svg
```
Generate all compatible webfonts and Less/Sass-file from your random SVG-files to include in your app.
```shell
grunt font
```
Minify your images
```shell
grunt imagemin
```
Start an express server with an index-file to test your files in a browser
```shell
grunt server
```
Generate an optimized version of modernizr suitable for your needs only
```shell
grunt modernizr
```

## Included projects:
https://github.com/lovell/sharp
https://github.com/jwagner/smartcrop.js
https://github.com/jkphl/grunt-svg-sprite
https://github.com/sapegin/grunt-webfont
https://github.com/gruntjs/grunt-contrib-imagemin
https://github.com/Modernizr/grunt-modernizr


## Set up Windows 10 to work with Sharp

### 1. Install Windows Build Tools
If you're using Windows you can now install all node-gyp dependencies with single command (As Administrator):
DOCS: https://github.com/felixrieseberg/windows-build-tools
```shell
$ npm install --global --production windows-build-tools
```

### 2. Install Node Build Tools
DOCS: https://github.com/nodejs/node-gyp
```shell
$ npm install --global node-gyp
```

### 3. Install Windows SDK version 8.1
Create a C++ (Desktop) project in VS2015.
VS2015 will ask you to install a certain component, just let it install.
Tested on VS2015 on Win10.