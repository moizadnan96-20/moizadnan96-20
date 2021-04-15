import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraGridSectionComponent } from './jira-grid-section.component';

describe('JiraGridSectionComponent', () => {
  let component: JiraGridSectionComponent;
  let fixture: ComponentFixture<JiraGridSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraGridSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraGridSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
