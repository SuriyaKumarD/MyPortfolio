import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  frontendSkills = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'JavaScript', icon: 'fab fa-js' },
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'Python', icon: 'fab fa-python' },
  ];

  toolsSkills = [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'npm', icon: 'fab fa-npm' },
    { name: 'AWS', icon: 'fab fa-aws' },
  ];
}
