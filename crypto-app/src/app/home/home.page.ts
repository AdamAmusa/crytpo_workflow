import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonFab, IonFabButton } from '@ionic/angular/standalone';
import {NgClass} from '@angular/common';
import { logoBitcoin, eyeOutline, settingsOutline, informationOutline, search} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NgIf } from '@angular/common';
import { ChatbotComponent } from '../chatbot/chatbot.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, NgClass, IonFab, IonFabButton, ChatbotComponent, NgIf], // Added IonBadge to imports
})



export class HomePage {
isChatbotVisible: boolean = false;
constructor() {
  addIcons({logoBitcoin, eyeOutline, settingsOutline, informationOutline, search}); // Added eyeOffOutline to addIcons
}


openChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;
}
 
}
