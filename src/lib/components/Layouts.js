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

class SimpleKeyboardLayouts {

  get = (lang) => {
    const languages = {
      arabic,
      chinese,
      french,
      german,
      hindi,
      japanese,
      korean,
      russian,
      spanish,
      thai
    };

    return languages[lang];
  }

}

export default SimpleKeyboardLayouts;
