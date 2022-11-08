import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  myBirthday: string = '1993-09-19';
  myBirthdayTimestamp: number = new Date(this.myBirthday).getTime();
  timestampNow: number = new Date().getTime();
  myAgeInYears: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.myAgeInYears = Math.floor((this.timestampNow - this.myBirthdayTimestamp) / 31556926000);
  }

}
