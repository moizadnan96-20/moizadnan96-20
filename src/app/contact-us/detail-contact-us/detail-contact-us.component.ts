import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  });
  constructor() { }

  ngOnInit(): void {
  }
  createEmail(){
    console.log(this.emailForm.value);
    
  }
}
