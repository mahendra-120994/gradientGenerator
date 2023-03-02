import {
  DirectionContainer,
  DirectionList,
  DirectionListItem,
  Button,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientData} = props

  const changeDirection = value => {
    const {chooseDirection} = props
    chooseDirection(value)
  }

  return (
    <DirectionContainer>
      <DirectionList>
        {gradientData.map(e => {
          const {direction} = props
          return (
            <DirectionListItem key={e.directionId}>
              <Button
                onClick={() => changeDirection(e.value)}
                isActive={direction === e.value}
              >
                {e.displayText}
              </Button>
            </DirectionListItem>
          )
        })}
      </DirectionList>
    </DirectionContainer>
  )
}
export default GradientDirectionItem
