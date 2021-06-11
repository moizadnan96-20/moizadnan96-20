import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-projects-info',
  templateUrl: './projects-info.component.html',
  styleUrls: ['./projects-info.component.css']
})
export class ProjectsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
