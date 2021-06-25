import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFinanicalComponent } from './more-finanical.component';

describe('MoreFinanicalComponent', () => {
  let component: MoreFinanicalComponent;
  let fixture: ComponentFixture<MoreFinanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFinanicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFinanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
