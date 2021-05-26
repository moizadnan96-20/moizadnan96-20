import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-soultion-list',
  templateUrl: './soultion-list.component.html',
  styleUrls: ['./soultion-list.component.css']
})
export class SoultionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: any) {
    scrollTOEl(el);
  }
}
