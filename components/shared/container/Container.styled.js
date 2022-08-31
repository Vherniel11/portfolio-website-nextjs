import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    padding: 0 1rem;
    max-width: 96rem;
    overflow: hidden;

    @media (min-width: 40rem) {
        padding: 0 2rem;
    }
    @media (min-width: 48rem) {
        padding: 0 4rem;
    }
    @media (min-width: 80rem) {
        padding: 0 6rem;
    }
`;

export default Container;
