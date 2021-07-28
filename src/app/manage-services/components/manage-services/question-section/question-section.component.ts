import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class QuestionSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
    console.log(AOS.init());
  }
}
