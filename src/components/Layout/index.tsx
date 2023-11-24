import { useState, ReactNode, FC } from 'react'
import { Avatar } from 'antd'
import LeftMenu from './LeftMenu'
import {
  LayoutWrapper,
  ContentWrapper,
  StyledSidebar,
  MenuWrapper,
  MenuFooter,
  StyledText,
  UserName,
  Profile,
} from './styles'
interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleMouseEnter = (): void => {
    setCollapsed(false)
  }
  const handleMouseLeave = (): void => {
    setCollapsed(true)
  }

  return (
    <>
      <LayoutWrapper>
        <StyledSidebar
          collapsed={collapsed}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width={328}
        >
          <MenuWrapper $collapsed={collapsed}>
            {!collapsed && (
              <Profile>
                <Avatar src='assets/user.jpeg' size={64} />
                <UserName>Daniel</UserName>
              </Profile>
            )}
            <LeftMenu collapsed={collapsed} />
          </MenuWrapper>
          {!collapsed && (
            <MenuFooter>
              <StyledText>LANGUAGE</StyledText>
              <StyledText>GET HELP</StyledText>
              <StyledText>EXIT</StyledText>
            </MenuFooter>
          )}
        </StyledSidebar>
      </LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}
export default Layout
