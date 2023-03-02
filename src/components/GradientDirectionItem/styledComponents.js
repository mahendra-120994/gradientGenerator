import styled from 'styled-components'

export const DirectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`

export const DirectionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const DirectionListItem = styled.li`
  list-style: none;
  margin: 5px;
`
export const Button = styled.button`
  color: #334155;
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 80px;
  cursor: pointer;
  background-color: '#ffffff';
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
