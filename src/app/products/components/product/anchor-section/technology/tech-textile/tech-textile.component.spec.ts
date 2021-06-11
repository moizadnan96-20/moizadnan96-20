import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTextileComponent } from './tech-textile.component';

describe('TechTextileComponent', () => {
  let component: TechTextileComponent;
  let fixture: ComponentFixture<TechTextileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTextileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTextileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
