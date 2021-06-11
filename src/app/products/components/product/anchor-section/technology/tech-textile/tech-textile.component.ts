import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-tech-textile',
  templateUrl: './tech-textile.component.html',
  styleUrls: ['./tech-textile.component.css']
})
export class TechTextileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
