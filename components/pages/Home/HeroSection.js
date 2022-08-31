import Container from '../../shared/container/Container.styled';
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <section>
            <Container>
                <Headline>
                    I’m Vherniel Lebis, a creative web designer and developer. I
                    deliver dynamic, user-friendly, and effective websites with
                    JavaScript technologies.
                </Headline>
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

export default HeroSection;
