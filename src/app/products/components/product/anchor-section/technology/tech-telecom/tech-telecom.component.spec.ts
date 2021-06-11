import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTelecomComponent } from './tech-telecom.component';

describe('TechTelecomComponent', () => {
  let component: TechTelecomComponent;
  let fixture: ComponentFixture<TechTelecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTelecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTelecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
