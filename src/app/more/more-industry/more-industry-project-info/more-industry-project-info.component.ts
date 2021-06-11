import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-industry-project-info',
  templateUrl: './more-industry-project-info.component.html',
  styleUrls: ['./more-industry-project-info.component.css']
})
export class MoreIndustryProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
