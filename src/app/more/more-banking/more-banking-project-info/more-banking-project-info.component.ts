import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-more-banking-project-info',
  templateUrl: './more-banking-project-info.component.html',
  styleUrls: ['./more-banking-project-info.component.css']
})
export class MoreBankingProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
