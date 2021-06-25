import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFinanicalProjectInfoComponent } from './more-finanical-project-info.component';

describe('MoreFinanicalProjectInfoComponent', () => {
  let component: MoreFinanicalProjectInfoComponent;
  let fixture: ComponentFixture<MoreFinanicalProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFinanicalProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFinanicalProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
