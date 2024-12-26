import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: fightingGames, isLoading: isLoadingFighting } =
    useGetFightingGamesQuery()
  const { data: simGames, isLoading: isLoadingSim } = useGetSimGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFighting}
      />
      <ProductsList
        games={simGames}
        title="Simulação"
        background="gray"
        id="sim"
        isLoading={isLoadingSim}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
