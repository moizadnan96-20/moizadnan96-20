import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBankingProjectInfoComponent } from './more-banking-project-info.component';

describe('MoreBankingProjectInfoComponent', () => {
  let component: MoreBankingProjectInfoComponent;
  let fixture: ComponentFixture<MoreBankingProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBankingProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBankingProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
