import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top-btn',
  templateUrl: './back-to-top-btn.component.html',
  styleUrls: ['./back-to-top-btn.component.scss']
})
export class BackToTopBtnComponent implements OnInit {

  constructor() { }

  buttonVisible: boolean = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.buttonVisible = window.pageYOffset >= 100;
    })
  }

  /**
   * Scroll to the top
   */
  scrollToTop() {
    // The timeout is needed to prevent scrolling from stopping immediately after a few pixels
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 250);
  }
}
