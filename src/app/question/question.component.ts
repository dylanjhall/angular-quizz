import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
@Input()  currentQuestion! : Question ;
questionForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.questionForm = fb.group({
      choice: ['', Validators.required]
    });
  }

  OnAnswer(ch:any){
    alert(ch);
  }

}
