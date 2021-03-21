import { LayoutItem } from './../interfaces';
import Layouts from './Layouts';
import Keyboard from 'simple-keyboard';

it('Keyboard and layout renders without crashing', () => {
  const layouts = new Layouts().get();

  Object.keys(layouts).forEach((layoutId: string) => {
    const layoutsItem: LayoutItem = layouts[layoutId];

    expect(layoutsItem.layout).toBeDefined();
    expect(layoutsItem.layout.default).toBeDefined();
    expect(layoutsItem.layout.shift).toBeDefined();
    expect(Object.keys(layoutsItem.layout).length).toBe(2);

    const keyboardDOM = document.createElement("div");
    keyboardDOM.className = "keyboard";

    const keyboard = new Keyboard(keyboardDOM, {
      ...layoutsItem,
    });

    keyboard.destroy();
  });
});
