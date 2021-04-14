import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-devop',
  templateUrl: './devop.component.html',
  styleUrls: ['./devop.component.css']
})
export class DevopComponent implements OnInit {

  header: any;
  headerOfset: any;
  sticky:boolean=false;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    let a;
    if (window.innerWidth < 1160) {
      a = 67;
    } else {
      a = 107;
    }
    if (window.pageYOffset + a > this.headerOfset) {
      this.header.classList.add("sticky");
      this.sticky=true;
    } else {
      this.header.classList.remove("sticky");
      this.sticky=false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.header = document.getElementById("links-tab");
    this.headerOfset = this.header?.offsetTop;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    setTimeout(()=>{if (window.innerWidth < 1160) {
      if(this.sticky){
        window.scrollBy(0, -100);
      }else{
        window.scrollBy(0, -130);
      }
    } else {
      if(this.sticky){
        window.scrollBy(0, -130);
      }else{
    window.scrollBy(0, -170);
      }
      
    }},500)
    
  }
}
