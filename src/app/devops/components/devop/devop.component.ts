import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-devop',
  templateUrl: './devop.component.html',
  styleUrls: ['./devop.component.css']
})
export class DevopComponent implements OnInit {

  header:any;
  headerOfset:any;

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event:any){
    let a;
    if(window.innerWidth<1160){
      a=67;
    }else{
      a=107;
    }
    if(window.pageYOffset+a > this.headerOfset){
      this.header.classList.add("sticky");
    } else {
      this.header.classList.remove("sticky");
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.header=document.getElementById("links-tab");
  this.headerOfset=this.header?.offsetTop;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView(false);
}

}
