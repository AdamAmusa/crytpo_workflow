import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class CrpytoService {
private readonly url = "https://api.coingecko.com/api/v3/coins/list";
private readonly options = {method: 'GET', headers: {accept: 'application/json'}};




  constructor() { }

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
