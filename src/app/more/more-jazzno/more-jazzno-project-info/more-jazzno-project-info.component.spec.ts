import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazznoProjectInfoComponent } from './more-jazzno-project-info.component';

describe('MoreJazznoProjectInfoComponent', () => {
  let component: MoreJazznoProjectInfoComponent;
  let fixture: ComponentFixture<MoreJazznoProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazznoProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazznoProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
