import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import {NgClass} from '@angular/common';
import { logoBitcoin, eyeOutline, settingsOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, NgClass], // Added IonBadge to imports
})



export class HomePage {
constructor() {
  addIcons({logoBitcoin, eyeOutline, settingsOutline}); // Added eyeOffOutline to addIcons
}
 
}
