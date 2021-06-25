import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-public-service-project-info',
  templateUrl: './more-public-service-project-info.component.html',
  styleUrls: ['./more-public-service-project-info.component.css']
})
export class MorePublicServiceProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
