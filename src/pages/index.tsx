import { useState } from 'react'
import Slider, { ItemsProps } from '@components/Slider'
import { NextPage } from 'next'
import styled from 'styled-components'

const Iphone = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  box-shadow: 0 0 0 20px black;
  border-radius: 20px;
`

const items: ItemsProps[] = [
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
]

const IndexPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  console.log(activeIndex)

  return (
    <main>
      <Iphone>
        <Slider setActiveIndex={setActiveIndex} items={items} />
      </Iphone>
    </main>
  )
}
export default IndexPage
