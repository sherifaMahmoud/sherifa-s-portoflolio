import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  tag: string;
  icon: string;
  level: number;
  levelLabel: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {

  @ViewChild('skillsSection')
  skillsSection!: ElementRef;

  isVisible = false;

  skills: Skill[] = [
    {
      name: 'Angular',
      tag: 'FW',
      icon: 'devicon-angularjs-plain',
      level: 90,
      levelLabel: 'EXPERT',
    },
    {
      name: 'TypeScript',
      tag: 'TS',
      icon: 'devicon-typescript-plain',
      level: 85,
      levelLabel: 'ADVANCED',
    },
    {
      name: 'JavaScript',
      tag: 'JS',
      icon: 'devicon-javascript-plain',
      level: 88,
      levelLabel: 'ADVANCED',
    },
    {
      name: ' CSS',
      tag: 'HTML5',
      icon: 'devicon-html5-plain ',
      level: 95,
      levelLabel: 'EXPERT',
    },
    {
      name: 'REST APIs',
      tag: 'API',
      icon: 'fa-solid fa-server',
      level: 82,
      levelLabel: 'ADVANCED',
    },
    {
      name: 'Git',
      tag: 'VCS',
      icon: 'devicon-git-plain colored',
      level: 80,
      levelLabel: 'ADVANCED',
    },
    {
      name: 'Bootstrap',
      tag: 'UI',
      icon: 'devicon-bootstrap-plain colored',
      level: 70,
      levelLabel: 'PROFICIENT',
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(this.skillsSection.nativeElement);
  }
}