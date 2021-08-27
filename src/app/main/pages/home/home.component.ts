import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoriesRender: any[] = [
    {
      picture: `../../../../assets/img/frontend.jpg`,
      title: 'Front end',
    },
    {
      picture: `../../../../assets/img/backend.jpg`,
      title: 'Back end',
    },
    {
      picture: `../../../../assets/img/fullstack.jpg`,
      title: 'Fullstack',
    },
    {
      picture: `../../../../assets/img/design.jpg`,
      title: 'Design',
    },
    {
      picture: `../../../../assets/img/mobile.jpg`,
      title: 'Mobile',
    },
    {
      picture: `../../../../assets/img/mindset.jpg`,
      title: 'Algorithm',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
