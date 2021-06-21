import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-jazzno-project-info',
  templateUrl: './more-jazzno-project-info.component.html',
  styleUrls: ['./more-jazzno-project-info.component.css']
})
export class MoreJazznoProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
