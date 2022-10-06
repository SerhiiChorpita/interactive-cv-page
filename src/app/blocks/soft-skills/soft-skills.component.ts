import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  @Input() editStatusS!: boolean;

  newSoft = {
    name: '',
    description: '',
    editStatus: false,
    arrowDirection: false
  };

  softName!: string;
  softDescr!: string;

  addNewSoftSkill = false;

  softSkills = [
    {
      name: 'Time Management',
      description: 'Goal setting, self-awareness, prioritization, focus, self-motivation, outsourcing, stress management.',
      editStatus: true,
      arrowDirection: true
    },
    {
      name: 'Creative Thinking',
      description: 'Lateral thinking, brainstorming, listening to ideas, open-mindedness.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Problem Solving',
      description: 'Perceptiveness, data gathering, fact finding, problem analysis, brainstorming, research, test development, testing, evaluation.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Interpersonal Skills',
      description: 'Charisma, relationship building, listening, empathy, conflict management.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Project Management',
      description: 'Lean thinking, strategic planning, scheduling, Scrum.',
      editStatus: false,
      arrowDirection: false
    },
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

  addSoftSkill() {
    this.newSoft = {
      name: this.softName,
      description: this.softDescr,
      editStatus: false,
      arrowDirection: false
    };
    let newSoft = this.newSoft;
    this.softSkills.push(newSoft)

  }

  ngOnChanges(changes: boolean): void {
    this.softSkills.forEach(element => {
      element.editStatus = false;
    });
  }

  changeskill(index: number) {
    this.softSkills[index].editStatus = !this.softSkills[index].editStatus;
  }

  arrowDirection(index: number) {
    this.softSkills[index].arrowDirection = !this.softSkills[index].arrowDirection;
    console.log(this.softSkills[index].arrowDirection, this.softSkills[index]);

  }

  saveChanges(index: number) {
    let check = confirm('Do you want to save the changes');
    if (check) {
      this.softSkills[index].editStatus = !this.softSkills[index].editStatus;
    } else {
      return
    }
  }

  deleteSkill(index: number, elem: string) {
    let check = confirm(`Do you want to delete: ${elem}`);
    if (check) {
      this.softSkills.splice(index, 1);
    } else {
      return
    }
  }

  openAddForm() {
    this.addNewSoftSkill = !this.addNewSoftSkill;
  }

}
