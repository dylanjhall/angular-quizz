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
    answer : "C"
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
    answer : "B"
   },
   {
    id : 3,
    question : "What are the differences between Angular and AngularJS?",
    options: [
      { id: "A", choice :"The language used to develop AngularJS is javascript while in Angular it is TypeScript" },
      { id: "B", choice : "AngularJS is no longer supported" },
      { id: "C", choice : "AngularJS and Angular were developed by Google" },
      { id: "D", choice : "All of the above" }
    ],
    answer : "D"
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
