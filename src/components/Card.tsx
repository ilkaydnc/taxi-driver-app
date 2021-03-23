import { HTMLProps } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 1rem 2rem;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`

const Image = styled.img`
  width: 100px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.span`
  margin: 0;
  font-size: 14;
  font-weight: 600;
  color: #727272;
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2b2b2b;
  border-radius: 4px;
  margin-top: 16px;

  & > div {
    padding: 4px 8px;
  }

  & > div:nth-child(1) {
    font-size: 14px;
    font-weight: 700;

    & > span {
      font-size: 18px;
      line-height: 18px;
    }
  }

  & > div:nth-child(2) {
    border-left: 1px solid #2b2b2b;
    font-weight: 700;

    & > div:nth-child(1) {
      font-size: 12px;
      line-height: 8px;
    }

    & > div:nth-child(2) {
      font-size: 10px;
      line-height: 8px;
    }
  }
`

interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string
  description: string
  online?: boolean
}

const Card = ({ title, description, online }: CardProps) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={online ? '/icons/online.svg' : '/icons/busy.svg'}
          alt={title}
        />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <InfoWrapper>
        <div>
          P<span>749</span>AT
        </div>
        <div>
          <div>78</div>
          <div>rus</div>
        </div>
      </InfoWrapper>
    </Container>
  )
}

export default Card
