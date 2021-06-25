import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreItQuestionSectionComponent } from './more-it-question-section.component';

describe('MoreItQuestionSectionComponent', () => {
  let component: MoreItQuestionSectionComponent;
  let fixture: ComponentFixture<MoreItQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreItQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreItQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
