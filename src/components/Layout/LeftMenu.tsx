import { FC } from 'react'
import { Menu } from 'antd'
import { MenuItem, StyledIcon, StyledLink } from './styles'

const menuItems = [
  {
    title: 'Search',
    icon: 'search',
    route: '/search',
  },
  {
    title: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    title: 'Tv Shows',
    icon: 'tv-shows',
    route: '/tv-shows',
  },
  {
    title: 'Movies',
    icon: 'movies',
    route: '/movies',
  },
  {
    title: 'Genres',
    icon: 'genres',
    route: '/genres',
  },
  {
    title: 'Watch Later',
    icon: 'watch-later',
    route: '/watch-later',
  },
]

type Props = {
  collapsed: boolean
}
const LeftMenu: FC<Props> = ({ collapsed }) => {
  return (
    <Menu theme='dark' defaultSelectedKeys={['Home']} mode='vertical'>
      {menuItems.map((item) => (
        <MenuItem
          $collapsed={collapsed}
          key={item.title}
          icon={<StyledIcon src={`/assets/icons/${item.icon}.png`} alt={item.title} />}
        >
          <StyledLink to={`${item.route}`}>{item.title}</StyledLink>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default LeftMenu
