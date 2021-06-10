import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIndustryQuestionsComponent } from './more-industry-questions.component';

describe('MoreIndustryQuestionsComponent', () => {
  let component: MoreIndustryQuestionsComponent;
  let fixture: ComponentFixture<MoreIndustryQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIndustryQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIndustryQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
