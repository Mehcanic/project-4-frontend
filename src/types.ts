import { DefaultTheme } from 'styled-components';

export type ThemeProps = {
  theme: DefaultTheme;
  tasks: Array<Task>;
  onTaskAdded?: () => void;
}

export type Task = {
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



