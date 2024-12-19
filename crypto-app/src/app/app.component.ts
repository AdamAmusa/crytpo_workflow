import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonInput, IonButton} from '@ionic/angular/standalone';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonInput, ChatbotComponent, IonButton],
})
export class AppComponent {
 
  constructor() {}
}
