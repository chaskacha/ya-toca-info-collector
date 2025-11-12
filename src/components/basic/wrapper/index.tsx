'use client';
import React, { JSX } from 'react';
import './styles.css';
import { COLORS } from '../../../constants/texts';
import SidebarMenu from '../sidebar-menu';
import { LogoWhite } from '@/constants/svgs';
import FooterMobile from '../footer-mobile';

interface Props {
    children: JSX.Element;
    color?: string;
}
const Wrapper: React.FC<Props> = ({ children, color = COLORS.GRAY2 }) => {
    return (
        <div className='wrapper' style={{ backgroundColor: color }}>
            <header className="app-header" role="banner" aria-label="Site header">
                <div className="app-header__inner">
                    <a href="/" className="app-header__brand" aria-label="Home">
                        <LogoWhite />
                    </a>
                    {/* Space for future actions (profile, language, etc.) */}
                    <div className="app-header__spacer" />
                </div>
            </header>
            {/* <div style={{ flex: 2, width: '100%', minHeight: '100vh', height: '100%', backgroundColor: 'black' }}><SidebarMenu /></div> */}
            <div style={{ flex: 10 }} className='wrapper-children'>{children}</div>
            <FooterMobile />
        </div>
    )
}
export default Wrapper;