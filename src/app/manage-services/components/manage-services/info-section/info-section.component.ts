import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
})
export class InfoSectionComponent implements OnInit {
  @Input() public parentDate = '';
  constructor() {}

  ngOnInit(): void {
    //   {
    //     AOS.init();
    //     console.log(AOS);
    //   }
    //   AOS.refresh();
    //   console.log(AOS.refresh());
    {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease-out-quad',
        once: !0,
      });
      window.addEventListener('load', AOS.refresh);
    }
  }
}
