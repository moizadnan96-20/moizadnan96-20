import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingSectionComponent } from './networking-section.component';

describe('NetworkingSectionComponent', () => {
  let component: NetworkingSectionComponent;
  let fixture: ComponentFixture<NetworkingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
