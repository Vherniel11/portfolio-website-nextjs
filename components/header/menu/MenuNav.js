import styled from 'styled-components';
import MenuNavItem from './MenuNavItem';

const MenuNav = () => {
    return (
        <Nav>
            <MenuNavItem />
        </Nav>
    );
};

var Nav = styled.nav`
    margin-top: 2rem;
`;

export default MenuNav;
