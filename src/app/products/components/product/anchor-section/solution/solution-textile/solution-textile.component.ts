import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-solution-textile',
  templateUrl: './solution-textile.component.html',
  styleUrls: ['./solution-textile.component.css']
})
export class SolutionTextileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
