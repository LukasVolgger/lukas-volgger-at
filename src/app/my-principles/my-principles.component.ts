import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-principles',
  templateUrl: './my-principles.component.html',
  styleUrls: ['./my-principles.component.scss']
})
export class MyPrinciplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animatePrinciples();
  }

  /**
   * Fades in the contents from left to right within a selected timeOut with an animation
   */
  animatePrinciples() {
    let factor = 200;
    for (let index = 1; index <= 4; index++) {
      let timeOut = factor += 300;
      setTimeout(() => {
        const element = document.getElementById(`principle-${index}`);
        element?.classList.add('fade-in-animation');
      }, timeOut)
    }
  }

}
