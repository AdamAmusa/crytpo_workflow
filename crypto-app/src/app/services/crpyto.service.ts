import { environment } from 'src/environments/environment';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchlistService } from './watchlist.service';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrpytoService {
  private coinId?: string;
  private marketstatus?: boolean;
  constructor(private watchlist: WatchlistService) { }

  ngOnInit() {
    if(this.coinId == null){
      this.coinId = localStorage.getItem('coinId') ?? '';
    }

  }
  // Set the coinId
  public setcoinId(id: string) {
    // Save the coinId to localStorage so it persists after page reload
    localStorage.setItem('coinId', id);
    this.coinId = id;

  }

  //Get the market status
  public getmarketStatus(): boolean {
      return this.marketstatus?? false;
    }

  // Get the coinId
  public getcoinId() {
    return this.coinId;
  }

  // Get the coin list
  private readonly url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=250";
  private readonly options = { 
    method: 'GET', 
    headers: { 
      'accept': 'application/json', 
      'x-cg-demo-api-key': environment.COINGECKO_API_KEY, // API key for CoinGecko
      // Added CORS headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-cg-demo-api-key'
    }
  };
  //retrieve coin list
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

//retrieve market data by id
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

  //up-to-date ids from watchlist collection to get coin watchlist data from api
  getWatchlist(): Observable<any> {
    return this.watchlist.getCoinList().pipe(//
      switchMap((coinList: string) => {
        console.log('Query string for watchlist:', coinList);
        const url = `https://api.coingecko.com/api/v3/coins/markets?ids=${coinList}&vs_currency=eur`;
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
      })
    );
  }
}



