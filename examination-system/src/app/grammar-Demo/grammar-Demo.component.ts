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
    "A1": ["am/is/are", "This/That/These/Those", "a/an", "Tense/Present simple", "Who/What/When/Where", "I/He/it", "We/You/They", "in/on/at", "His/Her/My/Our", "My/Their/Its/Your", "Do/Does/Did", "Always/Usually/Often/sometimes", "Tense/Past continuous", "always/Hardly/Never/none", "Can/Can't/could/couldn't", "Tense/Present Continuous", "Was/Were/when", "none/some/any", "much/many/none/a lot of", "a lot of/a little/a few/any/none", "Tense/Past simple", "next/under/between/in front of", "behind/over/next/opposite", "And/but/or/so/because", "Will/Shall/Would"],

    "A2": ["Has/Have/Had", "Tense/Past simple", "Tense/Past continuous", "although/because/so/but", "something/anything/nothing/always", "to/for/too/none", "Tense/Present Perfect", "Some/Any/No/every", "Too/too much/too many/enough", "Most/most of/the most", "shall/should/ shouldn't/would", "Tense/past participle", "get use to/Used to/didn't use to/use", "Might/might not/may/may not", "So/neither/either/as", "Tense/Past perfect", "Do/Make/Does"],

    "B1": ["Tense/present perfect continuous", "Tense/Future forms", "During/for/while/when", "Another/other/others/ the other/ the others", "bring up/come on/carry on/call for", "Tense/present perfect simple", "All/Both/either/neither/none", "Tense/Past Perfect", "For/since/from/to", "can/could/be able to/able", "set out/put out/rang up", "must/mustn't/have to/don't have to", "set up/put up/showed up", "least/less/more/few", "in/of/from", "can/will/could/shall"],

    "B2": ["Tense/ Present perfect simple", "have/has/had", "so many/such/so/so much/such a", "Whether/Even if/Suppose/supposing", "Tense/ Present perfect continuous", "verge/point of/Be due to/Be to", "Tense/future in the past", "Likely/unlikely/like/bound", "Whatever/whenever/wherever/whoever/however", "Pretty/rather/quite/fairly"],

    "C1": ["himself/oneself/myself/itself", "although/because/so/but", "something/anything/nothing/always", "Tense/Present Perfect continuous", "me/my/I/mine", "yourself/you/your", "ourself/us/themselves/our", "Wish/rather/if only/it's time", "Unless/In case/As long as", "only if/Whether/Even if", "Tense/ Present perfect continuous"],

    // "C2": ["Subject/Complex conditionals", "verbs/complex modal verbs", "Nouns/Advanced quanifiers", "Verbs/advanced adverbials", "Nouns/advnaced nounes", "Adjectives/adjective clauses", "Verbs/advnaced verb forms", "Verbs/Phrasal verbs"]
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
