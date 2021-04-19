import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLeadComponent } from './tech-lead.component';

describe('TechLeadComponent', () => {
  let component: TechLeadComponent;
  let fixture: ComponentFixture<TechLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
