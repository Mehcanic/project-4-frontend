import React, { useState } from 'react';
import { Task } from "../../types"

interface NewTask {
  name: string;
}

const createTask = async (taskName: NewTask): Promise<Task> => {
  try {
    const response = await fetch('/api/users/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: taskName }),
    });

    if (response.ok) {
      const newTask = await response.json();
      return newTask;
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default createTask