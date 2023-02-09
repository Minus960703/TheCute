export interface MenuListProps {
    id: number;
    content: string;
    active: boolean;
    herf: string;
}

const MenuList: Array<MenuListProps> = [
    {
        id: 1,
        content: '메뉴',
        active: false,
        herf: '/menu'
    },
    {
        id: 2,
        content: '강아지',
        active: false,
        herf: '/dogs'
    },
    {
        id: 3,
        content: '고양이',
        active: false,
        herf: '/cats'
    },
    {
        id: 4,
        content: '위치',
        active: false,
        herf: 'location'
    },
];

export { MenuList };