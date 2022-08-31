import Container from '../../shared/container/Container.styled';
import styled from 'styled-components';

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
        <section>
            <Container>
                <Headline>
                    I’m Vherniel Lebis, a creative web designer and developer. I
                    deliver dynamic, user-friendly, and effective websites with
                    JavaScript technologies.
                </Headline>
                <div>
                    <p>Technologies I use</p>
                    <IconsFlex>
                        <IconContext.Provider
                            value={{
                                color: '#5ED3F3',
                                size: '1.5em',
                            }}>
                            <Icon>
                                <IoLogoReact />
                            </Icon>
                        </IconContext.Provider>
                        <IconContext.Provider
                            value={{
                                color: '#F73C00',
                                size: '1.5em',
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
                                size: '1.5em',
                            }}>
                            <Icon>
                                <SiTypescript />
                            </Icon>
                        </IconContext.Provider>
                        <IconContext.Provider
                            value={{
                                color: '#38BDF8',
                                size: '1.5em',
                            }}>
                            <Icon>
                                <SiTailwindcss />
                            </Icon>
                        </IconContext.Provider>
                        <IconContext.Provider
                            value={{
                                color: '#C45F92',
                                size: '1.5em',
                            }}>
                            <Icon>
                                <IoLogoSass />
                            </Icon>
                        </IconContext.Provider>
                        <IconContext.Provider
                            value={{
                                color: '#D23709',
                                size: '1.5em',
                            }}>
                            <Icon>
                                <SiPostcss />
                            </Icon>
                        </IconContext.Provider>
                    </IconsFlex>
                </div>
            </Container>
        </section>
    );
};

var Headline = styled.h1`
    line-height: 1.3;
    font-size: 1.5rem;

    @media (min-width: 48rem) {
        font-size: 2rem;
    }
    @media (min-width: 80rem) {
        font-size: 3rem;
        margin-top: 5rem;
    }
`;

var IconsFlex = styled.div`
    display: flex;
`;

var Icon = styled.div`
    margin-right: 1em;
`;

export default HeroSection;
