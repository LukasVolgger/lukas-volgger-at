import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public nav: NavigationService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;

        switch (url) {
          case '/':
            document.getElementById('nav-link-home')?.classList.add('nav-link-active');

            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-my-work')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#about-me-section':
            document.getElementById('nav-link-about-me')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-my-work')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#my-work':
            document.getElementById('nav-link-my-work')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#contact':
            document.getElementById('nav-link-contact')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-my-work')?.classList.remove('nav-link-active');
            break;

        }
      }
    });
  }

  ngOnInit(): void {
  }

}
