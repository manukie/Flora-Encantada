
import { StyledButton1VARIANT } from '../../styles/Buttons';
import { HeaderContainer, Logo, Tagline, Nav, NavLink, Button } from './styles';

export const HeaderPage = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo>Flora Encantada</Logo>
        <Tagline>Protegendo a flora do Brasil</Tagline>
      </div>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">About Us</NavLink>
      </Nav>
      <StyledButton1VARIANT>Junte-se a nós</StyledButton1VARIANT>
    </HeaderContainer>
  );
};
