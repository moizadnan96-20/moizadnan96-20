import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreJazznoComponent } from './more-jazzno.component';

describe('MoreJazznoComponent', () => {
  let component: MoreJazznoComponent;
  let fixture: ComponentFixture<MoreJazznoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreJazznoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreJazznoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
