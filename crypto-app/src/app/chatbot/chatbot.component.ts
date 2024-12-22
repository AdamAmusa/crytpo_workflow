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

  // Function to send message to the bot
  async sendMessage() {
    if (this.userMessage.trim() === '') {
      return;
    }

    // Add user message to the messages array
    this.messages.push({ text: this.userMessage, sender: 'user' });

    try {
      // Get response from the bot
      const botResponse = await this.bot.sendMessage(this.userMessage);
      // Add bot response to the messages array
      this.messages.push({ text: botResponse, sender: 'bot' });
    } catch (error) {
      this.messages.push({ text: 'Error: Unable to get response from the bot.', sender: 'bot' });
    }

    this.userMessage = '';
  }

}
