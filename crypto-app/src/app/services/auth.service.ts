
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


interface UserAuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly firebaseAuth = inject(Auth);

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

 
  async signOutUser(): Promise<void> {
    return signOut(this.firebaseAuth);
  }
}