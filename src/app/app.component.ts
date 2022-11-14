import { Component } from '@angular/core';
import { LoadingHandlerService } from 'src/services/loading-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lukas-volgger-at';

  constructor(public loader: LoadingHandlerService) { }

}
