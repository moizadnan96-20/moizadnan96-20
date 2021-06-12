import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devop-info-section',
  templateUrl: './devop-info-section.component.html',
  styleUrls: ['./devop-info-section.component.css']
})
export class DevopInfoSectionComponent implements OnInit {
  @Input() public parentDate=""
  constructor() { }

  ngOnInit(): void {
  }

}
