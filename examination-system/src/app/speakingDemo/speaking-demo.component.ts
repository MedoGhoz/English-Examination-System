import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/quesiton'
import { SpeechService } from '../services/speech2text.service';
import { MediaRecordHandler } from '../services/media-handler.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-speaking-demo',
  templateUrl: './speaking-demo.component.html',
  styleUrls: ['./speaking-demo.component.css', '../_themes/minty-bootstrap.min.css'],
  
})
export class SpeakingDemoComponent implements OnInit {

  isLoading = false;

  levels: string[]  = [ "A1", "A2", "B1", "B2", "C1" ]
  selectedLevel = ""
  sentence: string = ""
  sentenceId: string = ""
  transcript: any
  constructor(private speechService: SpeechService, public mediaRecorderHandler: MediaRecordHandler, public domSanitizer: DomSanitizer) { }
    ngOnInit() {
  }

  generate(selectedLevel: string): void {

    if(!selectedLevel) return
    console.log(selectedLevel)
    this.isLoading = true;

    this.speechService.generate(selectedLevel).subscribe(res => {
      this.sentence = res.sentence
      this.sentenceId = res.id
      this.isLoading = false
    })

  }


  async sendAudio() {
    if(!this.sentenceId) return
      const base64 = await this.blobToBase64(this.mediaRecorderHandler.blob)
      this.speechService.sendAudioToServer({
        id: this.sentenceId,
        audioBase64: base64
      }).subscribe((data) => {
        console.log(data)
        this.transcript = this.showMatching(data)
      })
  }

  
  getLevels(): string[] {
    return this.levels;
  }

  blobToBase64(blob: any) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Promise(resolve => {
        reader.onloadend = () => {
        const result = reader.result as string
        resolve(result.split(',')[1]);
        };
    });
  };

  toggleRecording(event: any) {
    const state = this.mediaRecorderHandler.toggle((text: string) => {
        event.target.textContent = text
        console.log('here')
    })
  }
  showMatching(matchedWords: any) {
    return matchedWords.map((word: any) => {
        return `<span style="color:${(word.matched) ? 'green' : 'red'}">${word.word}</span>`
    }).join(' ')
  }
}
