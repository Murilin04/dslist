import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GameList } from '../models/game-list.model';
import { GameMin } from '../models/game-min.model';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { ReplacementDTO } from '../models/replacementDTO';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http = inject(HttpClient);
  private API = 'http://localhost:8080';

  constructor() { }

  getGameList() {
    return this.http.get<GameList[]>(`${this.API}/lists`);
  }

  getGamesByListId(listId: string) {
    return this.http.get<GameMin[]>(`${this.API}/lists/${listId}/games`);
  }

  getGame(gameId: string) {
    return this.http.get<Game>(`${this.API}/games/${gameId}`);
  }

  moveGame(listId: number, sourceIndex: number, destinationIndex: number): Observable<void> {
    const body: ReplacementDTO = {
      sourceIndex,
      destinationIndex
    };

    return this.http.post<void>(`${this.API}/lists/${listId}/replacement`, body);
  }

}
