import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzitmProjectInfoComponent } from './more-jazzitm-project-info.component';

describe('MoreJazzitmProjectInfoComponent', () => {
  let component: MoreJazzitmProjectInfoComponent;
  let fixture: ComponentFixture<MoreJazzitmProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzitmProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzitmProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
