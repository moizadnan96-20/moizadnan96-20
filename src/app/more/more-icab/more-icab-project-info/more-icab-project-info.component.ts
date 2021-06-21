import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-icab-project-info',
  templateUrl: './more-icab-project-info.component.html',
  styleUrls: ['./more-icab-project-info.component.css']
})
export class MoreIcabProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
