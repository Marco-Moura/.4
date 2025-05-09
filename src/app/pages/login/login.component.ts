import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm!: FormGroup;
nome: string = '';
senha!: number;

    constructor(
      private router: Router,
      private LoginService: LoginService,
      private toastr: ToastrService,
    ){
      this.loginForm = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      })
    }

    submit() {
      if (this.loginForm.invalid) {
        this.toastr.error("Preencha todos os campos corretamente!");
        return;
      }

      const nome = this.loginForm.value.nome;
      const senha = this.loginForm.value.password;


      this.LoginService.login(nome, senha).subscribe({
        next: () => {
          this.toastr.success("Login efetuado com sucesso");
          this.router.navigate(["/home"]);
        },
        error: () => {
          this.toastr.error("Erro inesperado! Tente novamente mais tarde");
        }
      });
    }


    navigate(){
      this.router.navigate(["signup"])
    }

    navigateHome(){
      this.router.navigate(["home"])
    }
}
