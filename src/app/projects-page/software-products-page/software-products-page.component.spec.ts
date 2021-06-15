import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProductsPageComponent } from './software-products-page.component';

describe('SoftwareProductsPageComponent', () => {
  let component: SoftwareProductsPageComponent;
  let fixture: ComponentFixture<SoftwareProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
