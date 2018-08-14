import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import './css/App.css';

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import layout from '../lib/layouts/japanese';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);

    this.layoutName = "default";
  }

  onDOMLoaded = async () => {
    this.keyboard = new Keyboard({
      debug: true,
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      newLineOnEnter: true,
      layout: layout
    });
  
    /**
     * Adding preview (demo only)
     */
    document.querySelector('.simple-keyboard').insertAdjacentHTML('beforebegin', `
    <div class="simple-keyboard-preview">
      <textarea class="input" readonly></textarea>
    </div>
    `);
  
    console.log(this.keyboard);
  }

  handleShiftButton = () => {
    let layoutName = this.layoutName;
    let shiftToggle = this.layoutName = layoutName === "default" ? "shift" : "default";
  
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  onChange = input => {
    document.querySelector('.input').value = input;
  }

  onKeyPress = button => {
    console.log("Button pressed", button);
  
      /**
       * Shift functionality
       */
      if(button === "{lock}" || button === "{shift}")
        this.handleShiftButton();
  }

}

export default App;