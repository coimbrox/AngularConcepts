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


  constructor() { console.log(this.phrases) }

  ngOnInit(): void {
  }

  public RefreshAnswer(): void {
    console.log('teste')
  }

}
