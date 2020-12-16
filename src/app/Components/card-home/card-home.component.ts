import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input() foods:any = [];
  rand: number;
  constructor( private _router : Router ) { }

  ngOnInit(): void {
    this.rand = Math.floor( Math.random() * 10 ); 
  }

  getFoodId( id: number, title: string, image : string ){
    this._router.navigate(['/Food/',id,title,image]);
  }

}
