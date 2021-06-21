import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIcabQuestionSectionComponent } from './more-icab-question-section.component';

describe('MoreIcabQuestionSectionComponent', () => {
  let component: MoreIcabQuestionSectionComponent;
  let fixture: ComponentFixture<MoreIcabQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIcabQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIcabQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
