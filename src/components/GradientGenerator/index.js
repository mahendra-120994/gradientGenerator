import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  CustomContainer,
  Heading,
  Para,
  ColorContainer,
  ColorControls,
  ColorCode,
  InputL,
  InputR,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    colorLeft: '#8ae323',
    colorRight: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  chooseColorOne = event => {
    this.setState({colorLeft: event.target.value})
  }

  chooseColorTwo = event => {
    this.setState({colorRight: event.target.value})
  }

  chooseDirection = direction => {
    this.setState({direction})
  }

  generateGradient = () => {
    const {direction, colorLeft, colorRight} = this.state
    this.setState({
      gradientValue: `to ${direction}, ${colorLeft}, ${colorRight}`,
    })
  }

  render() {
    const {direction, colorRight, colorLeft, gradientValue} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <CustomContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <GradientDirectionItem
            gradientData={gradientDirectionsList}
            chooseDirection={this.chooseDirection}
            direction={direction}
          />
          <Para>Pick the Colors</Para>
          <ColorContainer>
            <ColorControls>
              <ColorCode>{colorLeft}</ColorCode>
              <InputL
                type="color"
                value={colorLeft}
                onChange={this.chooseColorOne}
              />
            </ColorControls>
            <ColorControls>
              <ColorCode>{colorRight}</ColorCode>
              <InputR
                type="color"
                value={colorRight}
                onChange={this.chooseColorTwo}
              />
            </ColorControls>
          </ColorContainer>
          <Button onClick={this.generateGradient}>Generate</Button>
        </CustomContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
