export interface MenuListProps {
    id: number;
    content: string;
    active: boolean;
    href: string;
}

const MenuList: Array<MenuListProps> = [
    {
        id: 1,
        content: '메뉴',
        active: false,
        href: '/menu/coffee'
    },
    {
        id: 2,
        content: '강아지',
        active: false,
        href: '/dogs'
    },
    {
        id: 3,
        content: '고양이',
        active: false,
        href: '/cats'
    },
    {
        id: 4,
        content: '위치',
        active: false,
        href: 'location'
    },
];

export { MenuList };