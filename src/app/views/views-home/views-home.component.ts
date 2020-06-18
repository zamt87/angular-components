import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items = [
    {
      images: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      images: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Is is an awesome dresser.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
