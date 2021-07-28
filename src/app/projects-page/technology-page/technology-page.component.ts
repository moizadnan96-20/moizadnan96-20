import { Component, HostListener, OnInit } from '@angular/core';
import projectsData from '../data/data';
declare const scrollTOEl: any;
import * as AOS from 'aos';
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

  filterInput(r: any) {
    console.log(r.target.value);
    if (r.target.value == 'All') {
      this.onClickAllData();
    } else {
      this.activeValue = r.target.value;
      this.filterData = projectsData.filter((cat) =>
        cat.technologies.includes(r.target.value)
      );
      console.log(this.filterData);
    }
  }
}
