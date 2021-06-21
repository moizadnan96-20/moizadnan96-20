import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIcabComponent } from './more-icab.component';

describe('MoreIcabComponent', () => {
  let component: MoreIcabComponent;
  let fixture: ComponentFixture<MoreIcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIcabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
