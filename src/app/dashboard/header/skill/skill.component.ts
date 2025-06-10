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
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  ];

  backendSkills = [
    { name: 'C#', icon: 'devicon-csharp-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: '.NET Core', icon: 'devicon-dotnetcore-plain' },
  ];

  toolsSkills = [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'npm', icon: 'devicon-npm-original-wordmark colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
  ];
}
