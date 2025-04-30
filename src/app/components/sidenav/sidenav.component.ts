import { CommonModule } from '@angular/common';
import { Component, input, Output, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'home',
      icon: 'fal fa-circle',
      label: 'Home'
    },
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }



}
