import { Component, OnInit } from '@angular/core';
import projectsData from '../data/data';

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

  constructor() {
    this.projects = projectsData;
  }

  ngOnInit(): void {
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);
    this.activeValue = c;
    this.filterData = projectsData.filter((cat) => cat.industry.includes(c));
  }
  onClickAllData() {
    this.activeValue = 'All';
    this.projects.map((el: any) => {
      if (!this.filters.includes(el.industry)) {
        this.filters.push(el.industry);
      }
    });

    this.filterData = this.projects;
  }
}
