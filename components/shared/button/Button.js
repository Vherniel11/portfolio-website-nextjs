import styled from 'styled-components';

var Button = styled.div`
    a,
    button {
        height: ${(props) => (props.height ? props.height : '')};
        display: inline-block;
        padding: ${(props) => props.padding};
        font-size: ${(props) => props.fontSize};
        background: black;
        color: white;
        text-decoration: none;
        font-weight: 700;
        line-height: auto;
    }
`;

export default Button;
