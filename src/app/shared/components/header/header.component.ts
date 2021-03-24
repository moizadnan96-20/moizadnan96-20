import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare const navOpen: any;
declare const dropdownOpen: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public innerWidth:any;
public width=false;
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(window.innerWidth<=1160){
      this.width=true;
    }else{
      this.width=false;
    }
  }

  public toggle = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(window.innerWidth<=1160){
      this.width=true;
    }else{
      this.width=false;
    }
  }

  nav(event: any) {
    this.toggle = true;
    // let node = document.createElement("li");
    // node.innerHTML = '<a class="nav-link left-padding scrollto" href="#hero">About Us</a>';
    // let ul = document.getElementById('ul');
    // ul?.appendChild(node);
    // console.log(ul)
    navOpen(event);
    // console.log('event in nav',event);
  }

  close(event: any) {
    navOpen(event);
    this.toggle = false;
  }

  dropdown(event: any) {
    console.log(event)
    dropdownOpen(event)
  }

  public routeTo(path:any){
    this.router.navigate([path]);
  }

}
