import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIndustryProjectInfoComponent } from './more-industry-project-info.component';

describe('MoreIndustryProjectInfoComponent', () => {
  let component: MoreIndustryProjectInfoComponent;
  let fixture: ComponentFixture<MoreIndustryProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIndustryProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIndustryProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
