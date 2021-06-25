import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePublicServiceQuestionSectionComponent } from './more-public-service-question-section.component';

describe('MorePublicServiceQuestionSectionComponent', () => {
  let component: MorePublicServiceQuestionSectionComponent;
  let fixture: ComponentFixture<MorePublicServiceQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePublicServiceQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePublicServiceQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
