import React, { useState, useEffect } from 'react'
import styled, { DefaultTheme, ThemeProvider } from "styled-components"

import { Task, ThemeProps } from '../../types'

import { lightTheme, darkTheme } from '../../styles/theme'
import { List, ListItem } from './ListOfTasks.style'

import BottomMenu from './BottomMenu'


const ListOfTasks = ({ theme }: ThemeProps) => {
// localhost:5000/api/users/tasks

  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/users/tasks')
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <List>
          {tasks.sort((a, b) => a.id - b.id).map(item => {
              return (
                <>
                  <ListItem key={item.id}>
                    <div className='circle-container'>
                      <div className='cicrle'></div>
                    </div>
                    <div className='text-container'>
                      <p>{item.name}</p>
                    </div>
                    <div className='remove-container'>
                      <div className='remove'></div>
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