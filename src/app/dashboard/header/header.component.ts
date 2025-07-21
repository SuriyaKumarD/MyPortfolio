import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection = 'home';
  roles = ['Web Developer', 'Angular Expert', 'UI/UX Enthusiast'];

  ngOnInit() {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  checkActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 300;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id') || '';

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        this.activeSection = sectionId;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = '../../../assets/Projects/Files/SuriyaKumarD-resume.pdf';
    link.download = 'SuriyaKumarD-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
