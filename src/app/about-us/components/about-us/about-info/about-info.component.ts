import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit {
  @Input() public parentDate=""
  constructor() { }

  ngOnInit(): void {
  }

}
