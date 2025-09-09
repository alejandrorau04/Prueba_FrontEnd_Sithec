import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  hideHeader = false;
  lastScrollTop = 0;
  isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 992;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 992;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.hideHeader = currentScroll > this.lastScrollTop && currentScroll > 100;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
