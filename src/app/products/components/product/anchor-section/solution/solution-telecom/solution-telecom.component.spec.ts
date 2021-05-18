import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTelecomComponent } from './solution-telecom.component';

describe('SolutionTelecomComponent', () => {
  let component: SolutionTelecomComponent;
  let fixture: ComponentFixture<SolutionTelecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTelecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTelecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
