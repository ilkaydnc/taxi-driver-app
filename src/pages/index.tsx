import { useState } from 'react'
import Slider from '@components/Slider'
import { NextPage } from 'next'
import styled from 'styled-components'

const Iphone = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  box-shadow: 0 0 0 20px black;
  border-radius: 20px;
`

const IndexPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  console.log(activeIndex)

  return (
    <main>
      <Iphone>
        <Slider setActiveIndex={setActiveIndex} />
      </Iphone>
    </main>
  )
}
export default IndexPage
