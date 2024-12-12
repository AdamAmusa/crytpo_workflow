import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CrpytoService {
  private coinId?: string;
  public setcoinId(id: string) {
    this.coinId = id;
  }

  public getcoinId() {
    return this.coinId;
  }
  
private readonly url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250";
private readonly options = {method: 'GET', headers: {accept: 'application/json', 'x-cg-demo-api-key': environment.apiKey}};

  getCoinList(): Observable<any> {
    return new Observable(observer => {
      fetch(this.url, this.options)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          console.error('Error fetching coin list:', error);
          observer.error(error);
        });
    });
  }

  //retrieve graph data by id

  getChartdata(): Observable<any> { 
    const url = `https://api.coingecko.com/api/v3/coins/${this.coinId}/market_chart?vs_currency=eur&days=1`;
    return new Observable(observer => {
      fetch(url, this.options)
      .then(response => response.json())
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(error => {
        console.error('Error fetching coin list:', error);
        observer.error(error);
      });
  });

  }
}
