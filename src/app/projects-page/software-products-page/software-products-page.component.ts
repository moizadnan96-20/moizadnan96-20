import { Component, HostListener, OnInit } from '@angular/core';
import projectsData from '../data/data';
declare const scrollTOEl: any;
@Component({
  selector: 'app-software-products-page',
  templateUrl: './software-products-page.component.html',
  styleUrls: ['./software-products-page.component.css'],
})
export class SoftwareProductsPageComponent implements OnInit {
  projects: any = [];
  filterData: any;
  filters: any = [];
  activeValue: string = '';
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
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);
    this.activeValue = c;
    this.filterData = projectsData.filter((cat) =>
      cat.softwareProducts.includes(c)
    );
  }

  onClickAllData() {
    this.activeValue = 'All';
    this.projects.map((el: any) => {
      if (!this.filters.includes(el.softwareProducts)) {
        this.filters.push(el.softwareProducts);
      }
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
        cat.softwareProducts.includes(r.target.value)
      );
      console.log(this.filterData);
    }
  }
}


