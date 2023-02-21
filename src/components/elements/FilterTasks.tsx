import React, { useState, useEffect } from 'react'

type FilterTaskProps = {
  action: string
}

const FilterTasks = (props: String) => {
// localhost:5000/api/users/search_tasks?description=task
  const [action, setAction] = useState('')
  const [text, setText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // create function that will use api endpoint on click
  // to filter tasks by all, active, completed

  const filter = async (status: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/users/search_tasks?status=${status}`)
      const data = await response.json()
      setAction(data)
      setError(null)
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleClick = () => {
    if (action === 'all') {
      console.log(action)
      setText('All')
    } else if (action === 'active') {
      console.log(action)
      setText('Active')
    } else if (action === 'completed') {
      console.log(action)
      setText('Completed')
    }

  }


  if (error) {
    return <div>Error: {error}</div>
  }


  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default FilterTasks