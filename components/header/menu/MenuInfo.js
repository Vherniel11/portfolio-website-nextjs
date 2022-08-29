import styled from 'styled-components';
import MenuInfoItem from './MenuInfoItems';
import MenuInfoTitle from './MenuInfoTitle';

const MenuInfo = () => {
    return (
        <MenuInfoWrapper>
            <MenuInfoTitle />
            <MenuInfoItem />
        </MenuInfoWrapper>
    );
};

var MenuInfoWrapper = styled.div`
    margin-top: 3.25rem;
`;

export default MenuInfo;
