import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyGirdSystemComponent } from './technology-gird-system.component';

describe('TechnologyGirdSystemComponent', () => {
  let component: TechnologyGirdSystemComponent;
  let fixture: ComponentFixture<TechnologyGirdSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyGirdSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyGirdSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
