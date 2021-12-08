import { LayoutItem, LayoutItemObj } from "./../interfaces";
declare class SimpleKeyboardLayouts {
    layouts: LayoutItemObj;
    get: (layout?: string | undefined) => LayoutItem | LayoutItemObj;
}
export default SimpleKeyboardLayouts;
