import { Task } from '../../types';
import { baseUrl } from '../../config';

const removeTask = async (taskId: number, tasks: Task[], setTasks: (tasks: Task[]) => void, setError: (error: string | null) => void) => {
  try {
    await fetch(`${baseUrl}/users/tasks/${taskId}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => task.id !== taskId))
  } catch (error) {
    setError(error as string | null)
  }
}

export default removeTask;
