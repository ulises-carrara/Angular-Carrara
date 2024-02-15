import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  revealPassword = false
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      contraseña: this.fb.control('', [Validators.required])
    })

  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.authService.login(this.loginForm.value)

    }
  }
} 
