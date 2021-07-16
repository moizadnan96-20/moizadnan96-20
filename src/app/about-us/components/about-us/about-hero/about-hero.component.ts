import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.css']
})
export class AboutHeroComponent implements OnInit {
  @Output() public childevent=new EventEmitter()
 
   element:any;
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

  @HostListener('window:scroll', ['$event'])
 
  onWindowScroll(e:any){
    if (window.pageYOffset  > 300) {
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
