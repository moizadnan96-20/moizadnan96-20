import { Component, OnInit, HostListener } from '@angular/core';

declare const scrollTOEl: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  header: any;
  linkTab: any;
  linkTabOfset: any;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    if (window.pageYOffset + this.header > this.linkTabOfset) {
      this.linkTab.classList.add("sticky");
    } else {
      this.linkTab.classList.remove("sticky");
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.linkTab = document.getElementById("links-tab");
    this.linkTabOfset = this.linkTab?.offsetTop;
    this.header = document.getElementById("header")?.offsetHeight;
  }

  scroll(el: any) {
    scrollTOEl(el);
  }

}
