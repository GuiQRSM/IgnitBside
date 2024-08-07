import styled  from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
width: 46px;
height: 55px;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 36
}))`
flex: -1;
`;