import { InputContainer, TaskInput } from "./AddTask.style";
import { Task, ThemeProps } from '../../types'
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from '../../styles/theme'
import createTask from "../functionalComponents/CreateTask";

const AddTask = ({ theme }: ThemeProps) => {

  const handleCreateTask = async (task: Task) => {
    createTask(task);
  }

  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <div className='circle-container'>
            <div className='circle'></div>
        </div>
        <TaskInput placeholder="Create a new todo..." onClick={handleCreateTask}/>
      </InputContainer>
    </ThemeProvider>
  )
}

export default AddTask