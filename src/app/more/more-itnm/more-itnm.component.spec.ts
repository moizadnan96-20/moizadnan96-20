import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreItnmComponent } from './more-itnm.component';

describe('MoreItnmComponent', () => {
  let component: MoreItnmComponent;
  let fixture: ComponentFixture<MoreItnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreItnmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreItnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
