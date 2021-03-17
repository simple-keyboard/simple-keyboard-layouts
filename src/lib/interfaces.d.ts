export interface LayoutItem {
    layout: {[layoutName: string]: string[]};
    [layoutName: string]: any;
}

export interface LayoutItemObj {
    [layoutName: string] : LayoutItem;
}