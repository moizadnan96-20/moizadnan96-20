import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreITComponent } from './more-it.component';

describe('MoreITComponent', () => {
  let component: MoreITComponent;
  let fixture: ComponentFixture<MoreITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
