import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-it-project-info',
  templateUrl: './more-it-project-info.component.html',
  styleUrls: ['./more-it-project-info.component.css']
})
export class MoreItProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
