import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GameList } from '../models/game-list.model';
import { GameMin } from '../models/game-min.model';

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
}
