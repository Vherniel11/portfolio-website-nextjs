import styled from 'styled-components';
import Container from '../../shared/container/Container.styled';
import HeaderContactBtn from './HeaderContactBtn';
import HeaderLogo from './HeaderLogo';
import HeaderMenuBtn from './HeaderMenuBtn';

const HeaderNavBar = ({ toggle }) => {
    return (
        <Container>
            <Flex>
                <Flex1>
                    <HeaderLogo />
                </Flex1>
                <HeaderContactBtn />
                <HeaderMenuBtn toggle={toggle} />
            </Flex>
        </Container>
    );
};

var Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

var Flex1 = styled.div`
    flex: 1;
`;

export default HeaderNavBar;
