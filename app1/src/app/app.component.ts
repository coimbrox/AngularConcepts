import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public InProgressGame: boolean = true

  public EndGame(type: string): void {
    console.log(type);
    this.InProgressGame = false
  }
}
