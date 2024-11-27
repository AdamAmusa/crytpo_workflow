import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CrpytoService {

  
private readonly url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250";
private readonly options = {method: 'GET', headers: {accept: 'application/json', 'x-cg-demo-api-key': environment.apiKey}};

  async getCoinList(): Promise<any> {   
    try {
      const response = await fetch(this.url, this.options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching coin list:', error);
      return [];
    }
  }
}
