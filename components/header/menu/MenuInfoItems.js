import styled from 'styled-components';

const MenuInfoItem = () => {
    return (
        <Address>
            <ItemWrapper>
                <Link href="mailto:hello@vherniellebis.tech">
                    hello@vherniellebis.tech
                </Link>
            </ItemWrapper>
            <ItemWrapper>
                <Link href="tel:+639669909400">+63 966 990-9400</Link>
            </ItemWrapper>
            <ItemWrapper>
                <div>
                    <Link
                        href="https://goo.gl/maps/7SommEKzedeavqXt9"
                        target="_blank">
                        <p>Malabon City</p>
                        <p>1470 Metro Manila</p>
                        <p>Philippines</p>
                    </Link>
                </div>
            </ItemWrapper>
        </Address>
    );
};

var Address = styled.address`
    font-style: normal;
    margin-top: 1.5rem;

    p {
        margin: 0;
    }
`;

var ItemWrapper = styled.div`
    margin: 0.5em 0;
`;

var Link = styled.a`
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: black;
    padding: 0.2em 0;
`;

export default MenuInfoItem;
