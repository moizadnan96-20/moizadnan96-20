import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomListComponent } from './telecom-list.component';

describe('TelecomListComponent', () => {
  let component: TelecomListComponent;
  let fixture: ComponentFixture<TelecomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelecomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
