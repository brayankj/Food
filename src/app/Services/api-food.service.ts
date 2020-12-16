import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {

  apiKey = environment.apiKey;
  https: string = 'https://api.spoonacular.com';
  public moreRecomended$ = new EventEmitter<any>();
  constructor( private _https : HttpClient ) { }
  
  getRecomended( number : Number = 8 ) : Observable<any>{
    return this._https.get(`${ this.https }/recipes/random?number=${ number }&apiKey=${ this.apiKey }`)
      .pipe( map(  ( recipes:any ) => recipes.recipes ) );
  }

  getPopular( number : Number = 6) : Observable<any>{
    return this._https.get(`${ this.https }/recipes/random?number=${ number }&tags=vegetarian&apiKey=${ this.apiKey }`)
      .pipe( map( ( recipes:any ) => recipes.recipes  ));
  }

  search( keyword : string ) : Observable<any>{
    return this._https.get(`${ this.https }/recipes/complexSearch?query=${ keyword }&number=25&apiKey=${ this.apiKey }`)
      .pipe( map( (data:any) => data.results ) );
  }

  getFoodIdIngredient(id : number) : Observable<any>{
    return this._https.get(`${ this.https }/recipes/${ id }/ingredientWidget.json?apiKey=${ this.apiKey }`)
      .pipe( map( ( ingredients:any ) => ingredients.ingredients ) );
  }

  getFoodIdNutrition(id : number) : Observable<any>{
    return this._https.get(`${ this.https }/recipes/${ id }/nutritionWidget.json?apiKey=${ this.apiKey }`)
    .pipe( map( ( calories:any ) => calories ) );
  }

}
