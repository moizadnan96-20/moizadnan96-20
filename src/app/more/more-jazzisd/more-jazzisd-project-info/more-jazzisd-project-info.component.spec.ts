import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzisdProjectInfoComponent } from './more-jazzisd-project-info.component';

describe('MoreJazzisdProjectInfoComponent', () => {
  let component: MoreJazzisdProjectInfoComponent;
  let fixture: ComponentFixture<MoreJazzisdProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzisdProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzisdProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
