import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  A11y,
  Keyboard,
  Navigation,
  Controller,
  Autoplay,
} from 'swiper'

import Card from '@components/Card'

SwiperCore.use([Navigation, Keyboard, A11y, Controller, Autoplay])

const Container = styled.div`
  width: 100%;
  height: 260px;
  padding: 2rem 0;
  margin-top: 100px;
  overflow: hidden;
`

const Slider = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.4}
        centeredSlides
        keyboard
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        onAnimationIteration={e => console.log(e)}
      >
        <SwiperSlide onProgress={e => console.log(e)}>
          <Card
            title="Daewoo Lanos"
            description="$9,99 for 5 min, after $0,99 min"
            online
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Daewoo Lanos"
            description="$9,99 for 5 min, after $0,99 min"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Daewoo Lanos"
            description="$9,99 for 5 min, after $0,99 min"
            online
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Slider
