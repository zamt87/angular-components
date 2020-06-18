import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'Taste delicious!' },
    {
      title: 'What is the coolest car?',
      content: 'Most definitely one you are not driving.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
