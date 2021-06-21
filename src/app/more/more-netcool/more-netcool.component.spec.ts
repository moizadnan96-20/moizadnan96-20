import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNetcoolComponent } from './more-netcool.component';

describe('MoreNetcoolComponent', () => {
  let component: MoreNetcoolComponent;
  let fixture: ComponentFixture<MoreNetcoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreNetcoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreNetcoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
