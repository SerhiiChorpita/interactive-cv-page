import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  @Input() editStatusS!: boolean;

  addNewSoftSkill = false;
  indexNum!: number;

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


  constructor() { }

  ngOnInit(): void {
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


  openAddForm() {
    this.addNewSoftSkill = !this.addNewSoftSkill;
  }

}
