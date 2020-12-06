import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES
  public instruction: string = "Traduza a Frase"
  public answer: string = ''


  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0


  constructor() {
    this.refreshRound()

  }

  ngOnInit(): void {
  }

  public RefreshAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
    // console.log(this.answer)
  }

  public VerifyAnswer(): void {
    if (this.roundPhrase.PhrasePtbr == this.answer) {
      alert('A tradução está correta')

      //trocar pergunta da rodada
      this.round++

      //progresso
      this.progress = this.progress + (100 / this.phrases.length)
      console.log(this.progress)

      //att objeto rodadafrase
      this.refreshRound()

    } else {
      alert('A tradução está errada')
    }
  }

  public refreshRound(): void {

    //define a frase da rodada com base em alguma logica
    this.roundPhrase = this.phrases[this.round]
    //limpar resp
    this.answer = ''
  }
}
