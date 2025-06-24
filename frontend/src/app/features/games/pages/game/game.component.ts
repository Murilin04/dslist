import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game',
  imports: [ CommonModule, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
    games: Game[] = [];

   constructor(private gameService: GameService,
               private route: ActivatedRoute
  ) {}



  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.gameService.getGame(gameId).subscribe(game => {
        this.games = [game];
      });
    }

  }


}
