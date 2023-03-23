import React, { useState, useEffect, useRef } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components"

import { InputContainer, TaskInput } from "./AddTask.style";
import { Task, ThemeProps} from '../../types'
import { lightTheme, darkTheme } from '../../styles/theme'

import { baseUrl } from "../../config";

import axios from "axios";


const AddTask = ({ theme }: ThemeProps) => {
  const [form, setForm] = useState({name: ''})
  const [errorData, setErrorData] = useState({name: ''})  
  const [inputKey, setInputKey] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const refreshContainer = () => {
    const inputContainer = document.getElementById('input-container');
    if (inputContainer) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  }
  
  useEffect(() => {
    refreshContainer()
  }, [form])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let isValid = true
    if (Object.values(setForm).some((val) => !val)) {
      isValid = false
    }

    if(!isValid) {
      alert('Task name could not be empty')
      return
    }

    try {
      const response = await axios.post(`${baseUrl}/users/tasks`, form)
      setForm({name: ''})
      setInputKey(inputKey + 1)
    } catch (error: any) {
      console.log(error.response.data)
      setErrorData(error.response.data.errors)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && form.name !== '') {
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
      <InputContainer id="input-container">
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <TaskInput key={inputKey} placeholder="Create a new todo..." onChange={handleChange} onSubmit={handleSubmit} onKeyDown={handleKeyDown} ref={inputRef} />
      </InputContainer>
    </ThemeProvider>
  )
}

export default AddTask
