import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  // header: any;
  // subHeader: any;
  // ppOffset:any;
  // pp:any;
  // cbOffset:any;
  // cb:any;
  // bbOffset:any;
  // bb:any;
  

  // @HostListener('window:scroll', ['$event'])
  // onScrollEvent($event: any) {
  //   if (window.pageYOffset + this.header >this.ppOffset && window.pageYOffset + this.header <this.cbOffset) {
  //     this.pp.classList.add("sticky");
  //   } else {
  //     this.pp.classList.remove("sticky");
  //   }
  //   if (window.pageYOffset + this.header >this.cbOffset && window.pageYOffset + this.header <this.bbOffset) {
  //     this.cb.classList.add("sticky");
  //   } else {
  //     this.cb.classList.remove("sticky");
  //   }
  //   if (window.pageYOffset + this.header >this.bbOffset) {
  //     this.bb.classList.add("sticky");
  //   } else {
  //     this.bb.classList.remove("sticky");
  //   }
  // }

  constructor() {
  }

  ngOnInit(): void {
    // this.header = document.getElementById("header")?.offsetHeight;
    // this.subHeader=document.getElementById('links-tab')?.offsetHeight;
    // this.header+=this.subHeader;
    // this.pp=document.getElementById("PP");
    // this.ppOffset=this.pp?.offsetTop;
    // this.ppOffset+=this.header+90;
    // this.cb=document.getElementById("CB");
    // this.cbOffset=this.cb?.offsetTop;
    // this.cbOffset+=this.header;
    // this.bb=document.getElementById("BB");
    // this.bbOffset=this.bb?.offsetTop;
    // this.bbOffset+=this.header;
    AOS.init();
    console.log(AOS.init());
  }

}
