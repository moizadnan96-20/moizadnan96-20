import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener, Input } from '@angular/core';
declare const scrollTOEl: any;
import * as AOS from 'aos';
@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {

  header: any;
  linkTab: any;
  linkTabOfset: any;
  @Input() public parentDate=""
  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    if (window.pageYOffset + this.header > this.linkTabOfset) {
      this.linkTab.classList.add("sticky");
    } else {
      this.linkTab.classList.remove("sticky");
    }
  }

  constructor(private _vps: ViewportScroller) { }

  ngOnInit(): void {
    {
      AOS.init();
    }
    
  
    //this.linkTab = document.getElementById("links-tab");
    //this.linkTabOfset = this.linkTab?.offsetTop;
    //this.header = document.getElementById("header")?.offsetHeight;
   
  }

 scroll(el: any) {
    scrollTOEl(el);
    
    
  }
  activeRoute(c: any) {
    scrollTOEl(c.target.value);
    
  }
}
