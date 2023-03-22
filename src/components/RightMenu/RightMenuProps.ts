export interface RightMenuItem {
    label?: string;
    onClick?: Function;
    isSelected?: boolean;
    referTo?: string;
    id: number;
}

export interface RightMenuProps {
    items: RightMenuItem[];
    width: string;
    baseUrl?: string;
    selectedItemProp?:number;
}