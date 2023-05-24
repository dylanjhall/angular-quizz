import { QuestionOptions } from "./question-options";

export interface Question {
  "id" : number,
  "question" : string,
  "options" : QuestionOptions[],
  "answer" : string
}

