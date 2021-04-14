import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInfoSectionComponent } from './sub-info-section.component';

describe('SubInfoSectionComponent', () => {
  let component: SubInfoSectionComponent;
  let fixture: ComponentFixture<SubInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
