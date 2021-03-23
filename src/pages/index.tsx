import { useState } from 'react'
import Slider from '@components/Slider'
import { NextPage } from 'next'
import styled from 'styled-components'

const Iphone = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background-color: #e4f1fa;
  box-shadow: 0 0 0 20px black;
  border-radius: 20px;
  overflow: hidden;
`

const LightEffects = styled.div<{ online: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -40px;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 500px 200px
      ${({ online }) => (online ? '#5fd3d7' : '#515273')};
    transition: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -40px;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 500px 200px
      ${({ online }) => (online ? '#79e07c' : '#f53a68')};
    transition: 0.5s;
  }
`

type Items = {
  title: string
  description: string
  status: 'online' | 'busy'
}

const IndexPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [items] = useState<Items[]>([
    {
      title: 'Daewoo Lanos',
      description: '$9,99 for 5 min, after $0,99 min',
      status: 'online',
    },
    {
      title: 'Daewoo Lanos',
      description: '$9,99 for 5 min, after $0,99 min',
      status: 'busy',
    },
    {
      title: 'Daewoo Lanos',
      description: '$9,99 for 5 min, after $0,99 min',
      status: 'online',
    },
    {
      title: 'Daewoo Lanos',
      description: '$9,99 for 5 min, after $0,99 min',
      status: 'busy',
    },
  ])

  console.log(activeIndex)

  return (
    <main>
      <Iphone>
        <LightEffects online={items[activeIndex].status === 'online'} />
        <Slider setActiveIndex={setActiveIndex} items={items} />
      </Iphone>
    </main>
  )
}
export default IndexPage
