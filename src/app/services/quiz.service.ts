import { Injectable } from '@angular/core';
import {Question } from '../interfaces/question';

interface QuestionItem extends Array<Question>{}
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions : Question[] =  [
   {
    id : 0,
    question : "What is an Angular Component?",
    options: [
      { id: "A", choice :"A service" },
      { id: "B", choice : "A template helper" },
      { id: "C", choice : "One or more files that contain an html template, styling and code" },
      { id: "D", choice : "None of the above" },
    ],
    answers : "C"
   },
   {
    id : 1,
    question : "What is the main language used to write code in the component class?",
    options: [
      { id: "A", choice :"HTML" },
      { id: "B", choice : "TypeScript" },
      { id: "C", choice : "SCSS" },
      { id: "D", choice : "Schematic Generators" },
      { id: "E", choice : "All of the above" },
    ],
    answers : "B"
   },

  ]

  constructor() { }

  GetQuestionCount(){
    return this.questions.length;
  }
  ShowQuestion(index: number){
    return this.questions[index];
  }
}
