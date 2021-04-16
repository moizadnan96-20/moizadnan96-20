import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  header: any;
  subHeader: any;
  ppOffset:any;
  pp:any;
  

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    if (window.pageYOffset + this.header >this.ppOffset) {
      this.pp.classList.add("sticky");
    } else {
      this.pp.classList.remove("sticky");
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.header = document.getElementById("header")?.offsetHeight;
    this.subHeader=document.getElementById('links-tab')?.offsetHeight;
    this.header+=this.subHeader;
    this.pp=document.getElementById("PP");
    this.ppOffset=this.pp?.offsetTop;
    this.ppOffset+=this.header;
  }

}
