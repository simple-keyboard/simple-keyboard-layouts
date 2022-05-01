import { LayoutItem } from "../interfaces";

/**
 * Layout: N'ko
 */
export default <LayoutItem>{
  layout: {
    default: [
      "\U+07F7 \U+07C1 \U+07C2 \U+07C3 \U+07C4 \U+07C5 \U+07C6 \U+07C7 \U+07C8 \U+07C9 \U+07C0 \U+07CA = {bksp}",
      "{tab} \U+07D2 \U+07FE5 \U+07FA \U+07CB \U+07D9 \U+07D5 \U+07E6 \U+07CE \U+07CC \U+07D0 \U+07D4 [ ] \\",
      "{lock} \U+07CA \U+07DB \U+07D8 \U+07DD \U+07DC \U+07E4 \U+07D6 \U+07DE \U+07DF \U+07F8 \U+07F4 {enter}",
      "{shift} \U+07E2 \U+07CF \U+07D7 \U+07CD \U+07D3 \U+07E3 \U+07E1 \U+07F2 \U+07CF3 \0x2E2E {shift}",
      ".com @ {space}",
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} \U+07D1 \U+07E0   \U+07DA \U+07DA \U+07E7          { } |",
      '{lock} \U+07FD \U+07F2 \U+07F3 \U+07F8 \U+07F9 \U+07FA \U+07FE \U+07FF \U+07F6 \U+07F9 \U+07F5 {enter}',
      "{shift} \U+07EB \U+07EC \U+07ED \U+07EE \U+07EF \U+07F0 \U+07F1  < > \U+07FD {shift}",
      ".com @ {space}",
    ],
  },
};
