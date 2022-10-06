import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() editStatusC = false;
  @Output() changeValue = new EventEmitter<boolean>();

  editStatusCBlue = 'url(../../../assets/additional-pictures/edit-blue.svg)';
  editStatusCBlack = 'url(../../../assets/additional-pictures/edit-black.svg)';

  userData = {
    name: 'Petro Petriv',
    tel: '+38 (093) 123 4567',
    email: 'petro.petriv@gmail.com',
    linkedIn: 'www.linkedin.com/in/petro-petriv',
  }
  editName = false;
  editTel = false;
  editEmail = false;
  editLinkedIn = false;

  pencilImg = 'url(../../assets/logo-avatar/avatar.png)'

  constructor() { }

  ngOnInit(): void {
  }

  editCStatus() {
    this.editStatusC = !this.editStatusC;
    this.changeValue.emit(this.editStatusC);
  }

  saveChanges() {
    let check = confirm('Do you want to save the changes');
    if (check) {
      this.editStatusC = !this.editStatusC;
      if (!this.editStatusC) {
        this.editName = false;
        this.editTel = false;
        this.editEmail = false;
        this.editLinkedIn = false;
        this.changeValue.emit(this.editStatusC);
      }
    } else {
      return
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
  saveChangesName() {
    let check = confirm('Do you want to save new name?');
    if (check) {
      this.editName = !this.editName;
    } else {
      return
    }
  }
  saveChangesTel() {
    let check = confirm('Do you want to save new phone number?');
    if (check) {
      this.editTel = !this.editTel;
    } else {
      return
    }
  }
  saveChangesEmail() {
    let check = confirm('Do you want to save new email?');
    if (check) {
      this.editEmail = !this.editEmail;
    } else {
      return
    }
  }
  saveChangesLink() {
    let check = confirm('Do you want to save new linkedIn address?');
    if (check) {
      this.editLinkedIn = !this.editLinkedIn;
    } else {
      return
    }
  }
}