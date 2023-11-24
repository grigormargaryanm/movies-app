import styled from 'styled-components'
import { Button, Typography } from 'antd'

const { Text } = Typography
export const FeaturedWrapper = styled.div<{ $imgSrc: string }>`
  background-image: url(${(props) => props.$imgSrc && `assets/${props.$imgSrc}`});
  height: 680px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
`

export const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
`
export const FeaturedImg = styled.img`
  width: 560px;
  margin: 16px 0;
`
export const TendingNowImg = styled.img`
  &&& {
    width: 170px !important;
    cursor: pointer;
    height: 238px;
    object-fit: cover;
  }
`
export const ButtonsWrapper = styled.div`
  margin-top: 36px;
`
export const MoreInfo = styled(Button)<{ $play: boolean }>`
  background: ${(props) => (props.$play ? '#fff' : '#1921c7')};
  color: ${(props) => (props.$play ? '#000' : '#fff')};
  margin-right: 16px;
  height: 60px;
  border-radius: 26px;
  width: 180px;
  font-size: 16px;
  font-weight: bold;
  &&&:hover {
    background: ${(props) => (props.$play ? '#fff' : '#1921c7')};
    color: ${(props) => (props.$play ? '#000' : '#fff')};
    opacity: 0.8;
  }
`

export const StyledText = styled(Text)<{ $colorWhite?: boolean; $margin0?: boolean }>`
  color: ${(props) => (props.$colorWhite ? '#fff' : 'gray')};
  font-size: 20px;
  font-weight: bold;
  margin-right: ${(props) => (props.$margin0 ? 0 : '12px')};
`

export const Wrapper = styled.div`
  padding-left: 12px;
  position: relative;
  min-height: 100vh;
  .slick-slide {
    //margin-right: 16px;
  }
`
