import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonToggle, IonList, IonListHeader, IonItem, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonToggle, IonList, IonListHeader, IonItem, IonRefresher, IonRefresherContent]
})
export class SettingsPage implements OnInit {

  constructor(private auth: AuthService) { 
  }



  ngOnInit() {
  }

//logout function
 async logout() {
    await this.auth.signOutUser();
  }

}
