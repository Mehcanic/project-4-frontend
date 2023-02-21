import React, { useState, useEffect } from 'react'

import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from '../../styles/theme'

type ListProps = {
  theme: DefaultTheme;
}

type Task = {
  id: number;
  list_of_tasks_id: number;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  date: string;
  time: string;
}

const List = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.accentLight};
  width: 540px;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;

` 
const ListItem = styled.div`
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  width: 492px;
  min-height: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  .item-container {
    margin: 12px 0;

      .cicrle {
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin-left: 24px;
      }

      p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
        max-width: 400px;
        margin: 0 24px;
      }

      .remove {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin-right: 24px;
      }
}
`

const ListOfTasks = ({ theme }: ListProps) => {
// localhost:5000/api/users/tasks

  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/users/tasks')
      const data = await response.json()
      console.log(data)
      setTasks(data)
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
              <ListItem key={item.id}>
                <div className='item-container'>
                  <div className='cicrle'></div>
                </div>
                <div className='item-container'>
                  <p>{item.name}</p>
                </div>
                <div className='item-container'>
                  <div className='remove'></div>
                </div>
              </ListItem>
            )
          })
          }
        </List>
      </ThemeProvider>
    </>
  )
}

export default ListOfTasks