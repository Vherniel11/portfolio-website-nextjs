import styled from 'styled-components';

const HeaderMenuBtn = ({ toggle }) => {
    return (
        <Button onClick={toggle}>
            <Hamburger
                width="30"
                height="30"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="8" width="20" height="2" />
                <rect x="6" y="22" width="20" height="2" />
                <rect x="6" y="15" width="20" height="2" />
            </Hamburger>
        </Button>
    );
};

function handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
}

var Button = styled.button`
    width: 2rem;
    height: 2rem;
    margin: 0;
    padding: 0;
    margin-left: 0.75rem;
    line-height: 0;
    border-color: lightgray;
    background-color: transparent;
    cursor: pointer;
`;

var Hamburger = styled.svg`
    rect {
        fill: black;
    }
`;

export default HeaderMenuBtn;
