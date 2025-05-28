import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);//API key for the generative AI
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Model for the generative AI

// Start a new chat
 const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts:[{text: "Hello"}]
          },
          {
            role: "model",
            parts: [{text: "Hello, how can I help you today?"}]
          },
        ],
      });


@Injectable({
  providedIn: 'root'
})
export class BotService {
  constructor() { }

  // Send a message to the chatbot
  async sendMessage(message: string): Promise<string> {
    // Send the message to the chatbot
    let result = await chat.sendMessage(message);
    return result.response.text();
  }



}
