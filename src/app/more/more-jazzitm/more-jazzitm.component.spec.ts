import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazzitmComponent } from './more-jazzitm.component';

describe('MoreJazzitmComponent', () => {
  let component: MoreJazzitmComponent;
  let fixture: ComponentFixture<MoreJazzitmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazzitmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazzitmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
