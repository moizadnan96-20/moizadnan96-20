import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: any = ['../../../assets/carsole/1056.jpg', '../../../assets/carsole/17927.jpg', '../../../assets/carsole/2911473.jpg', '../../../assets/carsole/34.jpg'

  ]


  constructor() { }

  ngOnInit(): void {


  }
}
