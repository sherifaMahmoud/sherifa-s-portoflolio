import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  file: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectsSection')
  projectsSection!: ElementRef;

  isVisible = false;

  projects: Project[] = [
    {
      title: 'MedHub ',
      file: 'medhub.ts',
      image: 'assets/projects/restaurant.png',
      description:
        'A modern healthcare management platform that streamlines patient records, appointments, and medical workflows through a responsive and user-friendly interface.',
      tech: ['Angular', 'TypeScript', 'Bootstrap'],
      link: 'https://www.med-hub.org/',
    },
    {
      title: 'Mother Dashboard',
      file: 'mother_dashboard.ts',
      image: 'assets/projects/mother-dashboard.png',
      description:
        'An AI-powered dashboard designed to support mothers with smart features, including an intelligent chatbot, delivered through a modern Angular-based interface.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Chart.js'],
      link: 'https://motherdashboard.vercel.app/login',
    },

    {
      title: 'Yodneen',
      file: 'yodneen.ts',
      image: 'assets/projects/admin-dashboard.png',
      description:
        'A comprehensive e-commerce platform featuring product browsing, shopping cart management, and a seamless user experience with a clean and responsive design.',
      tech: ['Angular', 'Bootstrap'],
      link: 'https://my-store-project-834m.vercel.app/register',
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(this.projectsSection.nativeElement);
  }
}