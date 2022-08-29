import Link from 'next/link';
import styled from 'styled-components';

const HeaderContactBtn = () => {
    return (
        <ButtonWrapper>
            <Link href="/">Get in touch</Link>
        </ButtonWrapper>
    );
};

var ButtonWrapper = styled.div`
    a {
        height: 2rem;
        display: inline-block;
        padding: 0.5rem 1.25rem;
        font-size: 0.75rem;
        background: black;
        color: white;
        text-decoration: none;
        font-weight: 700;
        line-height: auto;
    }
`;

export default HeaderContactBtn;
