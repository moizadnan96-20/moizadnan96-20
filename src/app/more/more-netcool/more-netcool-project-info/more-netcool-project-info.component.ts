import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-netcool-project-info',
  templateUrl: './more-netcool-project-info.component.html',
  styleUrls: ['./more-netcool-project-info.component.css']
})
export class MoreNetcoolProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
