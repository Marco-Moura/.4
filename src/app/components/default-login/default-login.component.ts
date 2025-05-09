import { CommonModule } from '@angular/common';
import { routes } from './../../app.routes';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-default-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './default-login.component.html',
  styleUrl: './default-login.component.scss'
})
export class DefaultLoginComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter<void>();
  @Output("navigate") onNavigate = new EventEmitter();
  @Output("navigateHome") onNavigateHome = new EventEmitter();
  @Output() submit = new EventEmitter<void>();





  navigate(){
    this.onNavigate.emit();
  }

  navigateHome(){
    this.onNavigateHome.emit();
  }
}
