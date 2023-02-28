import React, { useState } from "react";
import { baseUrl } from "../../config";

import { InputContainer, TaskInput } from "./AddTask.style";
import { Task, ThemeProps } from '../../types'
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from '../../styles/theme'

import axios from "axios";

const AddTask = ({ theme }: ThemeProps) => {
  const [form, setForm] = useState({name: ''})
  const [errorData, setErrorData] = useState({name: ''})  

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let isValid = true
    if (Object.values(setForm).some((val) => !val)) {
      isValid = true
    }

    if(!isValid) {
      alert('Task name could not be empty')
      return
    }

    try {
      const response = await axios.post(`${baseUrl}/users/tasks`, form)
      setForm({name: ''})
      // onTaskAdded()
    } catch (error: any) {
      console.log(error.response.data)
      setErrorData(error.response.data.errors)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()
    if (inputValue === "") {
      return;
    }
    setForm({ ...form, name: inputValue })
  }

  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <div className='circle-container'>
            <div className='circle'></div>
        </div>
        <TaskInput placeholder="Create a new todo..." onChange={handleChange} onSubmit={handleSubmit} onKeyDown={handleKeyDown}  />
      </InputContainer>
    </ThemeProvider>
  )
}

export default AddTask