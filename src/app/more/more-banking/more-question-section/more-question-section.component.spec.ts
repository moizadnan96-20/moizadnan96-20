import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreQuestionSectionComponent } from './more-question-section.component';

describe('MoreQuestionSectionComponent', () => {
  let component: MoreQuestionSectionComponent;
  let fixture: ComponentFixture<MoreQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
