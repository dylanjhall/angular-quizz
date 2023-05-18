import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule, MatButtonModule, QuestionComponent],
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {

totalQuestions : number = 0;
currentQuestionIndex : number = 0;
score : number = 0;
showQuestions : Boolean  = false;

currentQuestion! : Question ;

constructor(private quizservice: QuizService) {
  this.totalQuestions = this.quizservice.GetQuestionCount();

}

startQuiz(){
  this.totalQuestions = this.quizservice.GetQuestionCount();
  this.showQuestions = true;
}

OnNextQuestion(){
  if(this.currentQuestionIndex + 1 <= this.totalQuestions  ){
    this.currentQuestion = this.quizservice.ShowQuestion(this.currentQuestionIndex );
    console.debug(this.currentQuestion);

    this.currentQuestionIndex++;
  } else {
    alert("all done");
  }
}

}
