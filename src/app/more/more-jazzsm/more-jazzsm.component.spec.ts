import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzsmComponent } from './more-jazzsm.component';

describe('MoreJazzsmComponent', () => {
  let component: MoreJazzsmComponent;
  let fixture: ComponentFixture<MoreJazzsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
