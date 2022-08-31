import Link from 'next/link';
import Button from '../../shared/button/Button';
import styled from 'styled-components';

const HeaderContactBtn = () => {
    return (
        <Btn>
            <Link href="mailto:hello@vherniellebis.tech">Send an email</Link>
        </Btn>
    );
};

var Btn = styled(Button)`
    a {
        font-size: 0.875em;
        padding: 0.3rem 1em;
        height: 2rem;
    }

    @media (min-width: 48rem) {
        a {
            padding: 0.75rem 1.4em;
            height: unset;
        }
    }
`;

export default HeaderContactBtn;
