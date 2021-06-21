import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNetcoolQuestionSectionComponent } from './more-netcool-question-section.component';

describe('MoreNetcoolQuestionSectionComponent', () => {
  let component: MoreNetcoolQuestionSectionComponent;
  let fixture: ComponentFixture<MoreNetcoolQuestionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreNetcoolQuestionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreNetcoolQuestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
