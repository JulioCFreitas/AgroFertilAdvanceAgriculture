import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
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
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    if (this.signupForm.valid) {
        this.loginService.signup(
            this.signupForm.value.name, 
            this.signupForm.value.email, 
            this.signupForm.value.password
        ).subscribe({
            next: () => {
                this.toastService.success("Usuário criado com sucesso!");
                this.router.navigate(["login"]);
            },
            error: (err) => {
                console.error("Erro ao criar usuário:", err);  // Exibe os detalhes do erro
                console.error("Erro detalhado:", err.message);  // Exibe a mensagem de erro
                this.toastService.error("Erro inesperado! Tente novamente mais tarde.");
            }
        });
    } else {
        this.toastService.error("Formulário inválido! Verifique os campos.");
    }
}


  navigate(){
    this.router.navigate(["login"])
  }
}
