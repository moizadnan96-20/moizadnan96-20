import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzisdQuestionSectionComponent } from './more-jazzisd-question-section.component';

describe('MoreJazzisdQuestionSectionComponent', () => {
  let component: MoreJazzisdQuestionSectionComponent;
  let fixture: ComponentFixture<MoreJazzisdQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzisdQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzisdQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
