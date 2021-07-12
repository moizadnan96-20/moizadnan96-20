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
  filters: any = []
  activeValue: string = ''
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  clicked4: boolean = false;
  clicked5: boolean = false;

  clicked6: boolean = false;
  clicked7: boolean = false;
  clicked8: boolean = false;
  clicked9: boolean = false;
  clicked10: boolean = false;
  clicked11: boolean = false;
  filterData: any = [];



  constructor() {
    this.projects = projectsData
  }

  ngOnInit(): void {
    
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }


  onClickForFilter(c: any) {
    console.log(c);
    this.clicked4 = false;
    this.activeValue = c
    this.filterData = projectsData.filter((cat) => cat.technologies.includes(c));

    console.log(this.filterData);


  }
  onClickAllData() {
    this.activeValue = 'All'
    this.projects.map((el: any) => {
      console.log(el);

      el.technologies.map((e2: any) => {
        console.log(e2);

        if (!this.filters.includes(e2)) {

          this.filters.push(e2)
        }
      })
    })
    this.filterData = this.projects

   


  }
}
