import { Component, OnInit } from '@angular/core';
import { ApiFoodService } from '../../Services/api-food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  foods = [];
  keyword: string;
  p: number = 1;
  constructor(
    private _route : ActivatedRoute,
    private _apiData : ApiFoodService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.keyword = params['keyword'];
      this._apiData.search(this.keyword).subscribe( data => this.foods = data );
    });
  }

}
