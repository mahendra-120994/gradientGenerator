import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto';
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`

export const ColorContainer = styled.div`
  display: flex;
`

export const ColorControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`
export const Para = styled.p`
  color: #ffffff;
`

export const ColorCode = styled(Para)`
  color: #ffffff;
  font-size: 16px;
`
export const InputL = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const InputR = styled(InputL)`
  margin-left: 5px;
`

export const Button = styled.button`
  color: #1e293b;
  font-size: 16px;
  background-color: #00c9b7;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`
