import { Imagem, Titulo, Precos } from './styles'
import bannerIMg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerIMg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <s>R$250,00</s> <br />
          Por apenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique para aproveitar a oferta."
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
