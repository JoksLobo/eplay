import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description: 'teste',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['-10%', 'R$250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'teste',
    title: 'Star Wars',
    system: 'PS4/PS5',
    infos: ['-10%', 'R$250,00'],
    image: starWars
  },
  {
    id: 4,
    category: 'Ação/RPG',
    description: 'teste',
    title: 'The Legend of Zelda',
    system: 'Switch',
    infos: ['-10%', 'R$250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'teste',
    title: 'Resident Evil 4 Remake',
    system: 'Windows',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description: 'teste',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['-10%', 'R$250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description: 'teste',
    title: 'Star Wars',
    system: 'PS4/PS5',
    infos: ['-10%', 'R$250,00'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação/RPG',
    description: 'teste',
    title: 'The Legend of Zelda',
    system: 'Switch',
    infos: ['-10%', 'R$250,00'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
