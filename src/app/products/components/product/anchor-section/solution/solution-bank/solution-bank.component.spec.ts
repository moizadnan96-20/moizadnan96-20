import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionBankComponent } from './solution-bank.component';

describe('SolutionBankComponent', () => {
  let component: SolutionBankComponent;
  let fixture: ComponentFixture<SolutionBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
