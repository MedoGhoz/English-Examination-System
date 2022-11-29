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
    },
    {
      "question": "Sorry, but when you called I ______ a shower.",
      "choices": ["had","did have","was having","were having"],
      "answer": "was having",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "______ are very friendly and very intelligent.",
      "choices": ["Dolphins","The dolphins","A dolphin","The dolphin"],
      "answer": "Dolphins",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Somebody stole ______ yesterday.",
      "choices": ["the car of my mother","my car mother","my mother's car","my mother car"],
      "answer": "my mother's car",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "______ with me?",
      "choices": ["Do you like to dance","Would you like to dance","Do you like dance","Would you like dancing"],
      "answer": "Would you like to dance",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "She is ______ her sister, I think.",
      "choices": ["more happier than","more happy that","happier that","happier than"],
      "answer": "happier than",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I couldn't eat ______ before the exam.",
      "choices": ["nothing","anything","everything","something"],
      "answer": "anything",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Please, pass me the remote. ______ TV.",
      "choices": ["I'm watching","I will watch","I'm going to watch","I might watch"],
      "answer": "I'm going to watch",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I'll call you when I ______ home.",
      "choices": ["arrive","'m going to arrive","will arrive","arrived"],
      "answer": "arrive",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "______ Japan?",
      "choices": ["Have you ever gone in","Do you have been in","Have you ever been to","Have you ever been into"],
      "answer": "Have you ever been to",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "He drives very ______.",
      "choices": ["slow","slower","more slowly","slowly"],
      "answer": "slowly",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Can you ______ the lights? I can't see.",
      "choices": ["open","turn on","start","put on"],
      "answer": "turn on",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "We couldn't find a taxi, ______ we walked home.",
      "choices": ["so","because","but","although"],
      "answer": "so",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Tomorrow I ______ get up early; it's my day off.",
      "choices": ["mustn't","must","haven't to","don't have to"],
      "answer": "don't have to",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I ______ this coffee. It tastes horrible.",
      "choices": ["am not like","don't like","'m not liking","not like"],
      "answer": "don't like",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "We ______ yesterday.",
      "choices": ["arrived","did arrive","have arrive","have arrived"],
      "answer": "arrived",
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
