[![npm version](https://badge.fury.io/js/simple-keyboard-layouts.svg)](https://www.npmjs.com/package/simple-keyboard-layouts)

<img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simple-keyboard-layouts-banner4.png" align="center">

> The multi-language keyboard layout kit for simple-keyboard.

## Installation

### npm

> Make sure to install [simple-keyboard](https://github.com/hodgef/simple-keyboard) as a first step. Then:

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

## Usage with CDN

### html

````html
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css">
</head>

<body>
  <input class="input" />
  <div class="simple-keyboard"></div>

  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard-layouts@latest/build/index.min.js"></script>
  <script src="src/index.js"></script>
</body>

</html>
````

### js (index.js)

````js
let Keyboard = window.SimpleKeyboard.default;
let KeyboardLayouts = window.SimpleKeyboardLayouts.default;

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
let layout = new KeyboardLayouts().get("japanese");

let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: layout
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
````

[![Edit simple-keyboard-layouts demo - cdn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3x68op108p)

# Options and Customization

> To fully customize your virtual keyboard, check out the main simple-keyboard repository:

<a href="https://github.com/hodgef/simple-keyboard" title="simple-keyboard repository"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simplekeyboard-banner3x.png" align="center"></a>