import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game',
  imports: [ CommonModule, RouterModule, MatIconModule],
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

  getStars(score: number): ('completa' | 'metade' | 'vazia')[] {

    const estrela: ('completa' | 'metade' | 'vazia')[] = [];
    const estrelaCompleta = Math.floor(score);
    const meiaEstrela = score % 1 >= 0.25 && score % 1 < 0.75;
    const estrelaVazia = 5 - estrelaCompleta - (meiaEstrela ? 1 : 0);

    for (let i = 0; i < estrelaCompleta; i++) estrela.push('completa');
    if (meiaEstrela) estrela.push('metade');
    for (let i = 0; i < estrelaVazia; i++) estrela.push('vazia');

    return estrela;

  }


}
