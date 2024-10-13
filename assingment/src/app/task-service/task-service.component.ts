import { Component, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-task-service',
  standalone: true,
  imports: [],
  templateUrl: './task-service.component.html',
  styleUrl: './task-service.component.css'
})

export class TaskServiceComponent {
  private tasks: Task[] = [];
  private nextId = 1;

  //method to get all tasks

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  //method to get a task
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

    // Method to update an existing task
    updateTask(task: Task): void {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    }

    // Method to delete a task by its ID
     deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }

      // Method to add a new task
  addTask(task: Omit<Task, 'id'>): Observable<Task> {
    const newTask = { ...task, id: this.nextId++ };
    this.tasks.push(newTask);
    return of(newTask);
  }
}


