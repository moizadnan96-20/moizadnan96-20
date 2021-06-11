import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBankinngComponent } from './tech-bankinng.component';

describe('TechBankinngComponent', () => {
  let component: TechBankinngComponent;
  let fixture: ComponentFixture<TechBankinngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechBankinngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBankinngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
