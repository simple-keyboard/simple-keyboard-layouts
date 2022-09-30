export interface LayoutItem {
    layout: {
        [layoutName: string]: string[];
    };
}
export interface LayoutItemObj {
    [layoutName: string]: LayoutItem;
}
