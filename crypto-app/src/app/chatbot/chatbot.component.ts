import { Component, OnInit } from '@angular/core';
import { BotService } from '../services/bot.service';
import { IonButton, IonInput} from '@ionic/angular/standalone';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, CommonModule, IonInput]
})
export class ChatbotComponent  implements OnInit {
  messages: { text: string, sender: string }[] = [];
  userMessage: string = '';

  constructor(private bot:BotService) { }

  ngOnInit() {}

  async sendMessage() {
    if (this.userMessage.trim() === '') {
      return;
    }

    this.messages.push({ text: this.userMessage, sender: 'user' });

    try {
      const botResponse = await this.bot.sendMessage(this.userMessage);
      this.messages.push({ text: botResponse, sender: 'bot' });
    } catch (error) {
      this.messages.push({ text: 'Error: Unable to get response from the bot.', sender: 'bot' });
    }

    this.userMessage = '';
  }

}
