import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.css']
})
export class ConsultancyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    console.log(AOS.init());
  }

}
