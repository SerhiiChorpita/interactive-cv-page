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


  editName = false;
  editTel = false;
  editEmail = false;
  editLinkedIn = false;

  pencilImg = '../../../assets/additional-pictures/pen-blue.svg'

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

}
function Import() {
  throw new Error('Function not implemented.');
}

