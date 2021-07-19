import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public innerWidth: any;
  public width = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
  }

}
