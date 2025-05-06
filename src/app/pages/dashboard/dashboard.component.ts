import { MainSideComponent } from './../../components/main-side/main-side.component';
import { SidenavComponent } from './../../components/sidenav/sidenav.component';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidenavComponent,
    MainSideComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title: string = "Dashboard"



}
