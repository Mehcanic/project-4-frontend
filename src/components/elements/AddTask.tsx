import { InputContainer, TaskInput } from "./AddTask.style";
import { Task, ThemeProps } from '../../types'
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from '../../styles/theme'


const AddTask = ({ theme }: ThemeProps) => {

  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <div className='circle-container'>
            <div className='circle'></div>
        </div>
        <TaskInput placeholder="Create a new todo..." />
      </InputContainer>
    </ThemeProvider>
  )
}

export default AddTask