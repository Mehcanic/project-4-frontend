import React, { useState, useEffect } from 'react'
import { baseUrl } from '../../config'

import styled from 'styled-components'


type FilterTaskProps = {
  action: string
}


export const FilterButton = styled.a`
  

`

const FilterTasks = (props: FilterTaskProps) => {
// localhost:5000/api/users/search_tasks?description=task
  const [text, setText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)


  // create function that will use api endpoint on click
  // to filter tasks by all, active, completed

  const filter = async (status: String) => {
    try {
      const response = await fetch(`${baseUrl}/users/search_tasks?status=${status}`)
      const data = await response.json()
      setText(data)
      setError(null)
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleClick = () => { 
    if (props.action === 'all') {
      setText('All')
    } else if (props.action === 'active') {
      setText('Active')
    } else if (props.action === 'completed') {
      setText('Completed')
    }
  }

  useEffect(() => {
    filter(props.action)
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }


  return (
    <>
      <FilterButton onClick={handleClick} key={props.action}>{props.action}</FilterButton>
    </>
  )
}

export default FilterTasks