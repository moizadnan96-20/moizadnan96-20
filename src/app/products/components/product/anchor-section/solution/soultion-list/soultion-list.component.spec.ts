import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoultionListComponent } from './soultion-list.component';

describe('SoultionListComponent', () => {
  let component: SoultionListComponent;
  let fixture: ComponentFixture<SoultionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoultionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoultionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
