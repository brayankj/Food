import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../../Services/api-food.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss']
})
export class RecomendedComponent implements OnInit {

  more = [];
  p: number = 1;
  constructor( private _dataApi : ApiFoodService ) { }

  ngOnInit(): void {
    if(this.more.length == 0) this._dataApi.getRecomended(40).subscribe( data => this.more = data ); 
  }

}
