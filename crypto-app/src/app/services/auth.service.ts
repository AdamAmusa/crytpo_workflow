
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';


interface UserAuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly firebaseAuth = inject(Auth);
  private readonly router = inject(Router);

  async registerUser(userAuthData: UserAuthData): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.firebaseAuth,
      userAuthData.email,
      userAuthData.password
    );
  }

  async authenticateUser(userAuthData: UserAuthData): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this.firebaseAuth,
      userAuthData.email,
      userAuthData.password
    );
  }

  fetchActiveUser(): User | null {
    return this.firebaseAuth.currentUser;
  }

  async sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.firebaseAuth, email);
  }

 
  async signOutUser(): Promise<void> {
    this.router.navigate(['/login']);
    return signOut(this.firebaseAuth);
  }
}