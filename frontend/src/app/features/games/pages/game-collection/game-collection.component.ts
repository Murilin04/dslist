import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameList } from '../../models/game-list.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-collection',
  imports: [CommonModule, RouterModule],
  templateUrl: './game-collection.component.html',
  styleUrl: './game-collection.component.css'
})
export class GameCollectionComponent {
  lists: GameList[] = [];

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.gameService.getGameList().subscribe(data => {
      this.lists = data;
    });
  }

}
