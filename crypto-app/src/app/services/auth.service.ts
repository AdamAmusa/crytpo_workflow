
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

  // Register a new user
  async registerUser(userAuthData: UserAuthData): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.firebaseAuth,
      userAuthData.email,
      userAuthData.password
    );
  }

  // Authenticate a user
  async authenticateUser(userAuthData: UserAuthData): Promise<UserCredential> {
    try{
    return signInWithEmailAndPassword(
      this.firebaseAuth,
      userAuthData.email,
      userAuthData.password
    );
  }
  catch(error){
    throw error;
  }
  }

  // Fetch the currently active user
  fetchActiveUser(): User | null {
    return this.firebaseAuth.currentUser;
  }

  // Send a password reset email
  async sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.firebaseAuth, email);
  }

  // Sign out the current user
  async signOutUser(): Promise<void> {
    this.router.navigate(['/login']);
    return signOut(this.firebaseAuth);
  }
}