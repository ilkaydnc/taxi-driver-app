import Card from '@components/Card'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <main>
      <Card
        title="Daewoo Lanos"
        description="$9,99 for 5 min, after $0,99 min"
        online
      />
      <Card
        title="Daewoo Lanos"
        description="$9,99 for 5 min, after $0,99 min"
      />
    </main>
  )
}
export default IndexPage
