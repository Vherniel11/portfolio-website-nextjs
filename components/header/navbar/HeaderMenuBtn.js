import styled from 'styled-components';

const HeaderMenuBtn = ({ toggle, isMenuOpen }) => {
    return (
        <Button onClick={toggle}>
            <Hamburger viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen == true ? (
                    <path d="M20.4751 22.368L16.0111 17.904L11.5471 22.368L10.1231 20.928L14.5871 16.48L10.1231 12.032L11.5471 10.608L16.0111 15.056L20.4591 10.608L21.8831 12.032L17.4191 16.48L21.8831 20.928L20.4751 22.368Z" />
                ) : (
                    <>
                        <rect x="6" y="8" width="20" height="2" />
                        <rect x="6" y="22" width="20" height="2" />
                        <rect x="6" y="15" width="20" height="2" />
                    </>
                )}
            </Hamburger>
        </Button>
    );
};

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

    @media (min-width: 48rem) {
        width: 3.125rem;
        height: 3.125rem;
        margin-left: 2rem;
    }

    @media (min-width: 48rem) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

var Hamburger = styled.svg`
    rect {
        fill: black;
    }
`;

export default HeaderMenuBtn;
