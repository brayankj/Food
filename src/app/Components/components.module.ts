import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { MenuComponent } from './menu/menu.component';
import { LoadingComponent } from './loading/loading.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { MediaCardComponent } from './media-card/media-card.component';

import { NotImgPipe } from '../pipes/not-img.pipe';
import { DataHtmlPipe } from '../pipes/data-html.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent, 
    LoadingComponent, 
    CardHomeComponent, 
    MediaCardComponent,
    NotImgPipe,
    DataHtmlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    MenuComponent,
    LoadingComponent,
    CardHomeComponent,
    MediaCardComponent,
  ],
})
export class ComponentsModule { }
