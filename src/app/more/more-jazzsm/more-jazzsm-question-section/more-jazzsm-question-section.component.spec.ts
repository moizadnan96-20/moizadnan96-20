import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzsmQuestionSectionComponent } from './more-jazzsm-question-section.component';

describe('MoreJazzsmQuestionSectionComponent', () => {
  let component: MoreJazzsmQuestionSectionComponent;
  let fixture: ComponentFixture<MoreJazzsmQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzsmQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzsmQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
