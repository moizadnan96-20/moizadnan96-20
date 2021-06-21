import { Component, OnInit } from '@angular/core';
import projectsData from '../data/data';
declare const scrollTOEl: any;

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.css'],
})
export class TechnologyPageComponent implements OnInit {
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  clicked4: boolean = false;
  clicked5: boolean = false;

  clicked6: boolean = false;
  clicked7: boolean = false;
  clicked8: boolean = false;
  filterData: any;
  filterCatagory: any;
  activeClass: string = 'nonactive';

  constructor() {}

  ngOnInit(): void {
    this.filterCatagory = projectsData.map((catagory) => catagory.technologies);
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);

    if (c === 'IBM DB-2, Regex') {
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked4 = false;
      this.clicked3 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'SNMP, Websphere') {
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked4 = false;
      this.clicked3 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'Perl, Shell, Java, SQL, IBM DB-2') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'IBM-DB2, SQL') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = true;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'Tivoli Datawarehouse, IBM-DB2') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = true;
      this.clicked7 = false;
      this.clicked8 = false;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'Websphere, IBM-DB2, Perl, Shell, Java, Impact') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = true;
      this.clicked8 = false;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    } else if (c === 'Websphere, IBM-DB2, Perl, Shell, Java, Impact') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = true;
      this.clicked8 = false;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    }
    else if (c === 'Websphere, IBM-DB2, Java, Jython, Perl') {
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = true;

      this.filterData = projectsData.filter((cat) => cat.technologies == c);
      console.log(this.filterData);
    }
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
    this.clicked8 = false;
  }
}
