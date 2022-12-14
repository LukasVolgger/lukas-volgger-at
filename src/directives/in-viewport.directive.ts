import { Directive, ElementRef, HostListener } from '@angular/core';
import { NavigationService } from 'src/services/navigation.service';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective {

  constructor(private element: ElementRef, public nav: NavigationService) { }

  @HostListener('window:scroll', ['$event'])

  isScrolledIntoView() {
    const rect = this.element.nativeElement.getBoundingClientRect();
    const topShow = rect.top <= window.innerHeight / 2;
    const bottomShow = rect.bottom <= window.innerHeight / 2;
    const inView = topShow && bottomShow;
    if (inView) this.nav.currentInView = this.element.nativeElement.getAttribute('id');


    // console.log('current in view: ', this.nav.currentInView, 'top:', topShow, 'bottom', bottomShow);

  }

}
