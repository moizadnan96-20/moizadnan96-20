import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-solution-telecom',
  templateUrl: './solution-telecom.component.html',
  styleUrls: ['./solution-telecom.component.css']
})
export class SolutionTelecomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
