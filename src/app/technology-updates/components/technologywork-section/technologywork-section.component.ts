import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-technologywork-section',
  templateUrl: './technologywork-section.component.html',
  styleUrls: ['./technologywork-section.component.css']
})
export class TechnologyworkSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    {
      AOS.init();
    }
    console.log(AOS);
  }
  }


