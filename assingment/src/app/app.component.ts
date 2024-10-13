import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, HomePageComponent, TaskListComponent],
  templateUrl: './app.component.html',
  // template:'<h2>hi</h2>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
