import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/quesiton'
import { GrammarDemoService } from '../services/grammar-Demo.service';
import { GrammarDemoRequest } from '../_models/GrammarDemoRequest';

@Component({
  selector: 'app-grammar-Demo',
  templateUrl: './grammar-Demo.component.html',
  styleUrls: ['./grammar-Demo.component.css', '../_themes/minty-bootstrap.min.css']
})
export class GrammarDemoComponent implements OnInit {

  questions: Question[] = [];
  isLoading = false;

  Topics: { [key: string]: string[] } = {
    A1: [
      "am/is/are_Verb 'to be'",
      "This/That/These/Those_Demonstrative Pronouns",
      "a/an_Articles",
      "Tense/Present simple_Present Simple Tense",
      "Who/What/When/Where_Interrogative Pronouns",
      "I/He/it_Subject Pronouns (1st and 3rd person)",
      "We/You/They_Subject Pronouns (2nd and plural)",
      "in/on/at_Prepositions of Place",
      "His/Her/My/Our_Possessive Adjectives",
      "My/Their/Its/Your_Possessive Pronouns",
      "Do/Does/Did_Auxiliary Verbs for Questions and Negations",
      "Always/Usually/Often/sometimes_Adverbs of Frequency",
      "Tense/Past continuous_Past Continuous Tense",
      "always/Hardly/Never/none_Negative Adverbs",
      "Can/Can't/could/couldn't_Modal Verbs for Ability and Permission",
      "Tense/Present Continuous_Present Continuous Tense",
      "Was/Were/when_Past Tense of 'to be'",
      "none/some/any_Quantifiers",
      "much/many/none/a lot of_Quantifiers",
      "a lot of/a little/a few/any/none_Quantifiers",
      "Tense/Past simple_Past Simple Tense",
      "next/under/between/in front of_Prepositions of Place",
      "behind/over/next/opposite_Prepositions of Place",
      "And/but/or/so/because_Coordinating Conjunctions",
      "Will/Shall/Would_Future Tense and Conditional Mood",
      "me/my/I/mine_Object Pronouns and Possessive Pronouns"
    ],

    A2: [
      "Has/Have/Had_Present Perfect Tense",
      "Tense/Past simple_Past Simple Tense",
      "Tense/Past continuous_Past Continuous Tense",
      "although/because/so/but_Conjunctions of Contrast",
      "something/anything/nothing/always_Indefinite Pronouns and Adverbs",
      "to/for/too/none_Prepositions and Adverbs",
      "Tense/Present Perfect_Present Perfect Tense",
      "Some/Any/No/every_Quantifiers",
      "Too/too much/too many/enough_Quantifiers and Adverbs",
      "Most/most of/the most_Quantifiers",
      "shall/should/ shouldn't/would_Modal Verbs for Advice and Obligation",
      "Tense/past participle_Past Participles",
      "get use to/Used to/didn't use to/use_Expressions and Verb Forms",
      "Might/might not/may/may not_Modal Verbs for Possibility and Probability",
      "So/neither/either/as_Coordinating Conjunctions",
      "Tense/Past perfect_Past Perfect Tense",
      "Do/Make/Does_Common Verbs"
    ],

    B1: [
      "Tense/present perfect continuous_Present Perfect Continuous Tense",
      "Tense/Future forms_Future Tense",
      "During/for/while/when_Prepositions of Time",
      "Another/other/others/ the other/ the others_Determiners and Pronouns",
      "bring up/come on/carry on/call for_Phrasal Verbs and Expressions",
      "Tense/present perfect simple_Present Perfect Simple Tense",
      "All/Both/either/neither/none_Determiners and Pronouns",
      "Tense/Past Perfect_Past Perfect Tense",
      "For/since/from/to_Prepositions of Time",
      "can/could/be able to/able_Modal Verbs for Ability and Permission",
      "set out/put out/rang up_Phrasal Verbs and Expressions",
      "must/mustn't/have to/don't have to_Modal Verbs for Necessity and Prohibition",
      "set up/put up/showed up_Phrasal Verbs and Expressions",
      "least/less/more/few_Comparatives and Superlatives",
      "in/of/from_Prepositions",
      "can/will/could/shall_Modal Verbs for Ability and Future"
    ],

    B2: [
      "Tense/ Present perfect simple_Present Perfect Simple Tense",
      "have/has/had_Auxiliary Verbs",
      "so many/such/so/so much/such a_Intensifiers",
      "Whether/Even if/Suppose/supposing_Conditional Conjunctions",
      "Tense/ Present perfect continuous_Present Perfect Continuous Tense",
      "verge/point of/Be due to/Be to_Phrasal Verbs and Expressions",
      "Tense/future in the past_Future in the Past Tense",
      "Likely/unlikely/like/bound_Adjectives and Adverbs",
      "Whatever/whenever/wherever/whoever/however_Relative Pronouns and Adverbs",
      "Pretty/rather/quite/fairly_Adverbs"
    ],

    C1: [
      "himself/oneself/myself/itself_Reflexive Pronouns",
      "although/because/so/but_Conjunctions",
      "something/anything/nothing/always_Indefinite Pronouns and Adverbs",
      "Tense/Present Perfect continuous_Present Perfect Continuous Tense",
      "me/my/I/mine_Object Pronouns and Possessive Pronouns",
      "yourself/you/your_Object Pronouns and Possessive Pronouns",
      "ourself/us/themselves/our_Reflexive and Object Pronouns",
      "Wish/rather/if only/it's time_Wish and Conditional Expressions",
      "Unless/In case/As long as_Conditional Conjunctions",
      "only if/Whether/Even if_Conditional Conjunctions",
      "Tense/ Present perfect continuous_Present Perfect Continuous Tense"
    ]
  };
  selectedKey: string = "";
  selectedValue: string = "";
  constructor(private grammarDemoService: GrammarDemoService) { }
  ngOnInit() {
  }

  generate(sentence: string, level: string, topic: string): void {

    if (!sentence) { return; }

    let req = new GrammarDemoRequest()
    req.sentence = sentence.trim()
    req.level = level
    req.topic = topic

    this.questions = []
    this.isLoading = true;
    this.grammarDemoService.generate(req)
      .subscribe(questions => {
        this.isLoading = false;
        this.questions = []
        for (let i = 0; i < questions.length; i++) {
          const questionJson = questions[i];
          this.questions.push(JSON.parse(JSON.stringify(questionJson)))
        }
      },
        error => {
          this.isLoading = false;
        }
      );
  }

  checkAnswer(quesiton: Question, answer: string) {
    return quesiton.answer == answer
  }
  getKeys(): string[] {
    return Object.keys(this.Topics);
  }
}
