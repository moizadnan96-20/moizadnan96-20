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
    if(window.pageYOffset+90 > this.headerOfset){
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

}
