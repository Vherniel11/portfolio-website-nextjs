import styled from 'styled-components';
import Divider from '../../shared/divider/Divider.styled';

const MenuInfoTitle = () => {
    return (
        <>
            <Title>More info</Title>
            <Divider />
        </>
    );
};

var Title = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.25rem 0;
`;

export default MenuInfoTitle;
