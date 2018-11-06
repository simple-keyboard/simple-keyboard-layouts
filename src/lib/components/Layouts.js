import arabic from '../layouts/arabic';
import chinese from'../layouts/chinese';
import french from '../layouts/french';
import german from '../layouts/german';
import hindi from '../layouts/hindi';
import japanese from '../layouts/japanese';
import korean from '../layouts/korean';
import russian from '../layouts/russian';
import spanish from '../layouts/spanish';
import thai from '../layouts/thai';
import urdu from '../layouts/urdu';
import sindhi from '../layouts/sindhi';

class SimpleKeyboardLayouts {

  get = (layout) => {
    const layouts = {
      arabic,
      chinese,
      french,
      german,
      hindi,
      japanese,
      korean,
      russian,
      spanish,
      thai,
      urdu,
      sindhi
    };

    return layouts[layout];
  }

}

export default SimpleKeyboardLayouts;
