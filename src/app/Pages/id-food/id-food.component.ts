import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ApiFoodService } from '../../Services/api-food.service';
import { Calories } from '../../Models/calories';

@Component({
  selector: 'app-id-food',
  templateUrl: './id-food.component.html',
  styleUrls: ['./id-food.component.scss']
})
export class IdFoodComponent implements OnInit {

  public id: number;
  public image: string;
  public title: string;
  ingredients: any = [];
  calories: Calories;
  constructor( 
    private _route: ActivatedRoute,
    private _dataApi : ApiFoodService,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.id = params['id'];
      this.title = params['title'];
      this.image = params['img'];
      this._dataApi.getFoodIdIngredient( this.id ).subscribe( data => this.ingredients = data );
      this._dataApi.getFoodIdNutrition( this.id ).subscribe( (data:Calories) => this.calories = data );
    });
  }

}
