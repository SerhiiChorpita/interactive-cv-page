import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() editStatusE!: boolean;
  @Output() projectCount = new EventEmitter<number>();

  addNewProject = false;

  newProject = {
    name: '',
    imagePath: '',
    description: '',
    editStatus: false
  }

  newProjName!: string;
  newProjimagePath!: string;
  newProjDesc!: string;


  checkTechStatus1 = false;
  editStatus1 = false;

  checkTechStatus2 = false;
  editStatus2 = false;

  checkTechStatus3 = false;
  editStatus3 = false;

  projectId!: number;

  allProjects = [
    {
      name: 'FlightAware',
      imagePath: '../../../assets/projects-image/fly-tracking.png',
      description: 'Best Flight Tracker: Live Tracking Maps, Flight Status, and Airport Delays for airline flights, private/GA flights, and airports.',
      editStatus: false
    },
    {
      name: 'YouTube',
      imagePath: '../../../assets/projects-image/youtube.jpg',
      description: 'Watch your favorite videos, listen to your favorite songs, upload your own videos and share them with friends, family and the whole world.',
      editStatus: false
    },
    {
      name: 'Google',
      imagePath: '../../../assets/projects-image/Google.webp',
      description: 'Search the world`s information, including webpages, images, videos and more.Google has many special features to help you find exactly what you`re looking for.',
      editStatus: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.projectCount.emit(this.allProjects.length);
  }

  ngOnChanges(changes: boolean): void {
    this.allProjects.forEach(element => {
      element.editStatus = false;
    });
  }

  addnewProject() {
    this.newProject = {
      name: this.newProjName,
      imagePath: this.newProjimagePath,
      description: this.newProjDesc,
      editStatus: false
    }
    let newProj = this.newProject;
    this.allProjects.push(newProj);
    this.projectCount.emit(this.allProjects.length);
    console.log(newProj);

  }

  changeEditStatus(index: number) {
    this.allProjects[index].editStatus = !this.allProjects[index].editStatus;
  }

  saveChanges(index: number) {
    let check = confirm('Do you want to save the changes');
    if (check) {
      this.allProjects[index].editStatus = !this.allProjects[index].editStatus;
    } else {
      return
    }
  }

  deleteElem(index: number, elem: string) {
    let check = confirm(`Do you want to delete: ${elem}`);

    if (check) {
      this.allProjects.splice(index, 1);
      this.projectCount.emit(this.allProjects.length);
    } else {
      return
    }
  }

  openAddForm() {
    this.addNewProject = !this.addNewProject;
  }

}
