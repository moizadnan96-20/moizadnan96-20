import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyworkSectionComponent } from './technologywork-section.component';

describe('TechnologyworkSectionComponent', () => {
  let component: TechnologyworkSectionComponent;
  let fixture: ComponentFixture<TechnologyworkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyworkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyworkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
