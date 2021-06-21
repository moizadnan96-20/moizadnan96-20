import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazznoQuestionSectionComponent } from './more-jazzno-question-section.component';

describe('MoreJazznoQuestionSectionComponent', () => {
  let component: MoreJazznoQuestionSectionComponent;
  let fixture: ComponentFixture<MoreJazznoQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazznoQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazznoQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
