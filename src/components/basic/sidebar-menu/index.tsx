import React from 'react'
import './styles.css'
import { LogoWhite } from '@/constants/svgs'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const SidebarMenu: React.FC = () => {
    const pathname = usePathname();

    const menuItems = [
        { href: '/onboarding', name: 'Onboarding' },
        { href: '/free-message', name: 'Mensaje libre' },
        { href: '/cabildos/station-one', name: 'Estación 1' },
        { href: '/cabildos/station-two', name: 'Estación 2' },
        { href: '/cabildos/station-three', name: 'Estación 3' },
        { href: '/cabildos/final-message', name: 'Cierre' }
    ]
    return (
        <div className='sidebar-menu'>
            <div style={{ paddingLeft: 32, paddingTop: 35 }}><LogoWhite /></div>
            <div style={{ height: 68 }} />
            <div className='sidebar-menu-items'>
                {menuItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <div className={item.href === pathname ? 'sidebar-menu-item-active' : 'sidebar-menu-item'}>{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SidebarMenu