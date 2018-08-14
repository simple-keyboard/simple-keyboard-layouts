[![npm version](https://badge.fury.io/js/simple-keyboard-layouts.svg)](https://www.npmjs.com/package/simple-keyboard-layouts)

<a href="https://franciscohodge.com/projects/simple-keyboard/"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simple-keyboard-layouts-banner2.png" align="center"></a>
> The multi-language keyboard layout kit for simple-keyboard.

## Installation

### npm

> Install simple-keyboard and simple-keyboard-layouts.

`npm install simple-keyboard-layouts --save`

### zip file (self-hosted)

[Click here to download the latest release (zip format).](https://github.com/hodgef/simple-keyboard-layouts/zipball/master)

> Want to use a CDN instead of self-host? Scroll down to the "Usage with CDN" instructions below.

## Usage with npm


````js
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import layout from "simple-keyboard-layouts/build/layouts/japanese";

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: layout
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}
````

### html

````html
<input class="input" />
<div class="simple-keyboard"></div>
````

[![Edit simple-keyboard-layouts demo - npm](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pk9513441m)