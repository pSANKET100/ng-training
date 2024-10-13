// src/app/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task-service/task-service.component';
import { TaskServiceComponent } from '../task-service/task-service.component';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  editMode = false;
  currentTaskId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskServiceComponent
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['Not Started', Validators.required]
    });
  }

  ngOnInit() {}

  // Handle form submission to add or update task
  onSubmit() {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.editMode && this.currentTaskId) {
        const updatedTask: Task = { ...taskData, id: this.currentTaskId };
        this.taskService.updateTask(updatedTask);
        this.resetForm();
      } else {



        this.taskService.addTask(taskData);
        this.resetForm();
      }
    }
  }

  // Reset the form
  resetForm() {
    this.taskForm.reset({ status: 'Not Started' });
    this.editMode = false;
    this.currentTaskId = null;
  }

  // Edit an existing task
  editTask(task: Task) {
    this.editMode = true;
    this.currentTaskId = task.id;
    this.taskForm.patchValue(task);
  }
}
