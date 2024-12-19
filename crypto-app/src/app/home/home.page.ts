import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonFab, IonFabButton } from '@ionic/angular/standalone';
import {NgClass} from '@angular/common';
import { logoBitcoin, eyeOutline, settingsOutline, addCircle} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ChatbotComponent } from '../chatbot/chatbot.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, NgClass, IonFab, IonFabButton, ChatbotComponent], // Added IonBadge to imports
})



export class HomePage {
constructor() {
  addIcons({logoBitcoin, eyeOutline, settingsOutline, addCircle}); // Added eyeOffOutline to addIcons
}
 
}
