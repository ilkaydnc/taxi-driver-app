import anime from 'animejs'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Check from './icons/Check'
import Close from './icons/Close'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Label = styled.span<{ active: boolean }>`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ active }) => (active ? '#2b2b2b' : '#a4a4a4')};
  margin: 16px 0;
  transition: 0.5s;
`

const SwitchContainer = styled.div`
  position: relative;
  height: 100%;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Button = styled.button<{ active: boolean; color: 'success' | 'danger' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  background-color: transparent;
  padding: 0;
  width: 100px;
  height: 100px;
  border: 50px;
  font-size: 32px;
  color: ${({ active, color }) =>
    active ? (color === 'success' ? '#79e07c' : '#f53a68') : '#a4a4a4'};
  transition: 0.5s;
  cursor: pointer;
  z-index: 100;
`

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 3px;
  width: 94px;
  height: 94px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3);
  z-index: 50;
`

interface SwitchProps {
  online: boolean
  changeStatus: { (status: boolean): void }
}

const setCircleOnline = (prevStatus: boolean, currentStatus: boolean) => {
  if (prevStatus === currentStatus) {
    anime({
      targets: '#switch-circle',
      translateY: 3,
      easing: 'easeOutElastic(1, .8)',
    })
  } else {
    anime({
      targets: '#switch-circle',
      translateY: [132, 3],
      scaleX: [0.4, 1],
      scaleY: [1.4, 1],
      easing: 'easeOutElastic(1, .8)',
    })
  }
}

const setCircleBusy = (prevStatus: boolean, currentStatus: boolean) => {
  if (prevStatus === currentStatus) {
    anime({
      targets: '#switch-circle',
      translateY: 132,
      easing: 'easeOutElastic(1, .8)',
    })
  } else {
    anime({
      targets: '#switch-circle',
      translateY: [3, 132],
      scaleX: [0.4, 1],
      scaleY: [1.4, 1],
      easing: 'easeOutElastic(1, .8)',
    })
  }
}

const Switch = ({ online, changeStatus }: SwitchProps) => {
  const [prevStatus, setPrevStatus] = useState(online)
  useEffect(() => {
    if (online) {
      setCircleOnline(prevStatus, online)
    } else {
      setCircleBusy(prevStatus, online)
    }

    setPrevStatus(online)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online])
  return (
    <Container>
      <Label active={online}>Online</Label>
      <SwitchContainer>
        <ButtonsWrapper>
          <Button
            active={online}
            onClick={() => changeStatus(true)}
            color="success"
          >
            <Check />
          </Button>
          <Button
            active={!online}
            onClick={() => changeStatus(false)}
            color="danger"
          >
            <Close />
          </Button>
        </ButtonsWrapper>
        <Circle id="switch-circle" />
        <img src="/images/switch.png" alt="Status Changer" />
      </SwitchContainer>
      <Label active={!online}>Busy</Label>
    </Container>
  )
}

export default Switch
