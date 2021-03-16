import { Component, OnInit } from '@angular/core';
declare const navOpen: any;
declare const dropdownOpen: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  nav(event:any){
    this.toggle=true;
    navOpen(event);
    // console.log('event in nav',event);
  }

  close(event:any){
    navOpen(event);
    this.toggle=false;
  }

  dropdown(event:any){
    console.log(event)
    dropdownOpen(event)
  }

}
