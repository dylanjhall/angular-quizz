import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Question } from '../interfaces/question';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, filter } from 'rxjs';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule, MatButtonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
@Input()  currentQuestion! : Question;
@Input()  clearForm$: Observable<Boolean> =  new Observable<Boolean>();
@Output('userChoice') userChoice: EventEmitter<string> = new EventEmitter<string>();
questionForm!: FormGroup;
btnDisabled: Boolean = false;


  constructor(fb: FormBuilder) {
    this.questionForm = fb.group({
      answerchoice: ['', Validators.required]
    });
  }
  ngOnInit(): void {
     var sub = this.clearForm$
     .pipe(filter((v)=>  (v === true)))
     .subscribe((v) =>   this.OnResetForm()  );
  }

 // should check answer here
  OnCheckAnswer(){
    const chosenAnswer = this.questionForm.controls['answerchoice'].value;
    if(this.currentQuestion.answer === chosenAnswer ){
      this.userChoice.emit(chosenAnswer);
      this.btnDisabled = true;
    }


  }

  OnResetForm(){
    this.btnDisabled = false;
    this.questionForm.reset();
  }

}
