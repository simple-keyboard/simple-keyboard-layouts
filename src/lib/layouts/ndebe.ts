import { LayoutItem } from "../interfaces";

/**
 * Layout: Ndebe
 * Source: Lotanna Igwe-Odunze (https://github.com/odunze) for The Ndebe Project (https://github.com/ndebeproject)
 */
 export default <LayoutItem>{
   layout: {
     default: [
       "` \e101 \e102 \e103 \e104 \e105 \e106 \e107 \e108 \e109 \e100 - = {bksp}",
       "{tab} \e25A \e300 \e254 \e351 \e350 \e301 \e266 \e354 \e263 \e26C [ ] \\",
       "{lock} \e257 \e302 \e353 \e352 \e303 \e251 \e355 \e304 \e269 ; ' {enter}",
       "{shift} \e356 \e25D \e305 \e260 b n m , . / {shift}",
       ".com @ {space}",
     ],
     shift: [
       "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
       "{tab} \e259 W \e253 R T Y \e265 I \e262 \e26B { } |",
       '{lock} \e256 S D F G \e250 J K \e268 : " {enter}',
       "{shift} Z \e25C C \e25F B N M < > ? {shift}",
       ".com @ {space}",
     ],
     alt: [
       "~ \e10B \e10C \e10D \e10E \e10F \e110 \e111 \e112 \e113 \e10A _ + {bksp}",
       "{tab} \e25B W \e255 R T Y \e267 I \e264 \e26D { } |",
       '{lock} \e258 S D F G \e252 J K \e26A : " {enter}',
       "{shift} Z \e25E C \e261 B N M < > ? {shift}",
       ".com @ {space}",
     ]
   },
 };
