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
import urdu from '../layouts/urdu';

class SimpleKeyboardLayouts {

  get = (layout) => {
    const layouts = {
      arabic,
      chinese,
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
      urdu
    };

    return layouts[layout];
  }

}

export default SimpleKeyboardLayouts;
