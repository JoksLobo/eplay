import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <s>{parseToBrl(game.prices.old)}</s> <br />
            Por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar a oferta."
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
