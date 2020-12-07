import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public InProgressGame: boolean = true
  public typeEnd: string

  public EndGame(type: string): void {
    this.InProgressGame = false
    this.typeEnd = type
  }
  public resetGame(): void {
    this.InProgressGame = true
    this.typeEnd = undefined
  }

}
