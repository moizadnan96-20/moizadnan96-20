import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopHeroComponent } from './devop-hero.component';

describe('DevopHeroComponent', () => {
  let component: DevopHeroComponent;
  let fixture: ComponentFixture<DevopHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
