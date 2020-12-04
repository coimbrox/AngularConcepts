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
  public answer: string


  constructor() { console.log(this.phrases) }

  ngOnInit(): void {
  }

  public RefreshAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
    // console.log(this.answer)
  }

  public VerifyAnswer(): void {
    console.log('Verificar Resposta: ', this.answer)
  }
}
