import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTextileComponent } from './industry-textile.component';

describe('IndustryTextileComponent', () => {
  let component: IndustryTextileComponent;
  let fixture: ComponentFixture<IndustryTextileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryTextileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryTextileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
