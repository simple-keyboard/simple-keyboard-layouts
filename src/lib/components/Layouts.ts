import { LayoutItem, LayoutItemObj } from "./../interfaces";

import arabic from "../layouts/arabic";
import assamese from "../layouts/assamese";
import belarusian from "../layouts/belarusian";
import bengali from "../layouts/bengali";
import burmese from "../layouts/burmese";
import chinese from "../layouts/chinese";
import czech from "../layouts/czech";
import english from "../layouts/english";
import farsi from "../layouts/farsi";
import french from "../layouts/french";
import georgian from "../layouts/georgian";
import german from "../layouts/german";
import gilaki from "../layouts/gilaki";
import greek from "../layouts/greek";
import hebrew from "../layouts/hebrew";
import hindi from "../layouts/hindi";
import hungarian from "../layouts/hungarian";
import italian from "../layouts/italian";
import japanese from "../layouts/japanese";
import kannada from "../layouts/kannada";
import korean from "../layouts/korean";
import malayalam from "../layouts/malayalam";
import nigerian from "../layouts/nigerian";
import nko from "../layouts/nko";
import norwegian from "../layouts/norwegian";
import polish from "../layouts/polish";
import russian from "../layouts/russian";
import russianOld from "../layouts/russianOld";
import sindhi from "../layouts/sindhi";
import spanish from "../layouts/spanish";
import swedish from "../layouts/swedish";
import thai from "../layouts/thai";
import turkish from "../layouts/turkish";
import ukrainian from "../layouts/ukrainian";
import urdu from "../layouts/urdu";
import uyghur from "../layouts/uyghur";

class SimpleKeyboardLayouts {
  layouts: LayoutItemObj = {
    arabic,
    assamese,
    belarusian,
    bengali,
    burmese,
    chinese,
    czech,
    english,
    farsi,
    french,
    georgian,
    german,
    gilaki,
    greek,
    hebrew,
    hindi,
    hungarian,
    italian,
    japanese,
    kannada,
    korean,
    nigerian,
    nko,
    norwegian,
    malayalam,
    polish,
    russian,
    russianOld,
    sindhi,
    spanish,
    swedish,
    thai,
    turkish,
    ukrainian,
    urdu,
    uyghur,
  };

  public get = (layout?: string): LayoutItem | LayoutItemObj =>
    layout ? this.layouts[layout] : this.layouts;
}

export default SimpleKeyboardLayouts;
