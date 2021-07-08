import { Component, HostListener, OnInit } from '@angular/core';

declare const scrollTOEl: any;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  header: any;
  linkTab: any;
  linkTabOfset: any;
  public innerWidth: any;
  public width = false;
  element:any
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any){
    if (window.pageYOffset  > 500) {
     this.element  = document.getElementById('links-tab');
     this.element.classList.add('sticky');
     console.log(this.element);
     
     
    } else {
      this.element  = document.getElementById('links-tab');
     this.element.classList.remove('sticky');
     console.log(this.element);
    }
  }

  constructor() { }

  ngOnInit(): void {
    // this.linkTab = document.getElementById("links-tab");
    // this.linkTabOfset = this.linkTab?.offsetTop;
    // this.header = document.getElementById("header")?.offsetHeight;
  }

  scroll(el: any) {
    scrollTOEl(el);
  }

}
