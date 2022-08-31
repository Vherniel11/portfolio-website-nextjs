import styled from 'styled-components';
import Container from '../shared/container/Container.styled';
import Divider from '../shared/divider/Divider.styled';

const Footer = () => {
    return (
        <Foot>
            <Container>
                <Flex>
                    <SideContent>
                        <Title>02</Title>
                    </SideContent>
                    <MainContent>
                        <p>
                            <Title>Let’s Work Together</Title>
                        </p>
                        <Divider />
                        <div>
                            <h2>
                                <Email href="mailto:hello@vherniellebis.tech">
                                    <span>hello</span>
                                    <span>@vherniellebis.tech</span>
                                </Email>
                            </h2>
                        </div>
                        <Copyright>
                            © 2022 Vherniel Lebis.
                            All&nbsp;Rights&nbsp;Reserved.
                        </Copyright>
                    </MainContent>
                </Flex>
            </Container>
        </Foot>
    );
};

var Foot = styled.footer`
    padding-top: 8em;
    padding-bottom: 2em;
`;

var Flex = styled.div`
    @media (min-width: 30rem) {
        display: flex;
        flex-wrap: wrap;
    }
`;

var SideContent = styled.div`
    @media (min-width: 30rem) {
        flex-basis: calc(1 / 8 * 100%);
    }
    @media (min-width: 80rem) {
        flex-basis: calc(2 / 12 * 100%);
    }
`;

var MainContent = styled.div`
    ${Flex} {
        margin-top: 1.5rem;
    }

    @media (min-width: 30rem) {
        flex-basis: calc(7 / 8 * 100%);
    }
    @media (min-width: 80rem) {
        flex-basis: calc(10 / 12 * 100%);
    }

    h2 {
        line-height: 1.3;
        font-size: 8vw;

        @media (min-width: 30rem) {
            font-size: 2rem;
        }
        @media (min-width: 48rem) {
            font-size: 2.5rem;
        }
        @media (min-width: 80rem) {
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
`;

var Email = styled.a`
    display: inline-flex;
    flex-flow: row wrap;
    text-decoration: none;
    color: black;
    line-height: 1;
    margin-bottom: 3rem;

    span {
        border-bottom: solid 2px transparent;
        padding-bottom: 2px;
    }

    &:hover span {
        border-bottom-color: black;
    }
`;

var Copyright = styled.small`
    font-size: 0.75rem;

    @media (min-width: 48rem) {
        font-size: 1rem;
    }
`;

var Title = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.25rem 0;
`;

export default Footer;
