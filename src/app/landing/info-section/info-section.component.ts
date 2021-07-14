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
      imageInMobile: '../../../assets/img/1-Managed service phone- 960 ×700.png',
      imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
    },
    {
      imageURL: '../../../assets/carsole/(N)IT CONSULTANCY 750 H x 2200 w.svg',
      route: '/consulting',
      imageInMobile: '../../../assets/img/1-Managed service phone- 960 ×700.png',
      imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
    },
    {
      imageURL: '../../../assets/carsole/(N)DEV OPS 750 H x 2200 w.svg',
      route: '/devops',
      imageInMobile: '../../../assets/Dia/IT Consultancy 960 ×700 – 1.svg',
      imageInMobile2: '../../../assets/Dia/IT Consultancy 960 × 494 – 1.svg'
    },
    {
      imageURL:
        '../../../assets/carsole/-nn-INFRASTRUCTURE 2200 -W 750 H – 2.svg',
      route: '/infrastructure',
      imageInMobile: '../../../assets/Dia/P-2 SVG TECHNOLOGY 960 × 750 – 1.svg',
      imageInMobile2: '../../../assets/Dia/P 1 SVG TECHNOLOGY 960 ×700 – 4.svg'
    },
    {
      imageURL: '../../../assets/carsole/(n) Technology 750 H - 2200 W.svg',
      route: '/technology',
      imageInMobile: '../../../assets/img/1-Managed service phone- 960 ×700.png',
      imageInMobile2: '../../../assets/img/2 Managed service phone - 960 × 654.png'
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
