export interface MainMenuSideBarPropsIndividual {
    label?: string,
    Icon?: any,
    onClick?: Function,
    index: number
}

export type MainMenuSideBarItems = {
    label?: string,
    Icon?: any,
    onClick?: Function,
    index: number,
    subMenu?: Array<MainMenuSideBarPropsIndividual>,
    isOpen?:boolean;
}

export type MainMenuSideBarProps = {
    items: MainMenuSideBarItems[],
    selectedIndex:number,
    setSelectedIndex:Function,
}