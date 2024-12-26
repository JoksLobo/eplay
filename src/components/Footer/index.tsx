import * as S from './styles'

const CurrentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#sim"
            >
              Simulação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.FooterLink>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em Breve
            </S.FooterLink>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{CurrentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
    </div>
  </S.Container>
)

export default Footer
