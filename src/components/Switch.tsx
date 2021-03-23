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
`

interface SwitchProps {
  online: boolean
  changeStatus: { (status: boolean): void }
}

const Switch = ({ online, changeStatus }: SwitchProps) => {
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
        <img src="/images/switch.png" alt="Status Changer" />
      </SwitchContainer>
      <Label active={!online}>Busy</Label>
    </Container>
  )
}

export default Switch
