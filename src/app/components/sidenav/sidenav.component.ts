import { CommonModule } from '@angular/common';
import { Component, input, Output, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  constructor(private Router: Router) { }

  navigateDashboard(){
    this.Router.navigate(['/dashboard'])
  }

  navigateHome(){
    this.Router.navigate(['/home'])
  }

  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
  ];
  items2 = [
    {
      routeLink: 'home',
      icon: 'fal fa-home',
      label: 'Home',
    }
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
