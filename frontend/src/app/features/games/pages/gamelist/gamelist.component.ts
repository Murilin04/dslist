import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameMin } from '../../models/game-min.model';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { ReplacementDTO } from '../../models/replacementDTO';

@Component({
  selector: 'app-gamelist',
  imports: [ CommonModule, RouterModule, CdkDropList, CdkDrag ],
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: GameMin[] = [];
  listName = '';
  listId: number | undefined;

  constructor(private gameService: GameService,
              private route: ActivatedRoute
  ) {}



  ngOnInit(): void {
    const listId = this.route.snapshot.paramMap.get('id');
    if (listId) {
      // Buscar nome da lista e id
      this.gameService.getGameList().subscribe(lists => {
        const lista = lists.find(list => String(list.id) === listId);
        if (lista) {
          this.listName = lista.name;
          this.listId = lista.id;
        }
      });
      // Buscar games da lista
      this.gameService.getGamesByListId(listId).subscribe(games => {
        this.games = games;
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    if (this.listId === undefined || previousIndex === currentIndex) return;

    moveItemInArray(this.games, previousIndex, currentIndex);

     const dto: ReplacementDTO = {
      sourceIndex: previousIndex,
      destinationIndex: currentIndex
    };

    this.gameService.moveGame(this.listId, dto.sourceIndex, dto.destinationIndex).subscribe({
      next: () => console.log('Ordem atualizada!'),
      error: err => {
        console.error('Erro ao atualizar ordem:', err);

        moveItemInArray(this.games, previousIndex, currentIndex);
      }
    });
  }

}
