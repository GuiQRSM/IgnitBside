import { Container, Logo, BackIcon} from "./styles";
import logoimg from '@assets/logo.png';

export function Header() {
    return(
        <Container><BackIcon/><Logo source={logoimg}/></Container>
    );
}