import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyUpdatesComponent } from './technology-updates.component';

describe('TechnologyUpdatesComponent', () => {
  let component: TechnologyUpdatesComponent;
  let fixture: ComponentFixture<TechnologyUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
