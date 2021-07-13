import { Component, OnInit } from '@angular/core';
import projectsData from '../data/data';
declare const scrollTOEl: any;

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.css'],
})
export class TechnologyPageComponent implements OnInit {
  projects: any = [];
  filters: any = [];
  activeValue: string = '';

  filterData: any = [];

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
    this.activeValue = c;
    this.filterData = projectsData.filter((cat) =>
      cat.technologies.includes(c)
    );
  }
  onClickAllData() {
    this.activeValue = 'All';
    this.projects.map((el: any) => {
      el.technologies.map((e2: any) => {
        if (!this.filters.includes(e2)) {
          this.filters.push(e2);
        }
      });
    });
    this.filterData = this.projects;
  }
}
