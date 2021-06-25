import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePublicServiceProjectInfoComponent } from './more-public-service-project-info.component';

describe('MorePublicServiceProjectInfoComponent', () => {
  let component: MorePublicServiceProjectInfoComponent;
  let fixture: ComponentFixture<MorePublicServiceProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePublicServiceProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePublicServiceProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
