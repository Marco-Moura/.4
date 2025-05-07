import { VehicleService } from './../../services/vehicle.service';
import { MainSideComponent } from './../../components/main-side/main-side.component';
import { SidenavComponent } from './../../components/sidenav/sidenav.component';
import { Component, Input, Output, signal } from '@angular/core';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { DashHeaderComponent } from "../../components/dash-header/dash-header.component";
import { DashCarshowComponent } from "../../components/dash-carshow/dash-carshow.component";
import { DashSearchComponent } from "../../components/dash-search/dash-search.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidenavComponent,
    MainSideComponent,
    UserProfileComponent,
    DashHeaderComponent,
    DashCarshowComponent,
    DashSearchComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title: string = "Dashboard"

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // inicializa com 0 ou valor default

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }



  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {}

  searchVin: string = '';
  vehicleData: any[] = [];

  onSearch(vin: string) {
    if (this.searchVin.trim()) {
      this.vehicleService.getVehicleData(this.searchVin.trim()).subscribe({
        next: (data) => this.vehicleData = [data],
        error: (err) => alert(err.error.message || 'Erro ao buscar VIN'),
      });
    }
  }
}
