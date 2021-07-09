import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  activeValue:string = '';
  filterData: any;
  filterCatagory: any
  projects = [{
    industry: 'System Integrator',
    softwareProducts: 'IBM Tivoli Monitoring (ITM)',
    technologies: ['IBM DB-2', 'Regex'],
    client: 'Orb Data',
    title: 'Helios Tower Africa (HTA)\nClaranet (CLUK)',
    summary:
      'ITM/ITNM Integrate ITM software and agents Integrate TDW (Tivoli Data warehouse) Manage and Integrate ITNM software along with nodes Creation of Alerts on IBM different servers Managing and Customizing alerts as per clients need Upgrades of ITM agents Daily Health checks of the system. ',
    image: '../../../../../../assets/img/project-2.svg',
    route: '/more/more-list',
  },
  {
    industry: 'System Integrator',
    softwareProducts: 'IBM Tivoli Network Monitoring (ITNM)',
    technologies: ['SNMP', 'WebSphere'],
    client: 'Orb Data',
    title: 'Helios Tower Africa (HTA), Claranet (CLUK), ITNM',
    summary: 'Manage and Integrate ITNM software along with nodes',
    image: '../../../../../../assets/img/project-2.svg',
    route: '/more/more-itnm',
  },]

  constructor() { }

  ngOnInit(): void {
    // this.filterCatagory = this.projects.map(
    //   (catagory) => catagory.technologies.includes({})
    // );
  }
  onClickForFilter(c: any) {
    console.log(c);
    this.activeValue = c
    this.filterData = this.projects.filter((cat) => cat.technologies.includes(c) );
    
      console.log(this.filterData);
    // if (c === 'Regex' ) {
      

    // } else if (c === 'WebSphere') {
    //   this.filterData = this.projects.filter((cat) => cat.technologies == c);
    //   console.log(this.filterData);
    // }

  }
}

