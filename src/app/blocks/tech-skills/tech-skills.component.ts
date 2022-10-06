import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  @Input() editStatusT!: boolean;

  newTech = {
    name: '',
    description: '',
    editStatus: false,
    arrowDirection: false
  };

  techName!: string;
  techDescr!: string;

  addNewTechSkill = false;
  indexNum!: number;

  techSkills = [
    {
      name: 'JavaScript',
      description: 'It`s like school mathematics, where you need to put the right formula to get the right solution.Similarly, many codes that everyone correct are sloppy, but the language is easy and written pretty eloquently when done right.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Node JS',
      description: 'The following important skill for a JavaScript developer is learning Node JS. It is a run-time tool that enables to do Back-end framework. Today, many companies use Node JS for the back-end, making it a valuable skill for a JavaScript developer.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Git',
      description: 'Earlier, JavaScript used to have many issues like browser compatibility, safety, scaling difficulty, and more. But TypeScript has made many things more accessible; it transpile to clean ES5 code, which solves many compatibility problems. It also allows you to write JavaScript in a more traditional object-oriented way like C#/Java.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: ' jQuery',
      description: 'The next JavaScript library you should learn is jQuery. It`s designed specifically to simplify HTML DOM tree traversal and manipulation, including the CSS, animation, and Ajax.Also, it`s available free and open-source software. Today more than 73% of 10 million websites are using jQuery.',
      editStatus: false,
      arrowDirection: false
    },
    {
      name: 'Framework and Libraries',
      description: 'Both the framework enjoys good popularity in the market or can also make a detailed comparison of these languages to choose the right one. But again, you can trust both unless you have a different requirement. I will suggest you learn both languages if you want a secure and brighter future.',
      editStatus: false,
      arrowDirection: false
    },
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

  addTechSkill() {
    this.newTech = {
      name: this.techName,
      description: this.techDescr,
      editStatus: false,
      arrowDirection: false
    };
    let newTech = this.newTech;
    this.techSkills.push(newTech)
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

  deleteSkill(index: number, elem: string) {
    let check = confirm(`Do you want to delete: ${elem}`);
    if (check) {
      this.techSkills.splice(index, 1);

    } else {
      return
    }
  }

  openAddForm() {
    this.addNewTechSkill = !this.addNewTechSkill;
  }

}
