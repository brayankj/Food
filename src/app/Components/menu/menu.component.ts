import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  search: FormControl;
  constructor( private _router: Router ) { }

  ngOnInit(): void {
    this.search = new FormControl( '', [Validators.required] );
    this.search.valueChanges.pipe( debounceTime(400) ).subscribe( keyword => this.Search( keyword ) );
  }

  Search( keyword:string ){
    keyword = keyword.trim();
    if( keyword.length > 3 && this.search.valid ) this._router.navigate(['/Search/',keyword]);
  }

  getSeach( keyword:string ){
    this._router.navigate(['/Search/',keyword]);
  }

}
