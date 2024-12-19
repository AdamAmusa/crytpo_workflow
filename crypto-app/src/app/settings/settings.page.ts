import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonToggle, IonList, IonListHeader, IonItem } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonToggle, IonList, IonListHeader, IonItem]
})
export class SettingsPage implements OnInit {

  constructor(private auth: AuthService) { 

  }

  ngOnInit() {
  }


 async logout() {
    await this.auth.signOutUser();
  }

}
