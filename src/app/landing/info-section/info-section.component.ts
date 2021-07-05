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
      imageURL: '../../../assets/carsole/(n) Managed services 750 H - 2200 W.svg',
      route: '/manage-services'
    },
    {
      imageURL: '../../../assets/carsole/(N)IT CONSULTANCY 750 H x 2200 w.svg',
      route: '/consulting'
    },
    {
      imageURL: '../../../assets/carsole/(N)DEV OPS 750 H x 2200 w.svg',
      route: '/devops'
    },
    {
      imageURL: '../../../assets/carsole/-nn-INFRASTRUCTURE 2200 -W 750 H – 2.svg',
      route: '/infrastructure'
    },
    {
      imageURL: '../../../assets/carsole/(n) Technology 750 H - 2200 W.svg',
      route: '/technology'
    },

  ]


  constructor() {

  }

  ngOnInit(): void {


  }
}
