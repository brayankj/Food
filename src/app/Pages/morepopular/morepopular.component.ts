import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../../Services/api-food.service';

@Component({
  selector: 'app-morepopular',
  templateUrl: './morepopular.component.html',
  styleUrls: ['./morepopular.component.scss']
})
export class MorepopularComponent implements OnInit {

  more = [];
  p: number = 1;
  constructor( private _apiData : ApiFoodService ) { }

  ngOnInit(): void {
    if(this.more.length == 0) this._apiData.getPopular(40).subscribe( data => this.more = data );
  }

}
