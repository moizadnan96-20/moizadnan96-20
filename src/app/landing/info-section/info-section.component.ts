import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoSectionComponent implements OnInit {
  public innerWidth: any;
  public width = false;
  element: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 700) {
      this.width = true;
    } else {
      this.width = false;
    }
  }

  images: any = [
    {
      imageURL:
        '../../../assets/carsole new/Managed services  - CAROUSEL 2200 -W 750 H – 2.svg',
      route: '/manage-services',
      imageInMobile: '../../../assets/carsole new/Managed Services- CAROUSEL - MOBILE 960 W and 750 H- 2 – 1.svg',
      // imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
    },
    {
      imageURL: '../../../assets/carsole new/CAROUSEL- IT CONSULTANCY  2200W 750 – 3.svg',
      route: '/consulting',
      imageInMobile: '../../../assets/carsole new/IT CONSULTANCY--CAROUSEL- MOBILE 960 W and 750 H -4 – 1.svg',
      // imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
    },
    {
      imageURL: '../../../assets/carsole new/DEV. OPS- CAROUSEL 2200 W 750 – 1.svg',
      route: '/devops',
      imageInMobile: '../../../assets/carsole new/DEV. OPS- CAROUSEL- MOBILE 960 W and 750 H – 2.svg',
      // imageInMobile2: '../../../assets/carsole in mobile/IT Consultancy 960 × 494 – 1.svg'
    },
    {
      imageURL:
        '../../../assets/carsole new/INFRASTRUCTURE - CAROUSEL 2200W  x 750 – 5.svg',
      route: '/infrastructure',
      imageInMobile: '../../../assets/carsole new/INFRASTRUCTUR- CAROUSEL- MOBILE 960 W and 750 H – 6.svg',
      // imageInMobile2: '../../../assets/carsole in mobile/P 1 SVG TECHNOLOGY 960 ×700 – 4.svg'
    },
    {
      imageURL: '../../../assets/carsole new/N- TECHNOLOGY- CAROUSEL 2200W 750 – 4.svg',
      route: '/technology',
      imageInMobile: '../../../assets/carsole new/TECHNOLOGY-- CAROUSEL- MOBILE 960 W and 750 H – 4.svg',
      // imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 700) {
      this.width = true;
    } else {
      this.width = false;
    }
  }
}
