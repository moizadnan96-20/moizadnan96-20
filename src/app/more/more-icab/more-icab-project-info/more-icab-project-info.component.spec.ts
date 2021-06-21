import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIcabProjectInfoComponent } from './more-icab-project-info.component';

describe('MoreIcabProjectInfoComponent', () => {
  let component: MoreIcabProjectInfoComponent;
  let fixture: ComponentFixture<MoreIcabProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreIcabProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIcabProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
