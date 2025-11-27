import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  error = '';


  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }


  submit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = '';


    this.auth.login(this.loginForm.value as { username: string; password: string }).subscribe({
      next: (token) => {
        this.loading = false;
        if (token) {
          this.router.navigate(['/courses']);
        } else {
          this.error = 'Login succeeded but token not found in response.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Login failed';
      }
    });
  }
}