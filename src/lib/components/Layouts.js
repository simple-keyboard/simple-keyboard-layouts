import arabic from '../layouts/arabic';
import chinese from'../layouts/chinese';
import czech from'../layouts/czech';
import english from'../layouts/english';
import french from '../layouts/french';
import german from '../layouts/german';
import hindi from '../layouts/hindi';
import italian from '../layouts/italian';
import japanese from '../layouts/japanese';
import korean from '../layouts/korean';
import russian from '../layouts/russian';
import sindhi from '../layouts/sindhi';
import spanish from '../layouts/spanish';
import thai from '../layouts/thai';
import turkish from '../layouts/turkish';
import urdu from '../layouts/urdu';

class SimpleKeyboardLayouts {
  layouts = {
    arabic,
    chinese,
    czech,
    english,
    french,
    german,
    hindi,
    italian,
    japanese,
    korean,
    russian,
    sindhi,
    spanish,
    thai,
    turkish,
    urdu
  };

  get = layout => layout ? this.layouts[layout] : this.layouts;
}

export default SimpleKeyboardLayouts;
