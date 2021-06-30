import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detail-contact-us',
  templateUrl: './detail-contact-us.component.html',
  styleUrls: ['./detail-contact-us.component.css']
})
export class DetailContactUsComponent implements OnInit {
  emailForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    workEmail: new FormControl('', Validators.required),
    workPhone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(private service:ContactService) { }

  ngOnInit(): void {
  }
 async createEmail(){
    console.log(this.emailForm.value);
   const response = await this.service.addEmail(this.emailForm.value);
   console.log(response);
   
    
  }
}
