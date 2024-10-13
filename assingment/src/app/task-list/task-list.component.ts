import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskServiceComponent } from '../task-service/task-service.component';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})


export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskServiceComponent) {}

  [x: string]: any;
  tasks: Task[] = [];

  ngOnInit() {
    this.loadTasks();
  }


  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
  // deleteTask(id: number): Observable<boolean> {
  //   return this.taskService.deleteTask(id);
  // }

}
