import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameMin } from '../../models/game-min.model';
import { GameService } from '../../services/game.service';
import { GameList } from '../../models/game-list.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gamelist',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: GameMin[] = [];
  listName = '';

  constructor(private gameService: GameService,
              private route: ActivatedRoute
  ) {}



  ngOnInit(): void {
    const listId = this.route.snapshot.paramMap.get('id');
    if (listId) {
      // Buscar nome da lista
      this.gameService.getGameList().subscribe(lists => {
        const lista = lists.find(list => String(list.id) === listId);
        if (lista) {
          this.listName = lista.name;
        }
      });
      // Buscar games da lista
      this.gameService.getGamesByListId(listId).subscribe(games => {
        this.games = games;
      });
  }
  }

}
