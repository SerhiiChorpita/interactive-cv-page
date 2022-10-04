import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  editAll = false;
  editAllBlue = 'url(../../../assets/additional-pictures/edit-blue.svg)';
  editAllBlack = 'url(../../../assets/additional-pictures/edit-black.svg)';


  editName = false;
  editTel = false;
  editEmail = false;
  editLinkedIn = false;

  pencilImg = '../../../assets/additional-pictures/pen-blue.svg'

  constructor() { }

  ngOnInit(): void {
  }

  editallStatus() {
    this.editAll = !this.editAll;
    if (!this.editAll) {
      this.editName = false;
      this.editTel = false;
      this.editEmail = false;
      this.editLinkedIn = false;
    }
  }
  editNameStatus() {
    this.editName = !this.editName;
  }
  editTelStatus() {
    this.editTel = !this.editTel;
  }
  editEmailStatus() {
    this.editEmail = !this.editEmail;
  }
  editLinkedInStatus() {
    this.editLinkedIn = !this.editLinkedIn;
  }

}
