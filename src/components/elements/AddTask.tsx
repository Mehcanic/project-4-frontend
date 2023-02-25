import { InputContainer, TaskInput } from "./AddTask.style";
import { ThemeProps } from "../../types";
import { DefaultTheme } from "styled-components";
import { CheckElement } from "./IconElement";

const AddTask = ({ theme }: ThemeProps) => {




  return (
    <InputContainer>
      <CheckElement />
      <TaskInput placeholder="Create a new todo..." />
    </InputContainer>
  )
}

export default AddTask