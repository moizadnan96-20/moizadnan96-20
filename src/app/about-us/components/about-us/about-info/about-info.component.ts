import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit {
  @Input() public parentDate=""
  constructor() { }

  ngOnInit(): void {
    {
      AOS.init();
    }
    console.log(AOS);
  }
  }

