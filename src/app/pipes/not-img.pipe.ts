import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notImg'
})
export class NotImgPipe implements PipeTransform {

  transform( img: string ): any {

    if( img == undefined ){
      return './assets/notimg.jpg';
    }else{
      return img;
    }

  }

}
