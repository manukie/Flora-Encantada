import { HeaderPage } from "../../components/Header";
import { FooterPage } from "../../components/Footer";
import { StyledButton1, StyledButton2 } from "../../styles/Buttons";
import { AboutUsItem, AboutUsSection, InformativeSection, LeftSideItem, LeftSideSection, RightSideItem, RightSideList, RightSideSection } from "./styles";

export const Home = () => {

    return (
      <>
      <HeaderPage>
      </HeaderPage>

        <AboutUsSection>
          <AboutUsItem>
            <h1>Preservando a flora brasileira</h1>
          </AboutUsItem>
          <AboutUsItem>
            <p>A biodiversidade do Brasil é uma das mais ricas do mundo, mas também uma das mais ameaçadas. Nossa missão é conscientizar e promover ações concretas para proteger as riquezas naturais do país.</p>
          </AboutUsItem>
          <AboutUsItem>
            <StyledButton1>Saiba Mais</StyledButton1>
          </AboutUsItem>
        </AboutUsSection>
  
        <InformativeSection>
          <LeftSideSection>
            <LeftSideItem>
              <h2>Nossa Missão</h2>
            </LeftSideItem>
            <LeftSideItem>
              <p>A Flora Encantada busca preservar e restaurar ecossistemas brasileiros, promovendo educação ambiental, reflorestamento e apoio a comunidades locais que dependem da natureza para sobreviver.</p>
            </LeftSideItem>
          </LeftSideSection>
  
          <RightSideSection>
            <RightSideItem>
            <h2>Projetos em Destaque</h2>
            </RightSideItem>
            <RightSideList>
              <ul>
                <li>
                  <h3>Reflorestamento Amazônico</h3>
                  <p>Nosso projeto visa plantar milhares de árvores na Amazônia, restaurando áreas degradadas e protegendo espécies nativas ameaçadas.</p>
                </li>
                <li>
                  <h3>Preservação do Cerrado</h3>
                  <p>Trabalhamos para reduzir o desmatamento do Cerrado e incentivar práticas sustentáveis que garantam a sobrevivência desse ecossistema único.</p>
                </li>
                <li>
                  <h3>Proteção da Mata Atlântica</h3>
                  <p>Parcerias com comunidades locais e empresas têm ajudado a recuperar trechos da Mata Atlântica, garantindo a preservação da fauna e flora.</p>
                </li>
              </ul>
            </RightSideList>
        </RightSideSection>
      </InformativeSection>
  
        <section>
          <h2>Como Contribuir</h2>
          <p>Existem várias formas de apoiar nossa causa: você pode fazer doações diretas, tornar-se voluntário em nossas iniciativas ou até mesmo divulgar nossas ações em suas redes sociais.</p>
          <StyledButton2>Doe Agora</StyledButton2>
        </section>
  
        <section>
          <h2>O que dizem sobre nós</h2>
          <blockquote>
            "A Flora Encantada mudou minha perspectiva sobre o meio ambiente. Através de suas iniciativas, aprendi a importância da preservação e pude contribuir diretamente para a recuperação de áreas degradadas." - João Silva
          </blockquote>
        </section>
  
        <section>
          <h2>Últimas Notícias</h2>
          <p>Fique por dentro das últimas novidades sobre preservação ambiental, mudanças climáticas e ações da Flora Encantada.</p>
        </section>
  
        <section>
          <h2>Nossos Parceiros</h2>
          <p>Trabalhamos em conjunto com diversas ONGs, empresas e governos para tornar a preservação ambiental uma prioridade global.</p>
        </section>
  
        <section>
          <h2>Receba nossas notícias</h2>
          <p>Inscreva-se em nossa newsletter para receber informações sobre nossos projetos, eventos e como você pode ajudar na preservação da flora brasileira.</p>
          <input type="email" placeholder="Digite seu e-mail" />
          <button>Inscrever-se</button>
        </section>
  
        <section>
          <h2>Acompanhe-nos</h2>
          <p>Nos siga nas redes sociais para acompanhar nossas ações, compartilhar informações e se envolver com nossa causa ambiental.</p>
        </section>

        <FooterPage>
        </FooterPage>
      </>
    );
  };
  
  export default Home;
  