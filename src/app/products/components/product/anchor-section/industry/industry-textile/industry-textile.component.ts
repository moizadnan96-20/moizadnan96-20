import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-industry-textile',
  templateUrl: './industry-textile.component.html',
  styleUrls: ['./industry-textile.component.css']
})
export class IndustryTextileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
