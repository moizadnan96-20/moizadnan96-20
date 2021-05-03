import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorSectionComponent } from './anchor-section.component';

describe('AnchorSectionComponent', () => {
  let component: AnchorSectionComponent;
  let fixture: ComponentFixture<AnchorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
