import { Component, OnInit } from '@angular/core';  // O que já está importado
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-carshow',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './dash-carshow.component.html',
  styleUrls: ['./dash-carshow.component.scss'],
  standalone: true
})
export class DashCarshowComponent implements OnInit {
  vehicles: any[] = [];  // Vai armazenar a lista de veículos que você vai buscar da API
  selectedVehicle: any = null;  // Vai armazenar o veículo que o usuário selecionar no "select"

  constructor(private vehicleService: VehicleService) {}  // O serviço é injetado aqui

  ngOnInit(): void {
    // Quando o componente for carregado, chama o serviço para pegar a lista de veículos
    this.vehicleService.getVehicles().subscribe((response) => {
      this.vehicles = response.vehicles;  // Armazena a lista de veículos na variável 'vehicles'
    });
  }

  // Função chamada quando o usuário seleciona um veículo do "select"
  onVehicleSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;  // Aqui estamos garantindo que seja um HTMLSelectElement
    if (selectElement) {
      const model = selectElement.value;
      this.selectedVehicle = this.vehicles.find(v => v.vehicle === model);
    }
  }
}
