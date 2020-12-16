import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../Components/components.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { MorepopularComponent } from './morepopular/morepopular.component';
import { Error404Component } from './error404/error404.component';
import { IdFoodComponent } from './id-food/id-food.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    RecomendedComponent,
    MorepopularComponent,
    Error404Component,
    IdFoodComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgxPaginationModule
  ], exports: [
    HomeComponent
  ],
})
export class PagesModule { }
