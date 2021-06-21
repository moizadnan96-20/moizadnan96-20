import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNetcoolProjectInfoComponent } from './more-netcool-project-info.component';

describe('MoreNetcoolProjectInfoComponent', () => {
  let component: MoreNetcoolProjectInfoComponent;
  let fixture: ComponentFixture<MoreNetcoolProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreNetcoolProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreNetcoolProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
