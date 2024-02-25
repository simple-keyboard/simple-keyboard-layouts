import { LayoutItem, LayoutItemObj } from "./../interfaces";

import arabic from "../layouts/arabic";
import assamese from "../layouts/assamese";
import balochi from "../layouts/balochi";
import belarusian from "../layouts/belarusian";
import bengali from "../layouts/bengali";
import brazilian from "../layouts/brazilian";
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
import kurdish from "../layouts/kurdish";
import macedonian from "../layouts/macedonian";
import malayalam from "../layouts/malayalam";
import nigerian from "../layouts/nigerian";
import nko from "../layouts/nko";
import norwegian from "../layouts/norwegian";
import odia from "../layouts/odia";
import polish from "../layouts/polish";
import punjabi from "../layouts/punjabi";
import russian from "../layouts/russian";
import russianOld from "../layouts/russianOld";
import sindhi from "../layouts/sindhi";
import spanish from "../layouts/spanish";
import swedish from "../layouts/swedish";
import telugu from "../layouts/telugu";
import thai from "../layouts/thai";
import turkish from "../layouts/turkish";
import ukrainian from "../layouts/ukrainian";
import urdu from "../layouts/urdu";
import urduStandard from "../layouts/urduStandard";
import uyghur from "../layouts/uyghur";

class SimpleKeyboardLayouts {
  layouts: LayoutItemObj = {
    arabic,
    assamese,
    balochi,
    belarusian,
    bengali,
    brazilian,
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
    kurdish,
    macedonian,
    malayalam,
    nigerian,
    nko,
    norwegian,
    odia,
    polish,
    punjabi,
    russian,
    russianOld,
    sindhi,
    spanish,
    swedish,
    telugu,
    thai,
    turkish,
    ukrainian,
    urdu,
    urduStandard,
    uyghur,
  };

  public get = (layout?: string): LayoutItem | LayoutItemObj =>
    layout ? this.layouts[layout] : this.layouts;
}

export default SimpleKeyboardLayouts;
