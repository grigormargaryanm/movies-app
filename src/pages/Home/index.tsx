import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { Carousel } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import ReactPlayer from 'react-player'
import { IMovies } from '../../types/IMovies'
import { Spinner } from '../../components'
import { addSeenIds, getSeenIds, sortByDate } from './utils'
import {
  FeaturedImg,
  FeaturedInfo,
  FeaturedWrapper,
  StyledText,
  MoreInfo,
  ButtonsWrapper,
  TendingNowImg,
  Wrapper,
} from './styles'

const Home: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [showMovie, setShowMovie] = useState<boolean>(false)
  const [featured, setFeatured] = useState<IMovies>({} as IMovies)
  const [trendingNow, setTrendingNow] = useState<IMovies[]>([])
  const handleData = async (): Promise<void> => {
    try {
      const {
        data: { Featured, TendingNow },
      } = await axios.get('data.json')
      setFeatured(Featured)
      const seenIds = getSeenIds()
      if (seenIds.length) {
        const seenMovies: IMovies[] = []
        const notSeenMovies: IMovies[] = []
        TendingNow.forEach((item: IMovies) => {
          if (seenIds.includes(item.Id)) {
            seenMovies.push(item)
          } else {
            notSeenMovies.push(item)
          }
        })
        setTrendingNow([...seenMovies, ...notSeenMovies])
      } else {
        sortByDate<IMovies>(TendingNow)
        setTrendingNow(TendingNow)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  const handleShowMovie = (movie: IMovies): void => {
    setShowMovie(false)
    addSeenIds(movie.Id)
    setFeatured(movie)
    setTimeout(() => {
      setShowMovie(true)
    }, 2000)
  }

  useEffect(() => {
    handleData()
  }, [])

  const convertSeconds = (duration: string): string => {
    const seconds = Number(duration)
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours) {
      return `${hours} h  ${minutes} m`
    } else {
      return `${minutes} m`
    }
  }

  return (
    <Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showMovie ? (
            <ReactPlayer url={featured.VideoUrl} height={680} width='100%' playing={true} />
          ) : (
            <FeaturedWrapper $imgSrc={featured?.CoverImage}>
              <FeaturedInfo>
                <StyledText $margin0>{featured?.Category?.toUpperCase()}</StyledText>
                <FeaturedImg src={`assets/${featured.TitleImage}`} alt={featured.TitleImage} />
                <div>
                  <StyledText $colorWhite>{featured?.ReleaseYear}</StyledText>
                  <StyledText $colorWhite>{featured?.MpaRating}</StyledText>
                  <StyledText $margin0 $colorWhite>
                    {convertSeconds(featured?.Duration)}
                  </StyledText>
                </div>
                <StyledText $colorWhite>{featured?.Description}</StyledText>
                <ButtonsWrapper>
                  <MoreInfo $play icon={<CaretRightOutlined />} type='primary'>
                    Play
                  </MoreInfo>
                  <MoreInfo type='primary'>More Info</MoreInfo>
                </ButtonsWrapper>
              </FeaturedInfo>
            </FeaturedWrapper>
          )}

          <StyledText $colorWhite>Trending Now</StyledText>
          <Carousel slidesToShow={8} dots={false} swipeToSlide draggable autoplay swipe>
            {trendingNow.map((tending) => (
              <TendingNowImg
                src={`assets/${tending.CoverImage}`}
                alt={tending.CoverImage}
                key={tending.Id}
                onClick={() => handleShowMovie(tending)}
              />
            ))}
          </Carousel>
        </>
      )}
    </Wrapper>
  )
}

export default Home
