import { LayoutItem } from "../interfaces";

/**
 * Layout: Swiss French (QWERTZ)
 */
export default <LayoutItem>{
  layout: {
    default: [
      "§ 1 2 3 4 5 6 7 8 9 0 ' ^ {bksp}",
      "{tab} q w e r t z u i o p è ¨",
      "{lock} a s d f g h j k l é ä $ {enter}",
      "{shift} < y x c v b n , ; : _ {shift}",
      ".com @ {space}",
    ],
    shift: [
      "° + \" * ç % & / ( ) = ? ` {bksp}",
      "{tab} Q W E R T Z U I O P È !",
      "{lock} A S D F G H J K L É Ä £ {enter}",
      "{shift} > Y X C V B N ; : / | {shift}",
      ".com @ {space}",
    ],
  },
};