
import { Component, EventEmitter, HostListener, OnInit,Output } from '@angular/core';



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
  element:any

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
 @Output() public childevent=new EventEmitter()

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any){
    if (window.pageYOffset  > 500) {
     this.element  = document.getElementById('links-tab');
     this.element.classList.add('sticky');
     
     
     
    } else {
      this.element  = document.getElementById('links-tab');
     this.element.classList.remove('sticky');
     
    }
  }


  constructor() {

  }

  ngOnInit(): void {
    // this.linkTab = document.getElementById("links-tab");
    // this.linkTabOfset = this.linkTab?.offsetTop;
    // this.header = document.getElementById("header")?.offsetHeight;
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }




  scroll(el: any) {
    scrollTOEl(el);
    this.childevent.emit(el)
  }
  activeRoute(c: any) {
    scrollTOEl(c.target.value);
    this.childevent.emit(c.target.value)
  }
}
  
















