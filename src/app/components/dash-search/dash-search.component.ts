import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dash-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './dash-search.component.html',
  styleUrl: './dash-search.component.scss'
})
export class DashSearchComponent {
  @Input() searchVin: string = '';
  @Input() vehicleData: any[] = [];

  @Output() search = new EventEmitter<string>(); // evento de saída para o componente pai

  onSearchClick() {
    this.search.emit(this.searchVin); // notifica o componente pai
  }

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles`);
  }

  getVehicleData(vin: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicleData`, { vin });
  }

  onSearch() {
    this.search.emit(this.searchVin);
  }
}
