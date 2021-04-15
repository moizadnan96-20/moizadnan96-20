import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmGirdSectionComponent } from './ibm-gird-section.component';

describe('IbmGirdSectionComponent', () => {
  let component: IbmGirdSectionComponent;
  let fixture: ComponentFixture<IbmGirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmGirdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmGirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
