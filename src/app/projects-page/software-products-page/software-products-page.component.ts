import { Component, OnInit } from '@angular/core';
declare const scrollTOEl: any;
@Component({
  selector: 'app-software-products-page',
  templateUrl: './software-products-page.component.html',
  styleUrls: ['./software-products-page.component.css'],
})
export class SoftwareProductsPageComponent implements OnInit {
  filterData: any;
  filterCatagory: any;
  activeClass: string = 'nonactive';

  projectsData: any[] = [
    {
      industry: 'Banking',
      softwareProducts: 'IBM Control Desk',
      technologies: 'IBM Websphere, IBM DB2, IBM HTTP Server',
      client: 'Bank Islami',
      title: 'Managed Services Support',
      summary:
        'Bank Islami requested to provide the consultancy and support services for the smooth operation of their operation through IBM control desk',
      image: '../../../../../../assets/img/project-1.svg',
    },
    {
      industry: 'System Integrator',
      softwareProducts:
        'ITM, ITNM, Netcool Omnibus, Impact, Bigfix, IBM Jazz, SM, NOI',
      technologies: 'Perl, Shell, Java, SQL, IBM DB-2',
      client: 'Orb Data',
      title: 'Helios Tower Africa (HTA) • Claranet (CLUK)',
      summary:
        'ITM/ITNM Integrate ITM software and agents Integrate TDW (Tivoli Data warehouse) Manage and Integrate ITNM software along with nodes Creation of Alerts on IBM different servers Managing and Customizing alerts as per clients need Upgrades of ITM agents Daily Health checks of the system. Netcool OmnibusIntegration of Netcool Omnibus Installation and configuration of different Probes Support and service for existing infrastructure. Impact, Big Fix, Netcool Operations, Impact Policy creation and modification insight, Integration and Managed services of Big Fix, Integration and Support of NOI, Jazz Service Manager,  Managed services for Jazz SM',
      image: '../../../../../../assets/img/project-2.svg',
    },
    {
      industry: 'Textile & Manufacturer',
      softwareProducts: 'Hardware Support Services',
      technologies: 'Lenovo Servers',
      client: 'Ibrahim Fibre',
      title: 'Hardware Server Service Level Agreement',
      summary:
        'Ibrahim Fibre is hosting their critical business application on Lenovo Servers. Since these servers are out of warranty and support. Therefore,they requested to provide hardware support service of these 48 servers including preventive maintenance, fix packs patch upgrades or ant other hardware level issue like RAM, Hard Drives, Network Card o Motherboard and other associated issues.',
      image: '../../../../../../assets/img/project-3.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.filterCatagory = this.projectsData.map(
      (catagory) => catagory.softwareProducts
    );
    this.onClickAllData();
  }
  scroll(el: any) {
    scrollTOEl(el);
  }

  onClickForFilter(c: any) {
    console.log(c);

    // if (c == null) {
    //   this.filterData = this.projectsData;
    //   console.log('working', this.filterData);
    // } else

    if (c === 'Banking') this.activeClass = 'active';
    this.filterData = this.projectsData.filter((cat) => cat.softwareProducts == c);
    console.log(this.filterData);
  }
  onClickAllData() {
    this.filterData = this.projectsData;
  }
}
