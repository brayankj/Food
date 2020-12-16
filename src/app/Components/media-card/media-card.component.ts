import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() foodVeg:any = [];
   constructor( private _router : Router ) { }

  ngOnInit(): void {
  }

  getFoodId( id: number, title: string, image : string ){
    this._router.navigate(['/Food/',id,title,image]);
  }

}
