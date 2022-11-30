import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answers:any[] = [""];

  questions:any[] = [
    {
      "question": "I ______ bus on Mondays.",
      "choices": ["'m going to work with","'m going to work by","go to work with","go to work by"],
      "answer": "go to work by",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Sorry, but this chair is ______.",
      "choices": ["me","mine","my","our"],
      "answer": "mine",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "A: 'How old ______?'   B: 'I ______ .'",
      "choices": ["are you / am 20 years old.","have you / have 20 years old","are you / am 20 years.","do you have / have 20 years."],
      "answer": "are you / am 20 years old.",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I ______ to the cinema.",
      "choices": ["not usually go","don't usually go","don't go usually","do not go usually"],
      "answer": "don't usually go",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Where ______ ?",
      "choices": ["your sister works","your sister work","does your sister work","do your sister work"],
      "answer": "does your sister work",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "The test is ______ February.",
      "choices": ["in","at","on","over"],
      "answer": "in",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I eat pasta ______ week.",
      "choices": ["twice in a","twice a","one time a","once in a"],
      "answer": "twice a",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I don't have ______ free time.",
      "choices": ["many","any","a lot","some"],
      "answer": "any",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "A: '_____ to the cinema tomorrow?'",
      "choices": ["We will go","Do we go","We go","Shall we go"],
      "answer": "Shall we go",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "We went to the market ______ some vegetables.",
      "choices": ["to buy","for buy","for to buy","for buying"],
      "answer": "to buy",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    }
  ];
  constructor(private http:HttpClient) { 

  }

  getQuestions(){
    return this.questions;
  }
  setAnswers(answer:any){
    this.answers = answer;
  }
  getAnswers(){
    return this.answers;
  }
}
