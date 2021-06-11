import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-tech-bankinng',
  templateUrl: './tech-bankinng.component.html',
  styleUrls: ['./tech-bankinng.component.css']
})
export class TechBankinngComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
