import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lukas-volgger-at';
  loading: boolean = false;
  navigationLoading: boolean = false;
  initialLoadCompleted: boolean = false;
  // ######################################################################### Loading Screen - BEGIN

  constructor(private router: Router) {
    this.loadFromLocalStorage();

    if (!this.initialLoadCompleted) {
      this.loading = true;
      this.preloadImages();

      setTimeout(() => {
        this.initialLoadCompleted = true;
        localStorage.setItem('initialLoadCompleted', 'true');
        this.loading = false;
      }, 5000)
    }

    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    })

    setInterval(() => {
      console.log(this.navigationLoading);
    }, 1000)
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.navigationLoading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        // this.navigationLoading = false;
      }, 500)
      this.navigationLoading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.navigationLoading = false;
    }
    if (event instanceof NavigationError) {
      this.navigationLoading = false;
    }
  }

  // ######################################################################### Loading Screen - END

  /**
   * Help function to collect all preloaders
   */
  preloadImages() {
    this.preloadImage('./../assets/img/background/forest_1920.jpg');
    this.preloadImage('./../assets/img/background/mountains_1920.jpg');
    this.preloadImage('./../assets/img/cover/lukas-volgger-at_cover.png');
    this.preloadImage('./../assets/img/project covers/delivery_service_cover.png');
    this.preloadImage('./../assets/img/project covers/join_cover.png');
    this.preloadImage('./../assets/img/project covers/photo_gallery_cover.png');
    this.preloadImage('./../assets/img/project covers/pokedex_cover.png');
    this.preloadImage('./../assets/img/project covers/portfolio_cover.png');
    this.preloadImage('./../assets/img/project covers/sharkie_cover.png');
    this.preloadImage('./../assets/img/project covers/tic_tac_toe_cover.png');
    this.preloadImage('./../assets/img/logo_lv_673.png');
    this.preloadImage('./../assets/img/lukas_volgger_1080.png');
  }

  /**
   * Creates a new object for the passed image
   * @param url url The path of the single image
   */
  preloadImage(url: string) {
    const img = new Image();
    img.src = url;
  }

  /**
   * Loads data from the local storage
   */
  loadFromLocalStorage() {
    let itemAsString = localStorage.getItem('initialLoadCompleted');

    if (itemAsString === 'true') {
      this.initialLoadCompleted = true;
    } else {
      this.initialLoadCompleted = false;
    }
  }

}
