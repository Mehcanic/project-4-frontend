import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from '../../styles/theme'

type ListProps = {
  theme: DefaultTheme;
}

const List = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 540px;
  height: auto;

`

const ListOfTasks = ({ theme }: ListProps) => {


  return (
    <>
      <ThemeProvider theme={theme}>
        <List />
      </ThemeProvider>
    </>
  )
}

export default ListOfTasks