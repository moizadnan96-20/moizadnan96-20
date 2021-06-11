import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-tech-telecom',
  templateUrl: './tech-telecom.component.html',
  styleUrls: ['./tech-telecom.component.css']
})
export class TechTelecomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
