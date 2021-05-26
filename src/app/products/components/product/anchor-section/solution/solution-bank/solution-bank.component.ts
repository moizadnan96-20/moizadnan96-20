import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-solution-bank',
  templateUrl: './solution-bank.component.html',
  styleUrls: ['./solution-bank.component.css']
})
export class SolutionBankComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
