import { Container, Logo } from "./styles";
import logoimg from '@assets/logo.png';
import { CaretLeft } from 'phosphor-react-native';

export function Header() {
    return(
        <Container><Logo source={logoimg}/></Container>
    );
}