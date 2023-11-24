import styled from 'styled-components'
import { Spin } from 'antd'

export const StyledSpin = styled(Spin)`
  position: absolute;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #000;
  opacity: 0.8;
  z-index: 1;
`
