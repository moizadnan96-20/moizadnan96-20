import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzisdComponent } from './more-jazzisd.component';

describe('MoreJazzisdComponent', () => {
  let component: MoreJazzisdComponent;
  let fixture: ComponentFixture<MoreJazzisdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzisdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzisdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
