import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyQuestionsComponent } from './technology-questions.component';

describe('TechnologyQuestionsComponent', () => {
  let component: TechnologyQuestionsComponent;
  let fixture: ComponentFixture<TechnologyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
