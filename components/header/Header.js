import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';
import HeaderNavBar from './navbar/HeaderNavBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        setMenuOpen(!menuOpen);
    };

    const [allowDOM, setAllowDOM] = useState(false);

    useEffect(() => {
        setAllowDOM(true);
    }, []);

    useEffect(() => {
        const header = document.querySelector('header');
        function checkScroll() {
            window.scrollY >= 100
                ? (header.style.backgroundColor = 'white')
                : (header.style.backgroundColor = 'transparent');
        }
        if (allowDOM) {
            window.addEventListener('scroll', checkScroll);
            return () => window.removeEventListener('resize', checkScroll);
        }
    }, [allowDOM]);

    return (
        <Head isMenuOpen={menuOpen}>
            <HeaderNavBar toggle={toggleMenu} isMenuOpen={menuOpen} />
            <Menu toggle={toggleMenu} isMenuOpen={menuOpen} />
        </Head>
    );
};

var Head = styled.header`
    ${(prop) => (!prop.isMenuOpen ? '' : 'background-color: white !important')};
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
`;

export default Header;
