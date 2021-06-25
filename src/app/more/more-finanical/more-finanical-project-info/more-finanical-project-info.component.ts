import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-finanical-project-info',
  templateUrl: './more-finanical-project-info.component.html',
  styleUrls: ['./more-finanical-project-info.component.css']
})
export class MoreFinanicalProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
