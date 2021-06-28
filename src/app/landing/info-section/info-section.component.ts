import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class InfoSectionComponent implements OnInit {



  images: any = [{
    imageURL: '../../../assets/carsole/DEV ops.svg',
    route: '/devops'
  }, {
    imageURL: '../../../assets/carsole/TECHNOLOGY BANNER.svg',
    route: '/technology'
  }, {
    imageURL: '../../../assets/carsole/INFRASTRUCTURE SUPPORT.svg',
    route: '/infrastructure'
  }, {
    imageURL: '../../../assets/carsole/MANAGED SERVICES with more.svg',
    route: '/manage-services'
  }, {
    imageURL: '../../../assets/carsole/IT CONSULTANCY with more.svg',
    route: '/consulting'
  }]


  constructor() {

  }

  ngOnInit(): void {


  }
}
