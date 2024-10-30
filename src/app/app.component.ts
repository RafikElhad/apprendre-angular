import { Monster } from './models/monster.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = '';
  
  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N 0 234";
  }

  increasecount() {
    this.count++; 
  }
}
