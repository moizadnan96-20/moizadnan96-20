import { Component, HostListener, OnInit } from '@angular/core';

declare const scrollTOEl: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  divid = '';

  constructor() {}

  ngOnInit(): void {}
}
