import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = [
    { name: 'John Doe', bio: 'Software Engineer' },
    { name: 'Jane Smith', bio: 'Product Manager' },
    { name: 'Bob Johnson', bio: 'UI Designer' },
    { name: 'Alice Williams', bio: 'Data Analyst' }
  ];
}
