import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CrpytoService {
  private coinId?: string;
  private marketstatus?: boolean;


  ngOnInit() {
    if(this.coinId == null){
      this.coinId = localStorage.getItem('coinId') ?? '';
    }

  }
  public setcoinId(id: string) {
    localStorage.setItem('coinId', id);
    this.coinId = id;

  }

  
  public getmarketStatus(): boolean {
      return this.marketstatus?? false;
    }

  public getcoinId() {
    return this.coinId;
  }

  private readonly url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250";
  private readonly options = { 
    method: 'GET', 
    headers: { 
      'accept': 'application/json', 
      'x-cg-demo-api-key': environment.apiKey,
      // Added CORS headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-cg-demo-api-key'
    }
  };
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


  getMarketData(): Observable<any> {
    if(this.coinId == null){
      this.coinId = localStorage.getItem('coinId') ?? '';
    }
    const url = `https://api.coingecko.com/api/v3/coins/markets?ids=${this.coinId}&vs_currency=eur`;
    return new Observable(observer => {
      fetch(url, this.options)
        .then(response =>
           response.json())
        .then(data => {
          observer.next(data);
          if(data[0]?.market_cap_change_percentage_24h > 0){
            console.log('Market status is up');
            this.marketstatus = true;
          }
          else{
            this.marketstatus = false;
          }
          observer.complete();
        })
        .catch(error => {
          console.error('Error fetching coin list:', error);
          observer.error(error);
        });
    });

  }
}
