import { Component } from '@angular/core';

@Component({
  selector: 'app-bell-notification',
  templateUrl: './bell-notification.component.html',
  styleUrls: ['./bell-notification.component.css']
})
export class BellNotificationComponent {
  notifications: any[] = [
    {
      "id": 1,
      "image": "assets/img/users/user-1.jpg",
      "title": "New update available",
      "date": "2023-12-23T12:00:00Z"
    },
    {
      "id": 2,
      "image": "assets/img/users/user-2.jpg",
      "title": "You have a new message",
      "date": "2023-12-24T15:30:00Z"
    },
    {
      "id": 3,
      "image": "assets/img/users/user-3.jpg",
      "title": "Event reminder: Meeting at 2 PM ",
      "date": "2023-12-25T14:00:00Z"
    }
  ];
}
