import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonLabel, IonButton, IonTabButton, IonRadio, IonText } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonInput, IonLabel, IonButton, ReactiveFormsModule, IonTabButton, IonRadio, NgIf, IonText]
})

export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  selectButton: string = 'login'; // Default selected button
  isVisible: boolean = true; // Property to control button visibility

  userAuthForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)] ],
  });


  async handleAuthentication() {
    if (this.userAuthForm.valid) {
      try {
        await this.auth.authenticateUser(this.userAuthForm.getRawValue());
        await this.router.navigateByUrl('/home/explore', { replaceUrl: true });
      } catch (error) {
        // Handle error if wrong credentials
        this.userAuthForm.get('password')?.setErrors({ invalidCredentials: true });
        // Reset form after 3 seconds
        setTimeout(() => {
          this.userAuthForm.reset();
        }, 3000);
       
      }


    }
  }

  async handleRegistration() {
    if (this.userAuthForm.valid) {
      await this.auth.registerUser(this.userAuthForm.getRawValue());
      await this.router.navigateByUrl('/home/explore', { replaceUrl: true });
    }
  }

  async handlePasswordReset() {
    if (this.userAuthForm.get('email')?.valid) {
      const email = this.userAuthForm.get('email')?.value;
      if (email) {
        await this.auth.sendPasswordResetEmail(email);
      }
    }
  }

  selectAuth(button: string) {
    if (this.selectButton !== button) {
      this.selectButton = button; // Track which button is selected
      this.isVisible = !this.isVisible;
      this.userAuthForm.reset();
    }

  }


}
