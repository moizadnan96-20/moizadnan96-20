import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBankingQuestionsComponent } from './more-banking-questions.component';

describe('MoreBankingQuestionsComponent', () => {
  let component: MoreBankingQuestionsComponent;
  let fixture: ComponentFixture<MoreBankingQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBankingQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBankingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
