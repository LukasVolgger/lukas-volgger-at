import { Injectable } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingHandlerService {
  loading: boolean = false;
  navigationLoading: boolean = false;
  initialLoadCompleted: boolean = false;

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

  /**
   * Help function to collect all preloaders
   */
  preloadImages() {
    this.preloadImage('./../assets/img/background/network.jpg');
    this.preloadImage('./../assets/img/cover/lukas-volgger-at_cover.png');
    this.preloadImage('./../assets/img/project covers/delivery_service_cover.png');
    this.preloadImage('./../assets/img/project covers/join_cover.png');
    this.preloadImage('./../assets/img/project covers/photo_gallery_cover.png');
    this.preloadImage('./../assets/img/project covers/pokedex_cover.png');
    this.preloadImage('./../assets/img/project covers/portfolio_cover.png');
    this.preloadImage('./../assets/img/project covers/ring_of_fire_cover.png');
    this.preloadImage('./../assets/img/project covers/sharkie_cover.png');
    this.preloadImage('./../assets/img/project covers/tic_tac_toe_cover.png');
    this.preloadImage('./../assets/img/logo.png');
    this.preloadImage('./../assets/img/lukas_volgger.png');
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
