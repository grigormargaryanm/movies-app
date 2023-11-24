import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Layout, Typography, Menu } from 'antd'

const { Content, Sider } = Layout
const { Text } = Typography
const { Item } = Menu

const menuItemTextStyle = css`
  color: #fff !important;
  font-size: 28px;
`
export const LayoutWrapper = styled(Layout)`
  position: absolute;
`

export const StyledLink = styled(Link)`
  ${menuItemTextStyle};
`

export const UserName = styled(Text)`
  ${menuItemTextStyle};
  margin-left: 12px;
`

export const MenuWrapper = styled.div<{
  $collapsed: boolean
}>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 60%;

  &&& {
    .ant-menu-item-selected {
      background: #232a3f;
      width: ${(props) => props.$collapsed && '68px'};
      height: ${(props) => props.$collapsed && '68px'};
      border-radius: ${(props) => props.$collapsed && '50%'};
      font-weight: bold;
    }
  }
`

export const MenuItem = styled(Item)<{ $collapsed: boolean }>`
  && {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: ${(props) => props.$collapsed && 'center'};
    padding-inline: ${(props) => props.$collapsed && '0'};

    .ant-menu-title-content {
      display: ${(props) => (props.$collapsed ? 'none' : 'block')} !important;
    }
  }
`

export const StyledIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 20px;
`

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`

export const StyledText = styled(Text)`
  color: gray;
  padding-left: 24px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
`
export const StyledSidebar = styled(Sider)`
  && {
    box-sizing: content-box;
    height: 100vh;
    background: #000;
    min-width: 132px !important;
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    box-shadow: ${(props) => !props.collapsed && '155px 0px 88px 8px rgba(0,0,0,0.67)'};

    > div:first-child {
      display: flex;
      flex-direction: column;
    }

    .ant-menu-vertical {
      background: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 20px;
    }
  }
`
export const ContentWrapper = styled(Content)`
  padding-left: 132px;
`

export const Profile = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
`
