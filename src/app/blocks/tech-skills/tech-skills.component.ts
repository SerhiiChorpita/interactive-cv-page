import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  @Input() editStatusT!: boolean;

  addNewTechSkill = false;
  indexNum!: number;

  techSkills = [
    {
      name: 'Time Management',
      description: 'Goal setting, self-awareness, prioritization, focus, self-motivation, outsourcing, stress management.',
      editStatus: false,
      arrowDirection: false
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
    this.techSkills.forEach(element => {
      element.editStatus = false;
    });
  }

  changeskill(index: number) {
    this.techSkills[index].editStatus = !this.techSkills[index].editStatus;
  }
  arrowDirection(index: number) {
    this.techSkills[index].arrowDirection = !this.techSkills[index].arrowDirection;
    console.log(this.techSkills[index].arrowDirection, this.techSkills[index]);

  }
  saveChanges(index: number) {
    let check = confirm('Do you want to save the changes');
    if (check) {
      this.techSkills[index].editStatus = !this.techSkills[index].editStatus;
    } else {
      return
    }
  }

  openAddForm() {
    this.addNewTechSkill = !this.addNewTechSkill;
  }



}
