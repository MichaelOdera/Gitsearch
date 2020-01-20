import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appUsernamehighlight]'
})
export class UsernamehighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor= 'black';
   }

}
