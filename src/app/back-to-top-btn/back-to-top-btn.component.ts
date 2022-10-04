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

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
