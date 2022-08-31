import Container from '../../shared/container/Container.styled';
import styled from 'styled-components';
import Image from 'next/image';

// React Icons
import { IconContext } from 'react-icons';
import { IoLogoReact } from 'react-icons/io5';
import { IoLogoNodejs } from 'react-icons/io5';
import { IoLogoSass } from 'react-icons/io5';
import { SiSvelte } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiPostcss } from 'react-icons/si';

const HeroSection = () => {
    return (
        <Hero>
            <Container>
                <Headline>
                    I’m Vherniel Lebis, a creative web designer and developer. I
                    deliver dynamic, user-friendly, and effective websites with
                    JavaScript technologies.
                </Headline>
                <Technologies>
                    <div>
                        <Title>Technologies I use:</Title>
                        <IconsFlex>
                            <IconContext.Provider
                                value={{
                                    color: '#5ED3F3',
                                    size: '1.25em',
                                }}>
                                <Icon>
                                    <IoLogoReact />
                                </Icon>
                            </IconContext.Provider>
                            <IconContext.Provider
                                value={{
                                    color: '#F73C00',
                                    size: '1.25em',
                                }}>
                                <Icon>
                                    <SiSvelte />
                                </Icon>
                            </IconContext.Provider>
                            <IconContext.Provider
                                value={{
                                    color: '#68A063',
                                    size: '1.6em',
                                }}>
                                <Icon>
                                    <IoLogoNodejs />
                                </Icon>
                            </IconContext.Provider>
                            <IconContext.Provider
                                value={{
                                    color: '#2F74C0',
                                    size: '1.25em',
                                }}>
                                <Icon>
                                    <SiTypescript />
                                </Icon>
                            </IconContext.Provider>
                            <IconContext.Provider
                                value={{
                                    color: '#38BDF8',
                                    size: '1.25em',
                                }}>
                                <Icon>
                                    <SiTailwindcss />
                                </Icon>
                            </IconContext.Provider>
                            <IconsFlex>
                                <IconContext.Provider
                                    value={{
                                        color: '#C45F92',
                                        size: '1.25em',
                                    }}>
                                    <Icon>
                                        <IoLogoSass />
                                    </Icon>
                                </IconContext.Provider>
                                <IconContext.Provider
                                    value={{
                                        color: '#D23709',
                                        size: '1.25em',
                                    }}>
                                    <Icon>
                                        <SiPostcss />
                                    </Icon>
                                </IconContext.Provider>
                            </IconsFlex>
                        </IconsFlex>
                    </div>
                </Technologies>
            </Container>
            {/* <MaxFlex> */}
            {/* <div /> */}
            {/* <MaxFlexRight>
                    <ImageContainer>
                        <Image
                            src="/vherniel-lebis.png"
                            width="2560"
                            height="1080"
                            objectFit="cover"
                        />
                    </ImageContainer>
                </MaxFlexRight> */}
            {/* </MaxFlex> */}
        </Hero>
    );
};

var Hero = styled.section`
    min-height: 85vh;
    max-height: 100%;
    padding-top: 6rem;

    @media (min-width: 80rem) {
        padding-top: 8rem;
    }
`;

var MaxFlex = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: flex-end;

    @media (min-width: 80rem) {
        // margin-top: -10rem;
    }
`;

var MaxFlexRight = styled.div`
    flex-basis: 100%;
    padding-left: 1rem;
    margin-top: 1rem;

    @media (min-width: 30rem) {
        flex-basis: 75%;
    }
    @media (min-width: 40rem) {
        padding-left: 2rem;
    }
    @media (min-width: 48rem) {
        padding-left: 4rem;
    }
    @media (min-width: 80rem) {
        flex-basis: 50%;
        padding-left: 0;
        margin-top: -10rem;
    }
`;

var ImageContainer = styled.div`
    padding-top: calc(9 / 16 * 100%);
    position: relative;
    height: 0;
    background-color: lightgray;

    @media (min-width: 48rem) {
        padding-top: calc(9 / 21 * 100%);
    }

    & > span {
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        top: 0;
        left: 0;
    }
`;

var Headline = styled.h1`
    line-height: 1.3;
    font-size: 1.25rem;

    @media (min-width: 48rem) {
        font-size: 2rem;
    }
    @media (min-width: 80rem) {
        font-size: 3rem;
        margin-top: 3rem;
        padding-bottom: 2rem;
    }
`;

var Technologies = styled.div`
    margin-top: 3em;
    max-width: 85%;

    @media (min-width: 80rem) {
        margin-top: 5rem;
    }
`;

var Title = styled.p`
    font-weight: 700;
`;

var IconsFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

var Icon = styled.div`
    margin-right: 1em;
`;

export default HeroSection;
