import styled from 'styled-components';
import Container from '../../shared/container/Container.styled';

import MenuInfo from './MenuInfo';
import MenuNav from './MenuNav';

const Menu = ({ toggle }) => {
    return (
        <MenuSection>
            <Container>
                <Indent>
                    <MenuNav toggle={toggle} />
                    <MenuInfo />
                </Indent>
            </Container>
        </MenuSection>
    );
};

var MenuSection = styled.div`
    padding-bottom: 2rem;
    background-color: white;
    box-shadow: 0px 1.3px 1.3px -6px rgba(0, 0, 0, 0.06),
        0px 3.2px 3.2px -6px rgba(0, 0, 0, 0.043),
        0px 6px 6px -6px rgba(0, 0, 0, 0.036),
        0px 10.7px 10.7px -6px rgba(0, 0, 0, 0.03),
        0px 20.1px 20.1px -6px rgba(0, 0, 0, 0.024),
        0px 48px 48px -6px rgba(0, 0, 0, 0.017);
`;

var Indent = styled.div`
    margin-left: 2em;
    margin-right: 1em;

    @media (min-width: 40rem) {
        margin: 0;
    }
`;

export default Menu;
