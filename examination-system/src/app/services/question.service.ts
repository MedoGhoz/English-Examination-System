import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answers: any[] = [""];

  questions: any[] = [
        {
      "title": "What's your job?",
      "header": "https://www.youtube.com/watch?v=ad2qjy5w8BM",
      "questions": [
        {
          "question": "James is a _____",
          "choices": ["pilot", "flight attendant", "airport cleaner"],
          "answer": "flight attendant",
          "type": "MCQ"
        },
        {
          "question": "James _____",
          "choices": [
            "is from a different country",
            "cleans uniforms",
            "travels a lot"
          ],
          "answer": "travels a lot",
          "type": "MCQ"
        },
        {
          "question": "Anna is a _____",
          "choices": ["teacher", "school bus driver", "children's coach"],
          "answer": "teacher",
          "type": "MCQ"
        },
        {
          "question": "Anna _____",
          "choices": [
            "doesn't like some children very much",
            "has to do some work in the evenings",
            "only works in the mornings"
          ],
          "answer": "has to do some work in the evenings",
          "type": "MCQ"
        },
        {
          "question": "Phil is a _____",
          "choices": ["receptionist", "hotel manager", "chef"],
          "answer": "chef",
          "type": "MCQ"
        },
        {
          "question": "Phil _____",
          "choices": [
            "works in a small hotel",
            "doesn't like his work",
            "would like to work at a different place in the future"
          ],
          "answer": "would like to work at a different place in the future",
          "type": "MCQ"
        },
        {
          "question": "Lucy is a _____",
          "choices": ["waitress", "manager", "store assistant"],
          "answer": "store assistant",
          "type": "MCQ"
        },
        {
          "question": "Lucy _____",
          "choices": [
            "hates her uniform",
            "likes her job",
            "doesn't like her job"
          ],
          "answer": "doesn't like her job",
          "type": "MCQ"
        },
        {
          "question": "Dan is a ___",
          "choices": ["nurse", "hospital cleaner", "teacher"],
          "answer": "nurse",
          "type": "MCQ"
        },
        {
          "question": "Dan _____",
          "choices": [
            "always works in the day",
            "needs to take medicine",
            "plays with the children"
          ],
          "answer": "plays with the children",
          "type": "MCQ"
        }
      ],
      "hasImage": false,
      "ImageURL": "",
      "category": "Listening",
      "level": "A1",
      "authorId": 1
    },
        {
      "title": "Memories of my first day at school",
      "header": "I remember my first day at school very well. I knew the school quite well because my older sister, Sandy, went there and every day, dad and I met her at the school gate after school. Every day, she ran out of the school with her friends. She often carried a painting. I felt jealous. I wanted to paint too!\nI was five years old when I started school. Most children in my class started school in September, but I started school in January, when I was five years old, because my birthday is in December. Three other kids started school on the same day as me. I was excited about my first day. I had my new uniform: a black skirt, a white t-shirt and green jumper, and a new red bag. When we arrived that day, a teacher met the new children at the school gate. Dad hugged me and said goodbye. I stood with the other children. I didn’t talk to them because I was too nervous. Then, Mrs Wilson took us to our classroom. All the other children were already there. They looked at us when we entered the room. When thirty children looked at me, I started to cry!\nBut I wasn’t upset for long. I sat with the other children on the carpet and the class teacher, Miss Holland, read us a story. Later, we drew pictures with coloured pencils, and at break time, I made friends with a girl called Megan. At the end of the day, I ran to the school gate with Megan and my picture, just like Sandy always did.",
      "questions": [
        {
          "question": "The writer was jealous of Sandy because she _____ at school",
          "choices": ["learned to write", "painted pictures", "had many friends"],
          "answer": "painted pictures",
          "type": "MCQ"
        },
        {
          "question": "The writer started school in ___.",
          "choices": ["September", "December", "January"],
          "answer": "January",
          "type": "MCQ"
        },
        {
          "question": "The writer and ___ other children started school that day.",
          "choices": [
            "three",
            "five",
            "thirty"
          ],
          "answer": "three",
          "type": "MCQ"
        },
        {
          "question": "Before the writer started school, she felt ___.",
          "choices": [
            "excited",
            "nervous",
            "upset"
          ],
          "answer": "excited",
          "type": "MCQ"
        },
        {
          "question": "The writer started to cry when ___.",
          "choices": [
            "her father left.",
            "other children looked at her",
            "she entered the school"
          ],
          "answer": "other children looked at her",
          "type": "MCQ"
        },
        {
          "question": "On the first day, the writer ___.",
          "choices": [
            "learned to read",
            "listened to a story",
            "painted a picture"
          ],
          "answer": "listened to a story",
          "type": "MCQ"
        }
        
      ],
      "hasImage": false,
      "ImageURL": "",
      "category": "Reading",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I ______ bus on Mondays.",
      "choices": ["'m going to work with", "'m going to work by", "go to work with", "go to work by"],
      "answer": "go to work by",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Sorry, but this chair is ______.",
      "choices": ["me", "mine", "my", "our"],
      "answer": "mine",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "A: 'How old ______?'   B: 'I ______ .'",
      "choices": ["are you / am 20 years old.", "have you / have 20 years old", "are you / am 20 years.", "do you have / have 20 years."],
      "answer": "are you / am 20 years old.",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I ______ to the cinema.",
      "choices": ["not usually go", "don't usually go", "don't go usually", "do not go usually"],
      "answer": "don't usually go",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "Where ______ ?",
      "choices": ["your sister works", "your sister work", "does your sister work", "do your sister work"],
      "answer": "does your sister work",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "The test is ______ February.",
      "choices": ["in", "at", "on", "over"],
      "answer": "in",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I eat pasta ______ week.",
      "choices": ["twice in a", "twice a", "one time a", "once in a"],
      "answer": "twice a",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "I don't have ______ free time.",
      "choices": ["many", "any", "a lot", "some"],
      "answer": "any",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "A: '_____ to the cinema tomorrow?'",
      "choices": ["We will go", "Do we go", "We go", "Shall we go"],
      "answer": "Shall we go",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    },
    {
      "question": "We went to the market ______ some vegetables.",
      "choices": ["to buy", "for buy", "for to buy", "for buying"],
      "answer": "to buy",
      "type": "MCQ",
      "category": "Grammar",
      "level": "A1",
      "authorId": 1
    }
    // ,
    // {
    //   "title": "What's your job?",
    //   "header": "https://www.youtube.com/watch?v=ad2qjy5w8BM",
    //   "questions": [
    //     {
    //       "question": "James is a _____",
    //       "choices": ["pilot", "flight attendant ", "airport cleaner"],
    //       "answer": "flight attendant",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "James _____",
    //       "choices": [
    //         "is from a different country",
    //         "cleans uniforms",
    //         "travels a lot"
    //       ],
    //       "answer": "travels a lot",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Anna is a _____",
    //       "choices": ["teacher", "school bus driver", "children's coach"],
    //       "answer": "teacher",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Anna _____",
    //       "choices": [
    //         "doesn't like some children very much",
    //         "has to do some work in the evenings",
    //         "only works in the mornings"
    //       ],
    //       "answer": "has to do some work in the evenings",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Phil is a _____",
    //       "choices": ["receptionist", "hotel manager", "chef"],
    //       "answer": "chef",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Phil _____",
    //       "choices": [
    //         "works in a small hotel",
    //         "doesn't like his work",
    //         "would like to work at a different place in the future"
    //       ],
    //       "answer": "would like to work at a different place in the future",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Lucy is a _____",
    //       "choices": ["waitress", "manager", "store assistant"],
    //       "answer": "store assistant",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Lucy _____",
    //       "choices": [
    //         "hates her uniform",
    //         "likes her job",
    //         "doesn't like her job"
    //       ],
    //       "answer": "doesn't like her job",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Dan is a ___",
    //       "choices": ["nurse", "hospital cleaner", "teacher"],
    //       "answer": "nurse",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Dan _____",
    //       "choices": [
    //         "always works in the day",
    //         "needs to take medicine",
    //         "plays with the children"
    //       ],
    //       "answer": "plays with the children",
    //       "type": "MCQ"
    //     }
    //   ],
    //   "hasImage": false,
    //   "ImageURL": "",
    //   "category": "Listening",
    //   "level": "A1",
    //   "authorId": 1
    // },
    // {
    //   "title": "Memories of my first day at school",
    //   "header": "I remember my first day at school very well. I knew the school quite well because my older sister, Sandy, went there and every day, dad and I met her at the school gate after school. Every day, she ran out of the school with her friends. She often carried a painting. I felt jealous. I wanted to paint too!\nI was five years old when I started school. Most children in my class started school in September, but I started school in January, when I was five years old, because my birthday is in December. Three other kids started school on the same day as me. I was excited about my first day. I had my new uniform: a black skirt, a white t-shirt and green jumper, and a new red bag. When we arrived that day, a teacher met the new children at the school gate. Dad hugged me and said goodbye. I stood with the other children. I didn’t talk to them because I was too nervous. Then, Mrs Wilson took us to our classroom. All the other children were already there. They looked at us when we entered the room. When thirty children looked at me, I started to cry!\nBut I wasn’t upset for long. I sat with the other children on the carpet and the class teacher, Miss Holland, read us a story. Later, we drew pictures with coloured pencils, and at break time, I made friends with a girl called Megan. At the end of the day, I ran to the school gate with Megan and my picture, just like Sandy always did.",
    //   "questions": [
    //     {
    //       "question": "The writer was jealous of Sandy because she _____ at school",
    //       "choices": ["learned to write", "painted pictures", "had many friends"],
    //       "answer": "painted pictures",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "The writer started school in ___.",
    //       "choices": ["September", "December", "January"],
    //       "answer": "January",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "The writer and ___ other children started school that day.",
    //       "choices": [
    //         "three",
    //         "five",
    //         "thirty"
    //       ],
    //       "answer": "three",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "Before the writer started school, she felt ___.",
    //       "choices": [
    //         "excited",
    //         "nervous",
    //         "upset"
    //       ],
    //       "answer": "excited",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "The writer started to cry when ___.",
    //       "choices": [
    //         "her father left.",
    //         "other children looked at her",
    //         "she entered the school"
    //       ],
    //       "answer": "other children looked at her",
    //       "type": "MCQ"
    //     },
    //     {
    //       "question": "On the first day, the writer ___.",
    //       "choices": [
    //         "learned to read",
    //         "listened to a story",
    //         "painted a picture"
    //       ],
    //       "answer": "listened to a story",
    //       "type": "MCQ"
    //     }
        
    //   ],
    //   "hasImage": false,
    //   "ImageURL": "",
    //   "category": "Reading",
    //   "level": "A1",
    //   "authorId": 1
    // },
  ];
  constructor(private http: HttpClient) {
    
  }

  getQuestions() {
    return this.questions;
  }
  setAnswers(answer: any) {
    this.answers = answer;
  }
  getAnswers() {
    return this.answers;
  }
}
