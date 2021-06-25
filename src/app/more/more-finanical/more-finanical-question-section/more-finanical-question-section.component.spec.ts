import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFinanicalQuestionSectionComponent } from './more-finanical-question-section.component';

describe('MoreFinanicalQuestionSectionComponent', () => {
  let component: MoreFinanicalQuestionSectionComponent;
  let fixture: ComponentFixture<MoreFinanicalQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFinanicalQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFinanicalQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
