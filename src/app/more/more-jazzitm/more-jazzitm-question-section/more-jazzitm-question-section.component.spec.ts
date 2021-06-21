import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzitmQuestionSectionComponent } from './more-jazzitm-question-section.component';

describe('MoreJazzitmQuestionSectionComponent', () => {
  let component: MoreJazzitmQuestionSectionComponent;
  let fixture: ComponentFixture<MoreJazzitmQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzitmQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzitmQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
