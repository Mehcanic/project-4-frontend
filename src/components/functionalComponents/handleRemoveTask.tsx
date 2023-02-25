import { Task } from '../../types';

const removeTask = async (taskId: number, tasks: Task[], setTasks: (tasks: Task[]) => void, setError: (error: string | null) => void) => {
  try {
    await fetch(`/api/users/tasks/${taskId}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => task.id !== taskId))
  } catch (error) {
    setError(error as string | null)
  }
}

export default removeTask;
