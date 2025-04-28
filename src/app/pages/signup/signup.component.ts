import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl

}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
signupForm!: FormGroup;

    constructor(
      private router: Router,
      private LoginService: LoginService,
      private toastr: ToastrService,
    ){
      this.signupForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),


      })
    }

    submit(){
      this.LoginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
        next: () => this.toastr.success("Login efetuado com sucesso"),
        error: () => this.toastr.error("Erro inesperado! tente novamente mais tarde")
      })
    }

    navigate(){
      this.router.navigate(["login"])

    }
}
