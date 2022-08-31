import styled from 'styled-components';
import Container from '../../shared/container/Container.styled';
import HeaderContactBtn from './HeaderContactBtn';
import HeaderLogo from './HeaderLogo';
import HeaderMenuBtn from './HeaderMenuBtn';

const HeaderNavBar = ({ toggle, isMenuOpen }) => {
    return (
        <Container>
            <Flex>
                <Flex1>
                    <HeaderLogo />
                </Flex1>
                <HeaderContactBtn />
                <HeaderMenuBtn toggle={toggle} isMenuOpen={isMenuOpen} />
            </Flex>
        </Container>
    );
};

var Flex = styled.div`
    padding: 1.5rem 0;
    display: flex;
    flex-flow: row wrap;
    background-color: white;
`;

var Flex1 = styled.div`
    flex: 1;
`;

export default HeaderNavBar;
