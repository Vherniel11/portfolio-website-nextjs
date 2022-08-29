import styled from 'styled-components';
import Container from '../../shared/container/Container.styled';

import MenuInfo from './MenuInfo';
import MenuNav from './MenuNav';

const Menu = () => {
    return (
        <Container>
            <Indent>
                <MenuNav />
                <MenuInfo />
            </Indent>
        </Container>
    );
};

var Indent = styled.div`
    margin-left: 2em;
    margin-right: 1em;
`;

export default Menu;
