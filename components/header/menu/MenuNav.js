import styled from 'styled-components';
import MenuNavItem from './MenuNavItem';

const MenuNav = ({ toggle }) => {
    return (
        <Nav>
            <MenuNavItem toggle={toggle} />
        </Nav>
    );
};

var Nav = styled.nav`
    margin-top: 2rem;
`;

export default MenuNav;
