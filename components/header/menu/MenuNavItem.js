import Link from 'next/link';
import styled from 'styled-components';

const MenuNavItem = ({ toggle }) => {
    return (
        <Ul>
            {/* <Li>
                <Link href="/">Work</Link>
            </Li> */}
            <Li>
                <Link href="#about">
                    <a onClick={toggle}>About</a>
                </Link>
            </Li>
            {/* <Li>
                <Link href="/">Services</Link>
            </Li> */}
        </Ul>
    );
};

var Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

var Li = styled.li`
    margin: 1em 0;

    a {
        font-size: 1.75rem;
        text-decoration: none;
        font-weight: 700;
        color: black;
    }
`;

export default MenuNavItem;
