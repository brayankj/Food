import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../../Services/api-food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods = [];
  foodVeg = [];
  constructor( private _dataApi : ApiFoodService ) { }

  ngOnInit(): void {
    if( this.foods.length == 0 || this.foodVeg.length == 0 ){
      this.getFoodHome();
      this.getFoodSlide();
    }
  }

  getFoodHome() {
    this._dataApi.getRecomended().subscribe( data => this.foods = data );
  }

  getFoodSlide() {
    this._dataApi.getPopular().subscribe( data => this.foodVeg = data );
  }

}
