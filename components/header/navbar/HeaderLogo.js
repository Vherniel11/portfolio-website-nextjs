// for unknown reason, this is not working as expected with SVGs.
// import Link from 'next/link';

import styled from 'styled-components';

const HeaderLogo = () => {
    return (
        // IDK if this is an hack. But it works so let's skip this.
        // Caveat: homepage loads with full reload.
        <a href="/">
            <Logo viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
                <path d="M293.664 0L212.134 115.297L130.604 0H0L212.134 300L344.728 112.497V300H429.938H660L593.708 206.249H450.795V0H293.664Z" />
            </Logo>
        </a>
    );
};

var Logo = styled.svg`
    height: 2rem;
    path {
        color: black;
    }
`;

export default HeaderLogo;
