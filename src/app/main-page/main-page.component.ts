import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  checkEditStatus!: boolean;

  projCount = 0;

  constructor() { }

  ngOnInit(): void {
  }
  changeValue(status: boolean) {
    this.checkEditStatus = status;
  }
  setProjNumber(value: number) {
    setTimeout(() => {
      this.projCount = value;
    }, 0)
  }


}
