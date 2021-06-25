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
  clicked5: boolean = false;
  clicked6: boolean = false;
  clicked7: boolean = false;
  clicked8: boolean = false;
  clicked9: boolean = false;
  clicked10: boolean = false;
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

    if (c === 'IBM Tivoli Monitoring (ITM)') {
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked4 = false;
      this.clicked3 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;
      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'IBM Tivoli Network Monitoring (ITNM)') {
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked4 = false;
      this.clicked3 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;
      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'Netcool Omnibus, Impact, NOI') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'IBM Cognos and Birt') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = true;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'Netcool Omnibus') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = true;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    } else if (c === 'IBM Service Desk') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = true;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    }else if (c === 'Property Management Software') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =true;
      this.clicked9 = false;
      this.clicked10 =false;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    }else if (c === 'Advance Industry Metrics') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = true;
      this.clicked10 =false;


      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);
    }
    else if (c === 'Ops Alert') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 =false;
      this.clicked9 = false;
      this.clicked10 =true;

      this.filterData = projectsData.filter((cat) => cat.softwareProducts == c);
      console.log(this.filterData);}
  }

  onClickAllData() {
    this.filterData = projectsData;
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.clicked4 = true;
    this.clicked5 = false;
    this.clicked6 = false;
    this.clicked7 = false;
    this.clicked8 =false;
    this.clicked9 = false;
    this.clicked10 =false;
    
  }
}
