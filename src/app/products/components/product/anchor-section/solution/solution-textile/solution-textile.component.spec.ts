import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTextileComponent } from './solution-textile.component';

describe('SolutionTextileComponent', () => {
  let component: SolutionTextileComponent;
  let fixture: ComponentFixture<SolutionTextileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTextileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTextileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
