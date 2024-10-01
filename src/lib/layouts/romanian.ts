import { LayoutItem } from "../interfaces";

/**
 * Layout: Romanian
 */
export default <LayoutItem>{
  layout: {
    default: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p ă î â",
      "{lock} a s d f g h j k l ș ț {enter}",
      "{shift} z x c v b n m , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P Ă Î Â",
      '{lock} A S D F G H J K L Ș Ț {enter}',
      "{shift} Z X C V B N M < > ? {shift}",
      ".com @ {space}",
    ],
  },
};
