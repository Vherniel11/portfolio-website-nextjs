import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';
import HeaderNavBar from './navbar/HeaderNavBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const onScroll = useCallback((e) => {
        const { pageYOffset, scrollY } = window;
        console.log('yOffset', pageYOffset, 'scrollY', scrollY);
        setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });

        return window.removeEventListener('scroll', onScroll, {
            passive: true,
        });
    }, []);

    return (
        <Head>
            <HeaderNavBar toggle={toggleMenu} isMenuOpen={menuOpen} />
            {menuOpen ? <Menu toggle={toggleMenu} /> : <></>}
        </Head>
    );
};

var Head = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
`;

export default Header;
