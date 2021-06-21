import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-jazzisd-project-info',
  templateUrl: './more-jazzisd-project-info.component.html',
  styleUrls: ['./more-jazzisd-project-info.component.css']
})
export class MoreJazzisdProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
