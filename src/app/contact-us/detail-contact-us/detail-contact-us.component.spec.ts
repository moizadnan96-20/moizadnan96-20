import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactUsComponent } from './detail-contact-us.component';

describe('DetailContactUsComponent', () => {
  let component: DetailContactUsComponent;
  let fixture: ComponentFixture<DetailContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
