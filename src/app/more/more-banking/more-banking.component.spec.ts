import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBankingComponent } from './more-banking.component';

describe('MoreBankingComponent', () => {
  let component: MoreBankingComponent;
  let fixture: ComponentFixture<MoreBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
