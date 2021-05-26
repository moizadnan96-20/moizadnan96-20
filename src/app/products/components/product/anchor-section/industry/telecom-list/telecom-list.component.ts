import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-telecom-list',
  templateUrl: './telecom-list.component.html',
  styleUrls: ['./telecom-list.component.css']
})
export class TelecomListComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
