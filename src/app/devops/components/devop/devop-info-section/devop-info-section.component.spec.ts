import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopInfoSectionComponent } from './devop-info-section.component';

describe('DevopInfoSectionComponent', () => {
  let component: DevopInfoSectionComponent;
  let fixture: ComponentFixture<DevopInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
