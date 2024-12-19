import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai'
import { environment } from 'src/environments/environment';

const genAI = new GoogleGenerativeAI(environment.apiKey2);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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


  async sendMessage(message: string): Promise<string> {
    let result = await chat.sendMessage(message);
    return result.response.text();
  }



}
