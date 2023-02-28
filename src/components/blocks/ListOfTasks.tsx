import React, { useState, useEffect, useRef } from 'react'
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { baseUrl } from '../../config'

import { Task, ThemeProps } from '../../types'
import { lightTheme, darkTheme } from '../../styles/theme'
import { List, ListItem } from './ListOfTasks.style'

import BottomMenu from './BottomMenu'
import removeTask from '../functionalComponents/handleRemoveTask'
import AddTask from '../elements/AddTask'

const ListOfTasks = ({ theme }: ThemeProps) => {
// localhost:5000/api/users/tasks

  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null);


  // const refreshContainer = () => {
  //   const inputContainer = document.getElementById('list-container');
  //   if (inputContainer) {
  //     setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 500);
  //   }
  // }


  const fetchTasks = async () => {
    try {
      const response = await fetch(`${baseUrl}/users/tasks`)
      const data = await response.json()
      setTasks(data)
      setError(null)
    } catch (error: any) {
      setError(error)
    }
  }

  if (!tasks) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleRemoveClick = async (taskId: number) => {
    removeTask(taskId, tasks, setTasks, setError);
  }

  return (
    <>
      <ThemeProvider theme={theme}>        
        <List id="list-container">
          {tasks.sort((a, b) => a.id - b.id).map(item => {
              return (
                <>
                  <ListItem height={75} key={item.id}>
                    <div className='circle-container'>
                        <div className='circle'></div>
                    </div>
                    <div className='text-container'>
                      <p>{item.name}</p>
                    </div>
                    <div className='remove-container'>
                      <div className='remove' onClick={() => {
                        handleRemoveClick(item.id)
                      }}></div>
                    </div>
                  </ListItem>
                </>
              )
            })
          }
        </List>
        <BottomMenu theme={theme} tasks={tasks} />
      </ThemeProvider>
    </>
  )
}

export default ListOfTasks