import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./css/App.css";

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import layout from "../lib/layouts/chinese";

class App {
  keyboard: Keyboard;
  layoutName: string;

  constructor() {
    this.layoutName = "default";

    /**
     * Adding preview (demo only)
     */
    document.querySelector("body").innerHTML = `
      <div class="simple-keyboard-preview">
        <textarea class="input" readonly></textarea>
      </div>
      <div class="simple-keyboard"></div>
    `;

    this.keyboard = new Keyboard({
      ...layout,
      debug: true,
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      newLineOnEnter: true,
    });

    console.log(this.keyboard);
  }

  handleShiftButton = () => {
    const layoutName = this.layoutName;
    const shiftToggle = (this.layoutName =
      layoutName === "default" ? "shift" : "default");

    this.keyboard.setOptions({
      layoutName: shiftToggle,
    });
  };

  onChange = (input) => {
    (document.querySelector(".input") as HTMLInputElement).value = input;
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * Shift functionality
     */
    if (button === "{lock}" || button === "{shift}") this.handleShiftButton();
  };
}

export default App;
