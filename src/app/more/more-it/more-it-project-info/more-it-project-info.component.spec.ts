import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreItProjectInfoComponent } from './more-it-project-info.component';

describe('MoreItProjectInfoComponent', () => {
  let component: MoreItProjectInfoComponent;
  let fixture: ComponentFixture<MoreItProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreItProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreItProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
