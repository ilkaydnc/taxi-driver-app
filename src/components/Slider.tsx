import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  A11y,
  Keyboard,
  Navigation,
  Controller,
  Autoplay,
} from 'swiper'

import Card, { CardProps } from '@components/Card'

SwiperCore.use([Navigation, Keyboard, A11y, Controller, Autoplay])

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 2rem 0;
  overflow: hidden;
`

export interface ItemsProps extends CardProps {
  status: 'online' | 'busy'
}

interface SliderProps {
  setActiveIndex: { (v: number): void }
  items: ItemsProps[]
}

const Slider = ({ setActiveIndex, items }: SliderProps) => {
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.4}
        centeredSlides
        keyboard
        onSlideChange={e => setActiveIndex(e.realIndex)}
      >
        {items.map(({ title, description, status }, index) => (
          <SwiperSlide key={index} onProgress={e => console.log(e)}>
            <Card
              title={title}
              description={description}
              online={status === 'online'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
