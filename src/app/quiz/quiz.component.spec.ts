import { ComponentFixture, TestBed } from '@angular/core/testing';

import { quizComponent } from './quiz.component';

describe('quizComponent', () => {
  let component: quizComponent;
  let fixture: ComponentFixture<quizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [quizComponent]
    });
    fixture = TestBed.createComponent(quizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
