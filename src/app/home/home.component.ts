import { Component, OnInit } from '@angular/core';
import { LoadingHandlerService } from 'src/services/loading-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public loader: LoadingHandlerService) { }

  ngOnInit(): void {
  }

}
