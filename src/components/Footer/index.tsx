import { FooterContainer, FooterSection, FooterLinks, FooterLink, Copyright, CopyrightContainer, InformationContainer, ContactBox } from "./styles";

export const FooterPage = () => {
  return (
    <>
      <FooterContainer>
        <InformationContainer>
          <FooterSection>
            <h3>Flora Encantada</h3>
            <p>Junte-se a nós na proteção da natureza!</p>
          </FooterSection>

          <FooterSection>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/contact">Contato</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <ContactBox>
              <h4>Contato</h4>
              <p>Email: contato@floraencantada.org</p>
              <p>Telefone: +55 (XX) XXXX-XXXX</p>
            </ContactBox>
          </FooterSection>
        </InformationContainer>

        <CopyrightContainer>
          <Copyright>
            © 2025 Flora Encantada. Todos os direitos reservados.
          </Copyright>
        </CopyrightContainer>
      </FooterContainer>
    </>
  );
};
