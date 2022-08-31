import styled from 'styled-components';

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 96rem;
    overflow: hidden;

    @media (min-width: 40rem) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media (min-width: 48rem) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
    @media (min-width: 80rem) {
        padding-left: 6rem;
        padding-right: 6rem;
    }
`;

export default Container;
