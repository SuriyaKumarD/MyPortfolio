import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;

  currentSlide = 0;
  autoSlideInterval: any;

  projects: Project[] = [
    // {
    //   name: 'Portfolio Website',
    //   description:
    //     'A modern portfolio website built with Angular, featuring smooth animations and responsive design.',
    //   image: 'assets/projects/portfolio.jpg',
    //   technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
    //   liveLink: 'https://yourportfolio.com',
    //   githubLink: 'https://github.com/yourusername/portfolio',
    // },
    // {
    //   name: 'E-Commerce Dashboard',
    //   description:
    //     'Admin dashboard for managing products, orders, and customers with real-time updates.',
    //   image: 'assets/projects/dashboard.jpg',
    //   technologies: ['Angular', 'NgRx', 'Material UI', 'Firebase'],
    //   liveLink: 'https://dashboard-demo.com',
    //   githubLink: 'https://github.com/yourusername/dashboard',
    // },
    {
      name: 'Task Management App',
      description:
        'An intuitive and efficient task management system designed to streamline daily productivity. The app supports full CRUD functionality, allowing users to create, view, update, and delete tasks with ease.',
      image: 'assets/Projects/task_management.png',
      technologies: ['Angular', 'Bootstrap', 'Vercel'],
      liveLink: 'https://to-do-app-suriya.vercel.app/',
      githubLink: 'https://github.com/SuriyaKumarD/ToDoApp',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
    this.updateCarousel();
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.projects.length) % this.projects.length;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  private updateCarousel() {
    const offset = this.currentSlide * -100;
    this.carousel.nativeElement.style.transform = `translateX(${offset}%)`;
  }
}
