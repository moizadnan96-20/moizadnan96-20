import { Component, HostListener, OnInit } from '@angular/core';
import projectsData from '../data/data';
import * as AOS from 'aos';
declare const scrollTOEl: any;
@Component({
  selector: 'app-industry-page',
  templateUrl: './industry-page.component.html',
  styleUrls: ['./industry-page.component.css'],
})
export class IndustryPageComponent implements OnInit {
  filterData: any;
  filters: any = [];
  activeValue: string = '';
  projects: any = [];
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

  constructor() {
    this.projects = projectsData;
  }

  ngOnInit(): void {
    this.onClickAllData();
    if (window.innerWidth <= 1100) {
      this.width = true;
    } else {
      this.width = false;
    }
    AOS.init();
    console.log(AOS.init());
  }

  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);
    this.activeValue = c;
    this.filterData = projectsData.filter((cat) => cat.industry.includes(c));
    console.log(this.filterData);
  }
  onClickAllData() {
    this.activeValue = 'All';
    this.projects.map((el: any) => {
      console.log(el);

      if (!this.filters.includes(el.industry)) {
        console.log(el.industry);

        this.filters.push(el.industry);
      }
    });

    this.filterData = this.projects;
  }
  filterInput(r: any) {
    console.log(r.target.value);
    if (r.target.value == 'All') {
      // this.onClickAllData();
      this.filterData = this.projects;
      console.log(this.filterData);
      
    } else {
      this.activeValue = r.target.value;
      this.filterData = projectsData.filter((cat) =>
        cat.industry.includes(r.target.value)
      );
      console.log(this.filterData);
    }
  }
}
