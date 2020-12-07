import { Component, OnInit, Input } from '@angular/core';
import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  // public EmptyHeart: string = '../../assets/coracao_vazio.png'
  // public FullHeart: string = '../../assets/coracao_cheio.png'

  @Input() public attemps: number


  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  constructor() {
    console.log(this.hearts)

  }

  ngOnInit() {
    console.log('Tentativas recebidas do Painel', this.attemps)
  }


}
