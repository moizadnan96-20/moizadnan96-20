import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzsmProjectInfoComponent } from './more-jazzsm-project-info.component';

describe('MoreJazzsmProjectInfoComponent', () => {
  let component: MoreJazzsmProjectInfoComponent;
  let fixture: ComponentFixture<MoreJazzsmProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzsmProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzsmProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
