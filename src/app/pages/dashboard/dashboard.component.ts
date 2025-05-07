import { VehicleService } from './../../services/vehicle.service';
import { MainSideComponent } from './../../components/main-side/main-side.component';
import { SidenavComponent } from './../../components/sidenav/sidenav.component';
import { Component, Input, Output, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { DashHeaderComponent } from "../../components/dash-header/dash-header.component";
import { DashCarshowComponent } from "../../components/dash-carshow/dash-carshow.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidenavComponent,
    MainSideComponent,
    UserProfileComponent,
    DashHeaderComponent,
    DashCarshowComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title: string = "Dashboard"

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // inicializa com 0 ou valor default



  constructor(private vehicleService: VehicleService) {}

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  ngOnInit(): void {}

  searchVin: string = '';
  vehicleData: any[] = [];

  onSearch() {
    if (!this.searchVin) {
      alert('Digite um VIN!');
      return;
    }

    this.vehicleService.getVehicleData(this.searchVin).subscribe({
      next: (data) => {
        const vehicle = { ...data, vin: this.searchVin };
        this.vehicleData = [vehicle];
      },
      error: (error) => {
        alert(error.error?.message || 'Erro na requisição');
        this.vehicleData = [];
      }
    });
  }
}
