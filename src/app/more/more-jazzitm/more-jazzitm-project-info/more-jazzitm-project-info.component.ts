import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-jazzitm-project-info',
  templateUrl: './more-jazzitm-project-info.component.html',
  styleUrls: ['./more-jazzitm-project-info.component.css']
})
export class MoreJazzitmProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
