import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataHtml'
})
export class DataHtmlPipe implements PipeTransform {

  transform( text: string ): any {
    
    return null;

  }

}
