import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { MorepopularComponent } from './Pages/morepopular/morepopular.component';
import { RecomendedComponent } from './Pages/recomended/recomended.component';
import { IdFoodComponent } from './Pages/id-food/id-food.component';
import { SearchComponent } from './Pages/search/search.component';
import { Error404Component } from './Pages/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Popular', component: MorepopularComponent},
  { path: 'Recommended', component: RecomendedComponent},
  { path: 'Food/:id/:title/:img', component: IdFoodComponent },
  { path: 'Search/:keyword', component: SearchComponent},
  { path: '**', component: Error404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
