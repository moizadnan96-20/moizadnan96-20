import { Component, OnInit } from '@angular/core';
import projectsData from '../data/data';
declare const scrollTOEl: any;
@Component({
  selector: 'app-software-products-page',
  templateUrl: './software-products-page.component.html',
  styleUrls: ['./software-products-page.component.css'],
})
export class SoftwareProductsPageComponent implements OnInit {
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
      (catagory) => catagory.softwareProducts
    );
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);

    if (c === 'IBM Control Desk') {
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked4 = false;
      this.clicked3 = false;
      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (
      c === 'ITM, ITNM, Netcool Omnibus, Impact, Bigfix, IBM Jazz, SM, NOI'
    ) {
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked4 = false;
      this.clicked3 = false;
      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'Hardware Support Services') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
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
