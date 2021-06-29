import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class InfoSectionComponent implements OnInit {



  images: any = [
    {
      imageURL: '../../../assets/carsole/m.s.jpg',
      route: '/manage-services'
    },

    {
      imageURL: '../../../assets/carsole/it.png',
      route: '/consulting '
    },
    {
      imageURL: '../../../assets/carsole/dev.jpg',
      route: '/devops'
    },

    {
      imageURL: '../../../assets/carsole/Web 1920 – 1.jpg',
      route: '/devops'
    },
    // {
    //   imageURL: '',
    //   route: '/devops'
    // },
    // {
    //   imageURL: '',
    //   route: '/infrastructure'
    // },

  ]


  constructor() {

  }

  ngOnInit(): void {


  }
}
