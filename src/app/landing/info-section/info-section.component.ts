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
        '../../../assets/carsole/(n) Managed services 750 H - 2200 W.svg',
      route: '/manage-services',
      // imageInMobile: '../../../assets/img/1-Managed service phone- 960 ×700.png',
      // imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
      imageInMobile: '../../../assets/carsole in mobile/1-Managed service phone- 960 ×750.svg',
      imageInMobile2: '../../../assets/carsole in mobile/Web 1920 – 1.svg'
    },
    {
      imageURL: '../../../assets/carsole/(N)IT CONSULTANCY 750 H x 2200 w.svg',
      route: '/consulting',
      // imageInMobile: '../../../assets/img/1-Managed service phone- 960 ×700.png',
      // imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
      imageInMobile: '../../../assets/carsole in mobile/1-Managed service phone- 960 ×750.svg',
      imageInMobile2: '../../../assets/carsole in mobile/Web 1920 – 1.svg'
    },
    {
      imageURL: '../../../assets/carsole/(N)DEV OPS 750 H x 2200 w.svg',
      route: '/devops',
      imageInMobile: '../../../assets/carsole in mobile/IT Consultancy 960 ×700 – 1.svg',
      imageInMobile2: '../../../assets/carsole in mobile/Web 1920 – 2.svg'
    },
    {
      imageURL:
        '../../../assets/carsole/-nn-INFRASTRUCTURE 2200 -W 750 H – 2.svg',
      route: '/infrastructure',
      imageInMobile: '../../../assets/carsole in mobile/P-2 SVG TECHNOLOGY 960 × 750 – 1.svg',
      imageInMobile2: '../../../assets/carsole in mobile/P 1 SVG TECHNOLOGY 960 ×700 – 4.svg'
    },
    {
      imageURL: '../../../assets/carsole/(n) Technology 750 H - 2200 W.svg',
      route: '/technology',
      imageInMobile: '../../../assets/carsole in mobile/1-Managed service phone- 960 ×750.svg',
      imageInMobile2: '../../../assets/carsole in mobile/Web 1920 – 1.svg'
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
