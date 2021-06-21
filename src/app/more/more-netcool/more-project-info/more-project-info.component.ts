import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-project-info',
  templateUrl: './more-project-info.component.html',
  styleUrls: ['./more-project-info.component.css']
})
export class MoreProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
