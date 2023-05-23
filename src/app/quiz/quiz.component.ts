import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { ResultComponent} from '../result/result.component';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatButtonModule, QuestionComponent, ResultComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class quizComponent {

totalQuestions : number = 0;
currentQuestionIndex : number = 0;
score : number = 0;
showQuestions : Boolean  = false;
btnDisabled: Boolean = true;
showResults: Boolean = false;

currentQuestion! : Question ;
resetForm: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean> (false);

constructor(private quizservice: QuizService) {
  this.totalQuestions = this.quizservice.GetQuestionCount();

}

startQuiz(){
  this.totalQuestions = this.quizservice.GetQuestionCount();
  this.showQuestions = true;
  this.OnNextQuestion();
}

OnNextQuestion(){
  this.resetForm.next(true);
  if(this.currentQuestionIndex + 1 <= this.totalQuestions  ){
    this.currentQuestion = this.quizservice.ShowQuestion(this.currentQuestionIndex );
    this.currentQuestionIndex++;
  } else {
    this.showResults = true;
    this.showQuestions = false;
  }
}

OnAnswer(event?: string){
  console.debug(event)
    if(this.currentQuestion.answer === event){
      this.score++;
    }

    this.OnNextQuestion();

}

ToggleNextButton(){
  this.btnDisabled = !this.btnDisabled;
}

}
