import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../shared/button/Button';
import Container from '../../shared/container/Container.styled';
import Divider from '../../shared/divider/Divider.styled';

const AboutSection = () => {
    return (
        <About>
            <Container>
                <Flex>
                    <SideContent>
                        <Title>01</Title>
                    </SideContent>
                    <MainContent>
                        <p>
                            <Title>About</Title>
                        </p>
                        <Divider />
                        <h3>
                            Passionate about web technologies, I love bringing
                            creativity, user friendly experiences and performant
                            websites together
                        </h3>
                        <Flex>
                            <FlexSide>
                                <h4>
                                    Delivering creative web experiences through
                                    process, design and development.
                                </h4>
                            </FlexSide>
                            <Description>
                                <p>
                                    With years of experience in website design
                                    and development, I solve real world problems
                                    and help clients achieve their goals.
                                </p>
                                <p>
                                    I have been solving problems collaboratively
                                    with designers and developers with my
                                    structured process. Allowing all of us to
                                    work flawlessly.
                                </p>
                                <p>
                                    My work process utilizes a structure on how
                                    to move solutions forward. Making
                                    deliverables as clear, concise and accurate
                                    as possible. Fulfilling the agreed work and
                                    avoid delivering wrong outputs. Thus,
                                    reducing wasted time, energy and the most
                                    important of all — money.
                                </p>
                                <BtnWrapper>
                                    <Button>
                                        <Link href="mailto:hello@vherniellebis.tech">
                                            Send an email
                                        </Link>
                                    </Button>
                                </BtnWrapper>
                            </Description>
                        </Flex>
                    </MainContent>
                </Flex>
            </Container>
        </About>
    );
};

var About = styled.section`
    padding-top: 4em;
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

    h3 {
        line-height: 1.3;
        font-size: 1.5rem;

        @media (min-width: 48rem) {
            font-size: 2rem;
        }
        @media (min-width: 80rem) {
            font-size: 3rem;
            margin-top: 3rem;
        }
    }
`;

var FlexSide = styled.div`
    h4 {
        font-size: 1rem;
    }

    @media (min-width: 40rem) {
        flex-basis: calc(2 / 7 * 100%);
    }
    @media (min-width: 80rem) {
        h4 {
            font-size: 1.25rem;
        }
    }
`;

var Description = styled.div`
    @media (min-width: 40rem) {
        flex-basis: calc(5 / 7 * 100%);
        padding-left: 1rem;
    }
`;

var BtnWrapper = styled.div`
    margin-top: 2em;

    ${Button} a {
        font-size: 0.875em;
        padding: 0.875em 2em;
    }
`;

var Title = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.25rem 0;
`;

export default AboutSection;
