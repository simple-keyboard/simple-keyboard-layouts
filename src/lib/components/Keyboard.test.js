import Layouts from './Layouts';
import Keyboard from 'simple-keyboard';

it('Keyboard and layout renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  let layouts = new Layouts();
  let japanese = layouts.get("japanese");

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true,
    layout: japanese
  });

  if(keyboard.getButtonElement("q") || keyboard.getButtonElement("w"))
    throw "LAYOUT_LOAD_ERROR";
  else {
    console.log("LAYOUT_LOAD PASSED");
  }
});