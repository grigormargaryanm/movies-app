import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { StyledSpin } from './styles'

const Spinner: FC = () => {
  return <StyledSpin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
}

export default Spinner
