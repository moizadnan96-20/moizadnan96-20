import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class InfoSectionComponent implements OnInit {



  images: any = [
    // {
    //   imageURL: '../../../assets/carsole/m.s.jpg',
    //   route: '/manage-services'
    // },

    // {
    //   imageURL: '../../../assets/carsole/it.png',
    //   route: '/consulting '
    // },
    // {
    //   imageURL: '../../../assets/carsole/dev.jpg',
    //   route: '/devops'
    // },

    {
      imageURL: '../../../assets/carsole/(n) Managed services 750 H - 2200 W.svg',
      route: '/devops'
    },
    {
      imageURL: '../../../assets/carsole/-nn-INFRASTRUCTURE 2200 -W 750 H – 2.svg',
      route: '/devops'
    },
    {
      imageURL: '../../../assets/carsole/(n) Technology 750 H - 2200 W.svg',
      route: '/infrastructure'
    },

  ]


  constructor() {

  }

  ngOnInit(): void {


  }
}
