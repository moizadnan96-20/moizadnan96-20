import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {

  //header: any;
  //linkTab: any;
  //linkTabOfset: any;
  public innerWidth: any;
  public width = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }
 /* @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    if (window.pageYOffset + this.header > this.linkTabOfset) {
      this.linkTab.classList.add("sticky");
    } else {
      this.linkTab.classList.remove("sticky");
    }
  }*/

  constructor() { }

  ngOnInit(): void {
    /*this.linkTab = document.getElementById("links-tab");
    this.linkTabOfset = this.linkTab?.offsetTop;
    this.header = document.getElementById("header")?.offsetHeight;
    if(window.innerWidth<=1100){
      this.width=true;
    }else{
      this.width=false;
    }*/
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }

}
