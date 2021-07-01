var projectsData = [
  // for orb data
  {
    industry: 'System Integrator',
    softwareProducts: 'IBM Tivoli Monitoring (ITM)',
    technologies: 'IBM DB-2, Regex',
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
    technologies: 'SNMP, WebSphere',
    client: 'Orb Data',
    title: 'Helios Tower Africa (HTA), Claranet (CLUK), ITNM',
    summary: 'Manage and Integrate ITNM software along with nodes',
    image: '../../../../../../assets/img/project-2.svg',
    route: '/more/more-itnm',
  },
  {
    industry: 'System Integrator',
    softwareProducts: 'Software 	IBM Jazz SM',
    technologies: 'IBM DB-2',
    client: 'Orb Data',
    title: 'Helios Tower Africa (HTA), Claranet (CLUK), Jazz Service Manager',
    summary: 'Managed services for Jazz SM',
    image: '../../../../../../assets/img/project-2.svg',
    route: '/more/more-jazzsm',
  },
  {
    industry: 'System Integrator',
    softwareProducts: 'Netcool Omnibus, Impact, NOI',
    technologies: 'Perl, Shell, Java, SQL, IBM DB-2',
    client: 'Orb Data',
    title: 'Helios Tower Africa (HTA), Claranet (CLUK), Netcool Omnibus',
    summary: 'Integration of Netcool Omnibus Installation and configuration of different Probes Support and service for existing infrastructure, Netcool Operations insight Integration and Support of NOI',
    image: '../../../../../../assets/img/project-2.svg',
    route: '/more/more-netcool',
  },
  // for Jazz
  {
    industry: 'Telecommunication',
    softwareProducts: 'IBM Cognos and Birt',
    technologies: 'IBM-DB2, SQL',
    client: 'Jazz – Pakistan Mobile Communication Limited (PMCL)',
    title: 'IBM OSS Support and Consultancy',
    summary:
      '	IBM Cognos Custom reports development and data analytics. Birt Custom automated report creation',
    image: '../../../../../../assets/img/project-1.svg',
    route: '/more/more-icab',
  },
  {
    industry: 'Telecommunication',
    softwareProducts: 'IBM Tivoli Monitoring (ITM)',
    technologies: 'Tivoli Datawarehouse, IBM-DB2',
    client: 'Jazz – Pakistan Mobile Communication Limited (PMCL)',
    title: 'IBM Tivoli Monitoring (ITM)',
    summary:
      '	Monitoring of IBM platform and other nodes. Integrate ITM software and agents Integrate TDW (Tivoli Data warehouse) Managing Tivoli Data Warehouse Creation of Alerts on IBM different servers Managing and Customizing alerts as per clients need Upgrades of ITM agents Daily Health checks of the system',
    image: '../../../../../../assets/img/project-1.svg',
    route: '/more/more-jazzitm',
  },
  {
    industry: 'Telecommunication',
    softwareProducts: 'Netcool Omnibus',
    technologies: 'WebSphere, IBM-DB2, Perl, Shell, Java, Impact',
    client: 'Jazz – Pakistan Mobile Communication Limited (PMCL)',
    title: 'IBM OSS Support and Consultancy',
    summary:
      'Netcool Omnibus/Impact, Telco alarm monitoring, corelating and ticket creation. Alarms are received from multiple network monitoring systems that include (Huawei, Ericsson, ZTE, Nokia, etc.) on Netcool Omnibus, these are correlated according to the policies implemented in Impact and are sent to Maximo for ticketing according to relevant criteria. These tickets are then processed in automated alerts via email, SMS and call via third party solution.',
    image: '../../../../../../assets/img/project-1.svg',
    route: '/more/more-jazzno',
  },
  {
    industry: 'Telecommunication',
    softwareProducts: 'IBM Service Desk',
    technologies: 'WebSphere, IBM-DB2, Java, Python, Perl',
    client: 'Jazz – Pakistan Mobile Communication Limited (PMCL)',
    title: 'IBM OSS Support and Consultancy',
    summary:
      'IBM Service Desk (Maximo) IBM Service Desk is used for ticketing and multiple custom workflow applications.',
    image: '../../../../../../assets/img/project-1.svg',
    route: '/more/more-jazzisd',
  },
  {
    industry: 'Textile & Manufacturer',
    softwareProducts: 'Hardware Support Services',
    technologies: 'Lenovo Servers',
    client: 'Ibrahim Fibres',
    title: 'Hardware Server Service Level Agreement',
    summary:
      'Ibrahim Fibres is hosting their critical business application on Lenovo Servers. Since these servers are out of warranty and support. Therefore,they requested to provide hardware support service of these 48 servers including preventive maintenance, fix packs patch upgrades or ant other hardware level issue like RAM, Hard Drives, Network Card o Motherboard and other associated issues.',
    image: '../../../../../../assets/img/project-3.svg',
    route: '/more/more-industry',
  },
  // for development 
  {
    industry: 'Public Service',
    softwareProducts: 'Property Management Software',
    technologies: 'Angular, Ionic, Firebase',
    client: 'RentiD Limited',
    title: 'Property management software and letting agency services for residential landlords, property managers and tenants.',
    summary:
      'Property management software and letting agency services for residential landlords, property managers and tenants.',
    image: '../../../assets/Dia/rentid.png',
    route: '/more/more-public-service',
  },
  {
    industry: 'Financial Services',
    softwareProducts: 'Advance Industry Metrics',
    technologies: 'Firebase Authentication, Flutter, MySQL, Redis, Angular, Sequelize, NodeJS, FCM cloud messaging, RSA Encryption',
    client: 'Dominic Clover',
    title: 'Advance Industry Metrics for Law Firms',
    summary:
      'AIM which stands for advance industry metrics is designed to organization to submit their progress and compare their progress with industry average. Primary goal is to submit their data in encrypted form so no one can see their data other than organization itself.',
    image: '../../../assets/Dia/rentid.png',
    route: '/more/more-finanical',
  },
  {
    industry: 'Information Technology',
    softwareProducts: 'Ops Alert',
    technologies: 'Angular, Java Spring Framework (Boot, JPA, Messaging), Hibernate, PostgreSQL, PrimeNg, LDAP/Oauth2, Rest Client (for Inter Process Communication of microservices), Kafka (consumer, listener, streams), Cassandra (for big data), Jenkins (for CI/CD pipelines), Kubernetes (for service discovery, scaling and managing), Node ',
    client: 'Orb Data',
    title: 'Ops Alert',
    summary:
      '	Ops Alert is a cloud platform for enterprise monitoring.  It aims to both complement and act as a replacement or alternative for customers using IBM Netcool Operations Insight. Ops Alert intends to differentiate itself from other products in the market by Lowering the cost of enterprise monitoring,	Integrating non-traditional data into the monitoring environment,	Not being restricted by the volume of data being ingested,	Applying AI to automate the processing of data Providing enhanced service status visibility  ',
    image: '../../../assets/Dia/rentid.png',
    route: '/more/more-it',
  },
];

export default projectsData;
