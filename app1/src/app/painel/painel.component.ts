import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public phrases: Phrase[] = PHRASES
  public instruction: string = "Traduza a Frase"
  public answer: string = ''


  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0

  public attempts: number = 3

  @Output() public EndGame: EventEmitter<string> = new EventEmitter()


  constructor() {
    this.refreshRound()

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Painel foi Destruido')
  }

  public RefreshAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
    // console.log(this.answer)
  }

  public VerifyAnswer(): void {
    if (this.roundPhrase.PhrasePtbr == this.answer) {

      //trocar pergunta da rodada
      this.round++

      //progresso
      this.progress = this.progress + (100 / this.phrases.length)
      // console.log(this.progress)

      //aviso vitoria
      if (this.round === 4) {
        this.EndGame.emit('Você Ganhou')
      }

      //att objeto rodadafrase
      this.refreshRound()

    } else {
      // diminuir o valor na variaveel attemps
      this.attempts--

      // console.log('Tentativas: ', this.attempts)
      if (this.attempts === -1) {
        this.EndGame.emit('Você Perdeu')
      }
    }
    console.log(this.attempts)
  }

  public refreshRound(): void {

    //define a frase da rodada com base em alguma logica
    this.roundPhrase = this.phrases[this.round]
    //limpar resp
    this.answer = ''
  }
}
