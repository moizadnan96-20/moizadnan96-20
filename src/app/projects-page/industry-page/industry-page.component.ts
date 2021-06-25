import { Component, OnInit } from '@angular/core';
import projectsData from '../data/data'

declare const scrollTOEl: any;
@Component({
  selector: 'app-industry-page',
  templateUrl: './industry-page.component.html',
  styleUrls: ['./industry-page.component.css'],
})
export class IndustryPageComponent implements OnInit {
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  clicked4: boolean = false;

  filterData: any;
  filterCatagory: any;
  activeClass: string = 'nonactive';



  constructor() {}

  ngOnInit(): void {
    this.filterCatagory = projectsData.map(
      (catagory) => catagory.industry
    );
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);

    if (c === 'Telecommunication') {
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked4 = false;
     this.clicked3 = false;
      this.filterData = projectsData.filter((cat) => cat.industry == c);

      console.log(this.filterData);
    } else if (c === 'System Integrator') {
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked4 = false;
      this.clicked3 = false;
      this.filterData = projectsData.filter((cat) => cat.industry == c);
      console.log(this.filterData);
    } else if (c === 'Textile & Manufacturer') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;

      this.filterData = projectsData.filter((cat) => cat.industry == c);
      console.log(this.filterData);
    } else if (c === 'Public Service') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;

      this.filterData = projectsData.filter((cat) => cat.industry == c);
      console.log(this.filterData);
    }else if (c === 'Financial Services') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;

      this.filterData = projectsData.filter((cat) => cat.industry == c);
      console.log(this.filterData);
    }else if (c === 'Information Technology') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;

      this.filterData = projectsData.filter((cat) => cat.industry == c);
      console.log(this.filterData);
    }
  }
  onClickAllData() {
    this.filterData = projectsData;
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.clicked4 = true;
  }
}
