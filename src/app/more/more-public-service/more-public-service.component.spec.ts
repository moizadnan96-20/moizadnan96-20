import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePublicServiceComponent } from './more-public-service.component';

describe('MorePublicServiceComponent', () => {
  let component: MorePublicServiceComponent;
  let fixture: ComponentFixture<MorePublicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePublicServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePublicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
