import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule, MatButtonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
@Input()  currentQuestion! : Question ;
@Output('userChoice') userChoice: EventEmitter<string> = new EventEmitter<string>();
questionForm!: FormGroup;


  constructor(fb: FormBuilder) {
    this.questionForm = fb.group({
      answerchoice: ['', Validators.required]
    });
  }


  OnCheckAnswer(){
    console.debug( this.questionForm.controls['answerchoice'].value);
    this.userChoice.emit(this.questionForm.controls['answerchoice'].value);
  }

}
