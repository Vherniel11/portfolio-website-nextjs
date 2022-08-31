import { useState } from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';
import HeaderNavBar from './navbar/HeaderNavBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    return (
        <Head>
            <HeaderNavBar toggle={toggleMenu} isMenuOpen={menuOpen} />
            {menuOpen ? <Menu toggle={toggleMenu} /> : <></>}
        </Head>
    );
};

var Head = styled.header`
    padding: 1.5rem 0;
`;

export default Header;
