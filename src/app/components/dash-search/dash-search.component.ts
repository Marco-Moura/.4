import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dash-search',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './dash-search.component.html',
  styleUrl: './dash-search.component.scss'
})
export class DashSearchComponent {
  vin = '';
  dados: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  buscarDados() {
    if (!this.vin) return;

    this.vehicleService.getVehicleData(this.vin).subscribe({
      next: (res) => {
        this.dados = [
          {
            vin: this.vin,
            odometro: res.odometro,
            nivelCombustivel: res.nivelCombustivel,
            status: res.status,
            lat: res.lat,
            long: res.long,
          },
        ];
      },
      error: (err) => {
        alert(err.error?.message || 'Erro ao buscar dados');
      },
    });
  }
}
