import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detail-contact-us',
  templateUrl: './detail-contact-us.component.html',
  styleUrls: ['./detail-contact-us.component.css']
})
export class DetailContactUsComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	// tooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
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
   const response = await this.service.addEmail({...this.emailForm.value, workPhone: this.emailForm.value.workPhone.e164Number});
   console.log(response);
   
    
  }
}
