import { LayoutItem, LayoutItemObj } from "./../interfaces";
declare class SimpleKeyboardLayouts {
    layouts: LayoutItemObj;
    get: (layout?: string) => LayoutItem | LayoutItemObj;
}
export default SimpleKeyboardLayouts;
