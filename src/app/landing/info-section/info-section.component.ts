import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: any = ['../../../assets/Dia/DevOps.svg', '../../../assets/img/project-1.svg', '../../../assets/img/project-2.svg', '../../../assets/img/project-3.svg'

  ]


  constructor() { }

  ngOnInit(): void {


  }
}
