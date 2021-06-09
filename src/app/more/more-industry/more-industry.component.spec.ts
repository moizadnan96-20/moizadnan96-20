import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIndustryComponent } from './more-industry.component';

describe('MoreIndustryComponent', () => {
  let component: MoreIndustryComponent;
  let fixture: ComponentFixture<MoreIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
