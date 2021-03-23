import { useState } from 'react'
import Slider from '@components/Slider'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  console.log(activeIndex)

  return (
    <main>
      <Slider setActiveIndex={setActiveIndex} />
    </main>
  )
}
export default IndexPage
