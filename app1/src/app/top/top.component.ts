import { Component } from '@angular/core'

//Decorator - Permite encaminhar Metadados por JSON ou js
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']

})

export class TopComponent {
  public title: string = 'Aprendendo Inglês'
}
