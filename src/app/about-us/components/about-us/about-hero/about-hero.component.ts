import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.css']
})
export class AboutHeroComponent implements OnInit {
  @Output() public childevent=new EventEmitter()
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
    this.childevent.emit(el)
  }
}
