import { Routes } from '@angular/router';
import { HomeComponent } from './features/games/components/home/home.component';
import { GameCollectionComponent } from './features/games/pages/game-collection/game-collection.component';
import { GamelistComponent } from './features/games/pages/gamelist/gamelist.component';


export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'lists', component: GameCollectionComponent
  },
  {
    path: 'lists/:id', component: GamelistComponent
  },
  {
    path: 'lists/:id/games', component: GamelistComponent
  }

];
