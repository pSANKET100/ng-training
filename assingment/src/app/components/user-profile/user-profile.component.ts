import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Ritesh"
  age = 25
  place = "forest"
  isBtnDisabled = false

  onChange() {
    document.write("Called Sucessfully!")
  }
}
