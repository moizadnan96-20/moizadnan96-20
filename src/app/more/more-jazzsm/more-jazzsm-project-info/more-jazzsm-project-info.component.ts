import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-jazzsm-project-info',
  templateUrl: './more-jazzsm-project-info.component.html',
  styleUrls: ['./more-jazzsm-project-info.component.css']
})
export class MoreJazzsmProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
