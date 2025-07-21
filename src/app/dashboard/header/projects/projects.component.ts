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

    {
      name: 'Task Management App',
      description:
        'An intuitive and efficient task management system designed to streamline daily productivity. The app supports full CRUD functionality, allowing users to create, view, update, and delete tasks with ease.',
      image: 'assets/Projects/task_management.png',
      technologies: ['Angular', 'Bootstrap', 'Vercel'],
      liveLink: 'https://to-do-app-suriya.vercel.app/',
      githubLink: 'https://github.com/SuriyaKumarD/ToDoApp',
    },
    {
      name: 'Glowing JS Clock',
      description:
        'Fully responsive, real-time digital clock built using pure HTML, CSS, and JavaScript, deployed seamlessly via Vercel. The clock dynamically updates every second using JavaScript’s Date object and DOM manipulation, ensuring accurate time display. The glowing visual effect is achieved through advanced CSS styling, including box-shadow, keyframe animations, and gradient transitions, creating a vibrant and modern UI.',
      image: 'assets/glowingClock.png',
      technologies: [
        'Html',
        'CSS',
        'JavaScript',
        'Vercel',
        'Responsive Design',
      ],
      liveLink: 'https://digitaljsclock.vercel.app/',
      githubLink: 'https://github.com/SuriyaKumarD/Glowing_Digital_CLock',
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
