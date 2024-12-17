import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonInput, IonLabel, IonButton]
})
export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  userAuthForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  async handleAuthentication() {
    if (this.userAuthForm.valid) {
      await this.auth.authenticateUser(this.userAuthForm.getRawValue());
      await this.router.navigateByUrl('/home/explore', { replaceUrl: true });
    }
  }

  async handleRegistration() {
    if (this.userAuthForm.valid) {
      await this.auth.registerUser(this.userAuthForm.getRawValue());
      await this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }
}
