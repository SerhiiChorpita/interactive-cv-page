import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  checkEditStatus!: boolean;

  projCount = 0;

  newImage = ``;
  avatarPath = '../../assets/logo-avatar/avatar.png';
  currentUrl = `url(${this.avatarPath})`;
  editAvatar = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(status: boolean) {
    this.checkEditStatus = status;
    this.editAvatar = false
  }

  setProjNumber(value: number) {
    setTimeout(() => {
      this.projCount = value;
    }, 0)
  }
  editAvatarStatus() {
    this.editAvatar = !this.editAvatar;
  }

  loadImage() {
    this.avatarPath = this.newImage;
    console.log(this.avatarPath);
    console.log(this.newImage);
    this.currentUrl = `url(${this.avatarPath})`;
  }

  saveChanges() {
    let check = confirm('Do you want to save current image?');
    if (check) {
      this.editAvatarStatus()
    } else {
      return
    }
  }
}
