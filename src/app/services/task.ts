import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({ title, completed: false });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  getTaskCount(): number {
    return this.tasks.length;
  }
}

