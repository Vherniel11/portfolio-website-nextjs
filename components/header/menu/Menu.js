import styled from 'styled-components';
import Container from '../../shared/container/Container.styled';

import MenuInfo from './MenuInfo';
import MenuNav from './MenuNav';

const Menu = ({ toggle, isMenuOpen }) => {
    return (
        <MenuSection isMenuOpen={isMenuOpen}>
            <Container>
                <MenuNav toggle={toggle} />
                <MenuInfo />
            </Container>
        </MenuSection>
    );
};

var MenuSection = styled.div`
    ${(prop) => (prop.isMenuOpen ? '' : 'top: -9999px')};
    width: 100%;
    position: absolute;
    padding-bottom: 2rem;
    background-color: white;
    box-shadow: 0px 1.3px 1.3px -6px rgba(0, 0, 0, 0.06),
        0px 3.2px 3.2px -6px rgba(0, 0, 0, 0.043),
        0px 6px 6px -6px rgba(0, 0, 0, 0.036),
        0px 10.7px 10.7px -6px rgba(0, 0, 0, 0.03),
        0px 20.1px 20.1px -6px rgba(0, 0, 0, 0.024),
        0px 48px 48px -6px rgba(0, 0, 0, 0.017);
`;

export default Menu;
