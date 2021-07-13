import { Component, OnInit } from '@angular/core';
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
filters:any =[]
  activeValue: string = '';

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
    this.activeValue = c
    this.filterData = projectsData.filter((cat) =>
      cat.softwareProducts.includes(c)
    );
   
    
  }

  onClickAllData() {
    this.activeValue = 'All'
    this.projects.map((el:any)=>{
     
      if (!this.filters.includes(el.softwareProducts)) {
        this.filters.push(el.softwareProducts);
      }
    })
    this.filterData = this.projects;
  }
}
