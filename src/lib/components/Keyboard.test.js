import Layouts from './Layouts';
import Keyboard from 'simple-keyboard';

it('Keyboard and layout renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  const layouts = new Layouts();
  const japanese = layouts.get("japanese");

  const keyboard = new Keyboard({
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
