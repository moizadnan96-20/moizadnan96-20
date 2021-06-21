import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProjectInfoComponent } from './more-project-info.component';

describe('MoreProjectInfoComponent', () => {
  let component: MoreProjectInfoComponent;
  let fixture: ComponentFixture<MoreProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
