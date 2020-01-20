import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casetransform'
})
export class CasetransformPipe implements PipeTransform {

  transform(value: string): any {
    if(!value){
      return value;
    }
    else{
       return value.replace(/\w\S*/g, function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
    }
  }

}
